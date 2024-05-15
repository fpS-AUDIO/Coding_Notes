# Very Basics of React

### From Past to Nowadays

In the past (until 2010), websites were rendered on the server side, like with WordPress technology, so the websites were called webpages.

Nowadays, websites are rendered on the client side and single page applications (SPAs) have become very popular, also called web applications. Web applications usually fetch data from the backend in the form of APIs.

Building a complex frontend with vanilla JS:

- Requires large amounts of direct DOM traversing and manipulation.
- State is usually stored in the DOM, so it's easy to introduce new bugs.

### Why Not Use Just Vanilla JavaScript?

- Keeping UI in sync with state (data) is really hard and requires a lot of work.
  (Front-end frameworks solve this problem)
- Frameworks enforce a good and well-organized way of structuring and writing code.
- Frameworks provide developers and teams with a consistent way of building apps.

### What is React?

**React** is a popular declarative, component-based, and state-driven JavaScript library for building user interfaces. It was created by Facebook:

- **Component-based**: Components are building blocks (buttons, search fields, cards, etc.) of user interfaces in React. The app is built like Lego, based on these reusable components.
- **Declarative**: To describe the components (style and functionality) we use declarative syntax called **JSX**. Declarative because it's updated to the state (data) and, indeed, it's also a form of abstraction because we never touch the DOM.
- **State-driven**: React reacts to state changes and re-renders the UI.
- **JS Library**: It's not a framework because it's only a "view" layer, so you need to use different external libraries to build the application and use React only to show the result.
- **Popular**: React is the most used framework because a lot of big companies adopted React a long time ago, and now small companies are following them.
- **Created by Facebook**: React was created in 2011 by Jordan Walke and became open-sourced in 2013.

### Tools

You can use pure React for fun by connecting React scripts to HTML via CDN, but to set up a real-world React App you need to use a tool like:

- **create-react-app**: A good starter kit since everything is already configured (ESLint, Prettier, Jest, etc.), but it uses slow and outdated technologies, so it's good for studying.
- **Vite**: It's good for real life since it's a really fast modern tool that contains a template for setting up React applications. However, you have to configure everything manually, especially ESLint.
- Use a React framework like Next.js or Remix (frameworks built on top of the React library).

### Summary

React is a powerful tool for building modern web applications. Understanding its basics, such as the declarative approach, component-based architecture, and state-driven updates, is crucial for any developer. Using modern tools like Vite or frameworks like Next.js can significantly enhance your development experience and application performance.
