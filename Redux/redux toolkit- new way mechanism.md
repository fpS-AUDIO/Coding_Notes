# Redux ToolKit (RTK)

**Redux ToolKit** is the modern way of writing Redux code, and it's advised by the Redux team to now prefer Redux Toolkit over classic Redux.
Redux toolit is an opinionated approach that forces everyone to use best practices that the community has learned over the years. It's 100% compatible with old Redux.

The main advantages:

- it allows to write a lot less code (less 'boilerplate' code)
- out of the box it gives:
  - allows us to write code which 'mutates' state inside reducers (this code is converted to immutable logic behind the scenes by `Immer` library)
  - automatically creates action creators from reducers
  - automatically setup `thunk` middleware and `DevTools`
  - other staff

---

### Installation

To install RDK: `npm i @reduxjs/toolkit`

---

### Creating the store

```jsx
// ..... inside the store.js .....

import AccountReducer from "./features/accounts/accountSlice";
import CustomerReducer from "./features/customers/customerSlice";

// import configureStore() instead of deprecated createStore()
import { configureStore } from "@reduxjs/toolkit";

/* ----- configureStore() automatically:
- combine the reducers
- add the Thunk middleware
- set up the developer tools
*/

// configureStore accepta object of options
// 'reducer' is the root reducer
// 'reducer' should be object which tells RTK about the reducers
const store = configureStore({
  reducer: {
    account: AccountReducer,
    customer: CustomerReducer,
  },
});

export default store;
```

---

### Creating the feature slice

```jsx
// ..... inside the accountSlice.js .....

/* ----- createSlice():
 - automatically creates action creators from the reducers
 - makes writing these reducers a lot easier (no switch statement/default case)
 - syntax is like the state is mutated (behind the scene 'Immer' converts it to pure code )
*/

import { createSlice } from "@reduxjs/toolkit";

// creating inital state
const initalStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

// createSlice accepts an object of options:
// - name of the slice
// - initialState
// - reducers (object) -> one reducer for each action

const accountSlice = createSlice({
  name: `account`,
  initialState: initalStateAccount,
  reducers: {
    // each reducer recives current state and action
    // same as writing case "account/deposit"
    deposit(state, action) {
      // writing mutating logic
      state.balance += action.payload;
    },

    withdraw(state, action) {
      state.balance -= action.payload;

      // featureSlice.caseReducers helps to manually call a reducer
      // Example: accountSlice.caseReducers.deposit(state, action)
    },

    // by default the action creators of RTK accepts only one argument,
    // so or pass-in a precreated object with different key-parameters
    // or use the prepare() method
    // so the action function becomes an object,
    // the logic (function itself) is called 'reducer'
    // and before the reducer function the data is prepared
    // prepare() can accept multiple arguments
    // prepare() should return an object which becomes 'payload' in the reducer

    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },

      reducer(state, action) {
        // use just 'return' not 'return state' like in old way (since its mutating logic)
        if (state.loan > 0) return;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },

    payLoan(state, action) {
      // NOTE: since it's a function and not object careful on the sequence
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
});

// console.log(accountSlice);
// OUTPUT:
// { name: "account",
//     reducer: reducer(state, action),
//     actions: {…}, caseReducers: {…},
//     getInitialState: getInitialState(),
//     reducerPath: "account", getSelectors:
//     getSelectors(selectState), selectors: {},
//     selectSlice: selectSlice(state),
//     injectInto: injectInto(injectable)
// }

// named export for action functions (destructure and immediatly extract)
export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

// default export for reducer
export default accountSlice.reducer;
```

---

### Adding Thunk Middleware

To add Thunk in Redux Toolkit way you should use `createAsyncThunk` function. However you can simply use the action creator function.

#### **The quick way** (use the action creator function):

```jsx
// same code as before (added only convertinCurrency to reducers)

// named export for action functions (destructure and immediatly extract)
export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

// this work out of the box

// Action Creator Function for Account deposit
// (!) REMOVE the deposit from above and export this one
export function deposit(amount, currency) {
  // possible currencies for this example: USD, EUR, GBP

  // if currency is USD, we don't need to convert anything, so we're not using middleware
  if (currency === "USD")
    return {
      // (!) IMPORTANT to mantain the [name]/[action name] convention
      type: "account/deposit",
      payload: amount,
    };

  return async function (dispatch, getState) {
    // this dispatch only activate the loadig state (just for UI)
    dispatch({
      type: "account/convertinCurrency",
    });

    // making simple API call using frankfurter API
    // https://www.frankfurter.app/docs/
    const response = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );

    const data = await response.json();
    // converted value in USD
    const converted = data.rates.USD;

    // finally dispatch action again after dealing operation
    dispatch({
      type: "account/deposit",
      payload: converted,
    });
  };
}

// default export for reducer
export default accountSlice.reducer;
```

#### **The long correct way**:
