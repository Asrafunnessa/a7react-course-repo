# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh2

#### Question 1 :Add at least 3 Project features.

#### Answer :
There are 3 features. I already implement in my Project.Now i discuss about those features:

#### Component-Based Architecture:
React's core concept is its component-based architecture. I create reusable UI components that encapsulate specific functionality and rendering logic. This approach makes it easier to manage and maintain complex user interfaces.

#### State Management:
React provides a built-in state management system. I use the `useState` hook (or class-based component state) to manage and update component-specific data. Additionally, i use global state management libraries like React Context for managing application-wide state.

#### Hooks:
React components have Hooks (for functional components) that allow you to perform actions at specific points in a component's lifecycle. I use useEffect (for functional components) to fetch data when a component mounts.

#### Question 2 : Discuss how you managed the state in your assignment project.

#### Answer :
In a React.js project, state management is a crucial aspect of building dynamic and interactive user interfaces. State refers to any data that should be saved and updated over time in a React component.  I use the useState hook in functional components.useState allows us to define and update state variables within a component.