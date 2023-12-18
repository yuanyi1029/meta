# Week 1 Notes

## JavaScript Modules
Javascript modules are just a file with the purpose of having more modular code and smaller files.

<hr>

### Exporting Modules

Types of module exports:
- Default Exports
- Named Exports

Example default export:
```
export default function myFunction() {
    // do something
} 
```
```
function myFunction() {
    // do something
}

export default myFunction;
```
**Note**: There can only be one default export per Javascript file.

Example named export:
```
export function myFunction1() {
    // do something
}

export function myFunction2() {
    // do something
}
```
```
function myFunction1() {
    // do something
}
function myFunction2() {
    // do something
}

export { myFunction1, myFunction2 };
```
**Note**: There can be many named exports per Javascript file.

<hr> 

### Importing Modules
Types of module exports:
- Default Imports
- Named Imports

Example default import:
```
import myFunction from "./function";
```
Example named import:
import { myFunction1 } from "./function";

## React
React is a Javascript library used for building single page applications or mobile applications (React Native). React uses a component-based architecture where small pieces of user interface blocks called components are used to build a web application.

React application setup with create-react-app module:
```
npm init react-app myApp
cd myApp
npm start
```

React application folder structure:
```
node_modules/
public/
src/
.gitignore
package-lock.json
package.json
README.md
```

## React Virtual DOM
React keeps tracks of its own virtual DOM in the memory, which is a representation of the browser DOM. React then uses the virtual DOM to update the browser DOM when necessary

Reconciliation Process:
1. Update the virtual DOM
2. Check the differences between the virtual DOM and the browser DOM
3. Update the browser DOM
4. The displayed webpage updates to match the browser DOM

## React Functional Components
React functional components is a javascript function that returns a React element. All React applications initially contains a root component, where it contains all other child components for an application. React function components are created using the JSX syntax, which is an extension to Javascript that allows writing HTML elements inside of Javascript. A Javascript transpiler called Babel is then used to convert JSX code into plain Javascript code that is understandble by browsers.

Example React functional component creation:
```
function Heading() {
    let title = "Hello World"
    return (
        <h1>{ title }</h1>
    )
}

export default Heading
```

## React Props 
React props is an object that allows components to pass data between each other, enabling more dynamic components. 

Example React props usage:
```
root.render(<App title="Hello World"/>)
```
```
function App(props) {
    return (
        <h1>{ props.title }</h1>
    )
}
```

## JSX
JSX is a type of syntax extension to Javascript that allows writing HTML elements inside of Javascript.

Using Javascript expressions within HTML code with JSX:
```
function Header() {
    return (
        <h1>{ 1 + 1 }</h1>
        <h1>{ "Hello" + "World" }</h1>
        <h1>{ getName() }</h1>
        <h1>{ (10 + 10 === 20) ? "yes" : "no" }</h1>
    )
}
```

Embedding images with JSX:
```
import logo from "./logo.png"

function Header() {
    return (
        <img src={ logo } />
    )
}
```

Passing components as props with JSX:
```
root.render(
    <App children={ <Header message="Hello world"/> }/>
);
```

## React Internal Styling
Instead of using an external CSS file to style components, an internal styling method can be used to style components by carrying over CSS definitions into the component file.

Example external styling to internal styling:
```
container {
    background-color: red;
    width: calc(30% - 10px);
    margin-left: 10px;
}
```
```
function Header() {
    const container {
        backgroundColor: "red",
        width: "calc(30% - 10px)",
        marginLeft: "10px",
    }

    return (
        <div style={ container }>
            <h1>Hello World</h1>
        </div>
    )
}
```
**Notes**: 
1. Hyphens in the properties of the CSS file are replaced with camelCase in the component file.
2. Semi-colons in each style declaration of the CSS file are replaced with commas in the component file.
2. Parenthesis are added to each value in the component file.

