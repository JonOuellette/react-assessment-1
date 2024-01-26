### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a front-end framework/library used to build user interfaces, particularly for single-page applications.  It allows for the creation of large apps that can change data without refreshing the page.  React is very light weight compared to other frameworks and provides a lot more flexibility. It helps make client side applications with JavaScript a little bit easier and is more suited for developing Single-Page Applications where users are able to interact with the app dynamically.  Additionally Reacy is a popular framework/library that is used by several companies. 

- What is Babel?
    Babel is a JavaScript library that is mainly used to convert ECMASCript 2015+ code into a backwards compatible version of JavaScript. When used with react Babel can convert JSX syntax which is used to write components.

- What is JSX?
    JSX (JavaScript XML) is a systax extension for JavaScript that is recommended by React, that allows developers to write HTML ("like") code inside JavaScript files.  JSX is transpiled to JavaScript directly in the browswer through the use of Babel.  

- How is a Component created in React?
    Components can be done in 2 ways, by using classes or using functional components with React Hooks.  Using a class to create a component would be done by extending React.Component and requires at least a render() whereas, a function compenent are simpler and can be defined as functions that return JSX. With the updates to React and hooks, functional components can now use state.

- What are some difference between state and props?
    State and Prop are both used to control data in components however, they server different purposes and follow different rules.  Props are passed to components from its parents and are meant to be immutable within the child component.  Props are comparable to function parameters.   THey are used to pass data and event handlers down to the child components.  State is managed within the component and can be changed.  It's used for data that should change overtime, triggering a re-render of the component.

- What does "downward data flow" refer to in React?
    Downward data flows refers to the principle that state is often owned by higher-level components and is passed down the component hierarchy via props- i.e from parent to child

- What is a controlled component?
    A controlled component in React is an input element whose vfalue is controlled by the state of the component.  The value is set by the components state and must be updated through a handler function.  Controlled components are a fundamental concept in React, emphasizing the library's declarative nature and the importance of statemanagement in controlling the behavior and data flow within the app. 

- What is an uncontrolled component?

    Unconrolled component is an input element that maintains its own internal state and updates its values based on user input, without being directly controlled by React component states - such as a file type input where users select files from their device - react does not manage the selected file directly and is uncontrolled. 

- What is the purpose of the `key` prop when rendering a list of components?
    Key props help React identify which items have changed, are added, or are removed.  They should always be unique and not change.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    Using an array index as a key prop in React is often discouraged for dynamic lists because it can lead to inefficient updates, state management issues, and unnecessary re-renders. As list items change, indices change, causing React to mistakenly identify which components need re-rendering. This approach can degrade performance and lead to bugs, especially in components with internal state or animations. A better practice is to use unique, stable identifiers from your data as keys to ensure consistent and efficient component updates. 

- Describe useEffect.  What use cases is it used for in React components?
    useEffect is a hook in React that allows a developer to perform side effects in function components.  It lets developers synchronize a component with an external system such as an API.  This allows the developer to control the how often changes to state rerenders the component.  

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    useRef is hook in React that lets you reference a value that's not needed for rendering.  It returns a mutable object with a key of current, whose value is equal to the initial value passed into the hook. The object persists across renders, therefore acting like a local variable, but one that is independent of state.  

- When would you use a ref? When wouldn't you use one?
    refs provide a way to access Dom nodes or React directly and are used in situations where you need direct access to an element managing foucs, medial playback, triggering animations, or integrating with 3rd party libraries.  We should avoid using refs for managing data flow or triggering rerendre as they bypas the usual React data handling mechanisms.  Nor should they be used to access or modify child component states or properties directly. useRef shoudl be used sparingly and only for direct DOM interactions.    

- What is a custom hook in React? When would you want to write one?
    A custom hook in React is a JavaScript function that starts with use and can use other hooks inside it. It allows you to extract component logic into reusable functions. You would write a custom hook when you want to share logic across multiple components without repeating your code. 