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
