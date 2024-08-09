# Redux Toolkit: `createAsyncThunk` Documentation

## 1. Introduction to `createAsyncThunk`

`createAsyncThunk` is a utility from the Redux Toolkit that allows you to create asynchronous actions. It's typically used for fetching data from an API or performing other asynchronous operations in your Redux application. This function generates a thunk that automatically dispatches lifecycle actions (`pending`, `fulfilled`, `rejected`) based on the promise returned by the provided payload creator.

## 2. Basic Usage

Here's how you can create an asynchronous thunk:

```javascript
import { createAsyncThunk } from "@reduxjs/toolkit";

// Define the thunk
export const fetchUser = createAsyncThunk(
  "users/fetchUser", // action type string
  async (userId, thunkAPI) => {
    const response = await fetch(`/api/user/${userId}`);
    return response.json(); // Returns a promise that will be handled by the thunk
  }
);
```

### Example with Comments

```javascript
import { createAsyncThunk } from "@reduxjs/toolkit";

// The first argument is the action type string, which is used in the Redux action
// The second argument is the payload creator function, where the async logic lives
export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async (userId, thunkAPI) => {
    try {
      // Attempt to fetch user data from an API
      const response = await fetch(`/api/user/${userId}`);
      // Return the JSON response, which will be the `fulfilled` action's payload
      return response.json();
    } catch (error) {
      // You can return a rejected action with a custom error message
      return thunkAPI.rejectWithValue("Failed to fetch user data");
    }
  }
);
```

## 3. Handling Lifecycle Actions

When using `createAsyncThunk`, Redux Toolkit automatically generates action types for different stages of the asynchronous operation:

- **`pending`**: Dispatched when the async function starts.
- **`fulfilled`**: Dispatched when the async function successfully completes.
- **`rejected`**: Dispatched if the async function fails.

You can handle these actions in your reducers:

```javascript
import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./thunks";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
```

## 3.1 Example from Udemy Course

```jsx
// ... inside the userSlice.js ...

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// createAsyncThunk accepts: action type name and the function when that action is dispatched
// createAsyncThunk produces 3 additional action types:
// 1. one for depending promise state
// 2. one for the fulfilled state
// 3. one for the rejected state
// this cases should be handled separetly in reducers
export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in.
    // Payload of the FULFILLED state
    return { position, address };
  }
);

const initialState = {
  username: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error =
          "There was a problem getting your address. Make sure to fill this field!";
      }),
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
```

## 4. Using with Axios for API Calls

You can also use `axios` with `createAsyncThunk`:

```javascript
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/user/${userId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
```

### Example with Comments

```javascript
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async (userId, thunkAPI) => {
    try {
      // Axios GET request to fetch user data
      const response = await axios.get(`/api/user/${userId}`);
      // Return the response data, which will be handled by `fulfilled` action
      return response.data;
    } catch (error) {
      // Handle errors, potentially returning a custom error message
      return thunkAPI.rejectWithValue("User not found");
    }
  }
);
```

## 5. Error Handling and Custom Rejection Messages

Handling errors effectively is crucial in async operations. `createAsyncThunk` allows you to pass a custom error message using `thunkAPI.rejectWithValue`:

```javascript
export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`/api/user/${userId}`);
      return response.data;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      return thunkAPI.rejectWithValue("Network error");
    }
  }
);
```

## 6. Best Practices

### Naming Conventions

- **Action Type String**: Use descriptive names, e.g., `'users/fetchUser'`.
- **Thunk Name**: The name should clearly indicate the action being performed, e.g., `fetchUser`.

### Handling Complex Payloads

If your thunk needs to handle complex data, consider structuring your payload properly and documenting the expected input clearly.

### Chaining Multiple Thunks

You can dispatch multiple thunks in sequence by utilizing `thunkAPI.dispatch` within your thunk.

## 7. Common Patterns

### Handling Multiple Thunks in a Single Slice

If you have multiple async thunks in one slice, use `extraReducers` to manage their states:

```javascript
builder
  .addCase(fetchUser.pending, (state) => {
    state.status = "loading";
  })
  .addCase(fetchUser.fulfilled, (state, action) => {
    state.status = "succeeded";
    state.data = action.payload;
  })
  .addCase(fetchUser.rejected, (state, action) => {
    state.status = "failed";
    state.error = action.payload || action.error.message;
  });
```

### Using ExtraReducers

Using `extraReducers` allows you to handle actions generated outside of the slice, such as those from `createAsyncThunk`.

## 8. Conclusion and Tips

- Always handle the `pending`, `fulfilled`, and `rejected` states in your reducers to provide a robust user experience.
- Consider using `axios` for more complex API interactions, as it provides more features than the native `fetch`.
- Use `thunkAPI.rejectWithValue` to provide meaningful error messages that can be displayed in the UI.

Happy coding!
