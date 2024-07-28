# Redux DevTools

**DOCS**: https://github.com/zalmoxisus/redux-devtools-extension#usage

To install redux devtools extiontion for browser you need 3 steps:

1. Install the Browser Extension: `redux dev tools`
2. Install the corresponding NPM package: `npm install --save @redux-devtools/extension`
3. This npm package gives you 1 function you can use: `composeWithDevTools`

```jsx
import { applyMiddleware, combineReducers, createStore } from "redux";
import AccountReducer from "./features/accounts/accountSlice";
import CustomerReducer from "./features/customers/customerSlice";
import { thunk } from "redux-thunk";

// REMEMBER to import the function
import { composeWithDevTools } from "@redux-devtools/extension";

// ------ ROOT REDUCER -----
const rootReducer = combineReducers({
  account: AccountReducer,
  customer: CustomerReducer,
});

// composeWithDevTools() should wrap the apply middleware
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
```
