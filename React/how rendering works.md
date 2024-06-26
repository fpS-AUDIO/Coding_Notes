# How React Rendering Works behind the scenes

Phases to display component on the screen:

1.  **render is triggered** for example when updating the state.
2.  **render phase** is when react calls instances functions and think how to update DOM. So rendering in react is not updating DOM, but it's an internal process which don't produce any visual effect.
3.  **commit phase** is when the new elements are actually placed in DOM and the older elements can be updated/removed to reflect the state of an application.
4.  **browser pains** the screen

---

### Render is triggered

The render process is triggered for entire application, and not only for 1 component (indeed without updating the DOM). Renders are not trigged immediatly but they're scheduled for when JS engine has some "free time" (talking about ms). There is aso **batching** of multiple setState calls in event handlers. The render can be triggered only:

- during the initial rendering of application
- when state is updated which produces _re-rendering_

---

### Render phase

In the bigining of render phase react go through the entire component tree, take all the instances that triggered a re-render and call these component functions. These function calls produce react elements which all together create _virtual DOM_.

**Virtual DOM** is just a tree of all React elements created by instances of the component tree. It's just a JS object, so it's fast to create. The official react docs call it _React element tree_.

When react renders a component, also all its _child components_ are rendered too. So entire virtual DOM is recreated.

Then the virtual DOM is **reconcilied** with **Fiber tree** using the _reconcilier_ which at the moment is **Fiber**. The result of this process will be the **updated Fiber Tree** which will be used to update the DOM.

Completly rewrite entire DOM (with Virtual DOM) is really inefficient, so React tries to reuse as much of existing DOM as possible thanks to **reconciliation** that is deciding which DOM elements actually need to be inserted, deleted or updated in order to reflect the latest state changes. This process is made by _reconcilier_.

**Reconcilier** is like engine of React which does the reconciliation and abstract all DOM manimulations from developers. The current reconcilier in React is called **Fiber**. Fiber builds is own tree basing on the virtual DOM tree. The work of reconcilier is done **asynchronously**.

The **fiber tree** has 1 _fiber_ for each component instance and DOM element. Fibers are not not recreated on every render, but they are mutable data structure, so they're perfect place to keep the current component state, props, side effects, list of used hooks and more. Each fiber contains also _queue of work_ to do like updating state, updating refs, running registered side effects, performing DOM updates and so on.

The fiber tree doesn't have classic _parent-child relationship_ but their structure is called a **linked list**. In linked list each first child has a link to its parent and all the other children then have a link to their previous sibling.

Since the work of reconcilier is asynch, it enables **concurrent features** like _suspense_ or transitions (from React 18). It also helps don't block JS engine during long renders in large applications.

**Diffing** is the process of comparing elements step-by-step based on their position in the current Fiber tree (based on the new virtual DOM). When this process is finished, all the necessary DOM mutations are placed into the **list of effects**. The list of effects will be used to actually mutate the DOM (commit phase below).

Diffing is base on 2 rules:

1.  2 elements different types will produce different trees (same position, different elements)
2.  elements with a stable key prop stay the same across renders (same position, same element)

The **key prop** is a special prop telling the diffing algorithm that an element is unique. The key allows React to distinguish the instances of the same component.

- When the key _doesn't change_ across multiple renders the element ("owner of key") will be kept in the DOM (even if position of element changes).
- When the key _changes_ between renders, the element will be destroyed and the new one is created (even if position is the same)

---

### Commit phase

During this phase the React writes (_flushes_) to the DOM all necessary updates. The commiting is **synchronous**, so DOM is updated in one go and it can't be interrupted. This ensures the consistency in UI without showing partial results. After commit the _workInProgress_ fiber tree becomes the _current_ tree for the **next render cycle**.

While the render phase is done by React library and the painting to the screen the image by browser itslef, the commit phase is done by the library called **ReactDOM**.

---

# Render Logic

There are 2 types of logics in React:

1. **Render logic**: is top level code on a component whch describes how a component should lokk like and it's executed each time the component renders.
2. **Event handler functions**: is executed as a consequence of an event listened by a handler and this code does things like updating state, fetching data, navigate through the pages etc.

Important functional programming principals in React:

- **side effect**: dependency on or a modification of any data outside the function scope.
- **pure functions**: function which has no side effect which doesn't mutate variable outside the scope and returns always same output as input. In React the **components must be pure** when it comes to the render logic.
- in **event handlers** functions the side effects are allowed. There is also a special hook to register side effect: **useEffect**.
