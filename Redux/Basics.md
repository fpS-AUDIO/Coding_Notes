# Redux Basics

**Redux** is a third party library used to **manage global state** in a web application. So it can be used with any framework a even with vanilla JS, but it's really easy to integrate it into React using `react-redux` library. All global state is store in one **globally accessible store** which is easy to update using **acctions** (very similar to `ContextAPI` + `useReducer` hook mechanisms). Today there are 2 main ways of writing Redux: **classic Redux** and **Modern Redux Toolkit** fully compatible with each other.

First you need to get to the project directory and install it:

```cmd
npm i redux
```

To connect react to redux (implement a context provider of the state) you need also:

```cmd
npm i react-redux
```
