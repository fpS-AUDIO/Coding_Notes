# Thunks Middleware

### What is a middleware?

In Redux, the **middleware** is a function that sits between the dispatching and the store. The middleware allows developers to run some code after dispatching an action, but before that action reaches the reducer in the store.

Since the store doesn't alloe async operations, the reducers have to be pure funcions and making, for example, API calls inside the a components is not ideal, the middleware is a perfect place to side-effects and making async operations, like data fetching, setting timers or even pausing and canceling the action all together.

For async operations the most popular Middleware in Redux is called **Redux Thunk**. To use the Redux Thunk you to follow 3 steps:

1. install the middleware package
2. apply that middleware to the store
3. use the middleware in the action creator functions.

---

### Install Thunk

```cmd
npm i redux-thunk
```

---

### Aplly Thunk to the Store

```jsx
// .... inside 'store.js' ....

import { applyMiddleware, combineReducers, createStore } from "redux";
import AccountReducer from "./features/accounts/accountSlice";
import CustomerReducer from "./features/customers/customerSlice";
import { thunk } from "redux-thunk";

// ------ ROOT REDUCER -----
const rootReducer = combineReducers({
  account: AccountReducer,
  customer: CustomerReducer,
});

// to connect thunk to store you need, insdie the 'createStore' function,
// specify the second argument: 'applyMiddleware' function (remember to import it)
// 'applyMiddleware' accepts the middleware itself, in this case is 'thunk' (remember to import it
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
```

---

### Use Thunk inside the Action Creator Functions

```jsx
// .... inside 'accountSlice.js' ....

// Action Creator Function for Account deposit
export function deposit(amount, currency) {
  // possible currencies for this example: USD, EUR, GBP

  // if currency is USD, we don't need to convert anything, so we're not using middleware
  if (currency === "USD")
    return {
      type: "account/deposit",
      payload: amount,
    };

  // return a function to
  // when Redux sees that you return a function its know this is the thunk
  // so before dispatch action to the store it executes this function
  // this function has access to 'dispatch' function and the 'getState' (currentState)
  // since we're doing a fetch request it's an async function
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
```
