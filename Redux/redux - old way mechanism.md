# The Old Way of using Redux:

```cmd
npm i redux
```

```js
// ... inside store.js ...

// importing the old method to create redux store
import { combineReducers, createStore } from "redux";

// creating inital state
const initalStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

// define reducer function like in 'useReducer' hook
// REMEMBER:
// - reducers are not allowed to modify the existing state
// - reducers are not allowed to do any asynchronous logic
// usually in Redux the initial state is passed as default parameter inside the reducer
function AccountReducer(state = initalStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };

    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };

    default:
      // in useReduce in default you usually throw a new Error
      // but in Redux in default you usually should return original state
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };

    default:
      return state;
  }
}

// creating a single store
// const store = createStore(AccountReducer);

// on store you can manually dispatch actions like:
// store.dispatch() and it will work exactly the same as useReducer hook

/* ---- TESTING -----

store.dispatch({
  type: "account/deposit",
  payload: 550,
});
console.log(store.getState()); // { balance: 550, loan: 0, loanPurpose: "" }

store.dispatch({
  type: "account/requestLoan",
  payload: {
    amount: 1000,
    purpose: "buy new computer",
  },
});
console.log(store.getState()); // { balance: 1550, loan: 1000, loanPurpose: "buy new computer" }
*/

// ------ ROOT REDUCER -----

// since you have 2 reducers you need to do is to combine all the
// reducers that you have in order to create one root reducer
// combineReducers accepts object where key is a meaningful name
const rootReducer = combineReducers({
  account: AccountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

// ------ ACTION CREATORS -----
// they're just helper functions, that return actions, it's a convenition, not redux thing

// Action Function for Account
function deposit(amount) {
  return {
    type: "account/deposit",
    payload: amount,
  };
}

function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}

function requestLoan(amount, purposeStr) {
  return {
    type: "account/requestLoan",
    payload: {
      amount: amount,
      purpose: purposeStr,
    },
  };
}

function payLoan() {
  return {
    type: "account/payLoan",
  };
}

/* ---- TESTING ----- 
// example if there is only one reducer in store
store.dispatch(deposit(300));
console.log(store.getState()); // { balance: 1850, loan: 1000, loanPurpose: "buy new computer" }
*/

// Action Function for Customer
function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName: fullName,
      nationalID: nationalID,
      createdAt: new Date().toISOString(),
    },
  };
}

function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}

store.dispatch(deposit(300));
store.dispatch(createCustomer("Alexander", 123456789));

console.log(store.getState());
/*  OUTPUT:
{ 
    account: { 
        balance: 300, 
        loan: 0, 
        loanPurpose: "" 
        },

   customer: {
        fullName: "Alexander", 
        nationalID: 123456789, 
        createdAt: "2024-07-27T14:46:41.364Z" 
        }
    }

*/
```

---

### Sepate code in different files

Indeed you should split the code in different files following the concept of state slices, so you should separe code into features. For this example the features can be _account_ and _customer_.
So you can create `features` directory with 2 child directories: `accounts` and `customers`.
Then in these directories you can place component and the state. State can be placed in a filed called `accountSlice.js` and should contain as much Redux logic as it can contain.

After these modification the `store.js` file can looks like this:

```js
import { combineReducers, createStore } from "redux";
import AccountReducer from "./features/accounts/accountSlice";
import CustomerReducer from "./features/customers/customerSlice";

// ------ ROOT REDUCER -----

// since you have 2 reducers you need to do is to combine all the
// reducers that you have in order to create one root reducer
// combineReducers accepts object where key is a meaningful name
const rootReducer = combineReducers({
  account: AccountReducer,
  customer: CustomerReducer,
});

const store = createStore(rootReducer);
export default store;
```

---

### Connect react to redux

To implement a context provider of the state you need also:

```cmd
npm i react-redux
```

**Main file**:

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// you need to import Provider from react-redux
import { Provider } from "react-redux";

import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Then you need to wrap entire App inside the Provider like in Context API */}
    {/* Then you need to provide the Redux store inside the 'store' prop */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

---

### Read state from a component

**inside a component**:

```js
// 'useSelector' hook is used to read data from Redux Store
import { useSelector } from "react-redux";

function Customer() {
  // useSelector accepts a callback
  // inside the callback there is argument which is the entire Redux Store
  // so you can import whatever you need (use keys provided into rootReducer)
  const customer = useSelector((reduxStore) => reduxStore.customer);
  return <h2>👋 Welcome, {customer.fullName}</h2>;
}

export default Customer;
```
