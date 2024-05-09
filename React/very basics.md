# Very Basics of React

### From past to Nowadays

In the past (until 2010) the website were rendered on the server side, like the WordPress technology, so the website were called webpages.

Nowadays, the websites are rendered on the client side and single page applications become very popular, also called web applications.
Web applications usually takes data from backend in form of API.

Building a complex fronted with vanilla JS:

- requires large amounts of direct DOM traversing and manipulation
- state is usually stored in DOM, so it's easy to introduce new bugs

### Why don't use just Vanilla JavaScript?

- keeping UI in sync with state (data) is really hard and needs a lot of work
  (front-end frameworks solves this problem)
- Frameworks enforce a good and well organized way of structuring and writing code
- Frameworks gives to developers and teams a consistent way of building apps

### What is React?

**React** is a popular declarative library, component based and state-driven JavaScript library for building user interfaces, and it was created by Facebook:

- **Component based**: components are building blocks (buttons, search fields, cards etc..) of user interfaces in React. Then the app is build like lego based on these reusable components.
- **Declaritve**: to describe the components (style and functionality) we use declarative syntax called **JSX**. Declarative because it's updated to the state (data) and, indeed, it's also a form of abstraction because we never touch the DOM.
- **State-driven**: React reacts to state changes and rerenders the UI.
- **JS Library**: it's not a framework because it's only a "view" layer, so you need to use different external libraries to build the application, and use React only to show the result.
- **Popular**: react is most used framework because a lot of big companies adopted react a lot of time ago, and now small companies are following them.
- **Created by Facebook**: react was created in 2011 by Jordan Walke and became open-sourced in 2013.

### Tools

You can use the pure react for fun by connecting react scripts to html via CDN, but to setup a real world React App you need to use a tool like:

- **create-react-app**: is good starter kit since everything is already configured (ESLint, Prettier, Jest etc), but it uses slow and outdated technologies, so it's good for studying.
- **vite**: it's good for real life since it's a reallt fast modern tool that contains a template for setting up React applications. But you have to configure everything manually, especially ESlint.
- use react framework like Next.js or Remix (frameworks built on top of the React library).


