# Week 2 Notes

## Events 
An event is a process where Javascript interacts with HTML that could be triggered as a result of a user action or system generated event.

Types of Event Groups
- Clipboard Events 
- Composition Events 
- Keyboard Events 
- Mouse Events 
- Touch Events 
- Wheel Events 
- Animation Events 

Example React event handling:
```
function Buttons() {
    const clickHandler = () => console.log("Clicked")
    const mouseHandler = () => console.log("Mouse Over")
     
    return (
        <button onClick={ clickHandler }>Click Me</button>
        <button onMouseOver={ mouseHandler }>Hover Me</button>
    )
}
```
**Note**: HTML code uses lower-casing - "onclick", "onmouseover" while JSX uses camel-casing - "onClick", "onMouseOver".

Difference between HTML and React in event handling:
```
// HTML
<button onclick="handleClick()">Click Me</button>

// React
<button onClick={ handleClick }>Click Me</button>
```

## Parent Child Data Flow
In React, data flows from a parent component to its child components such that the data in the parent component can be accessed by its child components, but not the other way around.

Example child components accessing data from it's parent component:
```
function Dog() {
    return (
        <div>
            <Puppy name="Max" bowlShape="square" bowlStatus="full" />
        </div>
    )
}

function Puppy(props) {
    return (
        <div>
            {props.name} has <Bowl bowlShape="square" bowlStatus="full" />
        </div>
    )
}

function Bowl(props) {
    return (
        <span>
            { props.bowlShape }-shaped bowl, and it's currently {props.bowlStatus}
        </span>
    )
}
```

## React Hook 
A React hook is a function that allows us to hook into React states and lifecycle features from components. Common React hooks are useState, useRef, useContext, and useReducer.

<hr>

### useState
A useState hook is used to manage the state within a component. 

Example useState hook usage:
```
import { useState } from 'react';

function Header() {
    const [state, setState] = useState("Hello world");

    function handleChange(newValue) {
        setState(newValue)
    }

    return (
        <div>
        </div>
    )
}
```
**Notes**: 
1. The useState hook creates a variable with an initial value representing the initial state, and a function to set that state variable's value.
2. The setState function can only be used indirectly, such as on click events or mouseover events.

### useRef
A useRef hook is used to persist values between renders, but a more common usage is to grab native HTML elements from JSX.

Example useRef hook usage:
```
import { useRef } from 'react';

function Header() {
    const myButton = useRef(null);
    
    function clickFunction() {
        myButton.current.click()
    } 

    return (
        <button ref={ myButton }>Click me</button>
    )
}
```
**Note**: The initial myButton variable is null, but it later refers to the HTML button where native functions such as click() can be called.

### useContext
A useContext hook is used to work with React's ContextAPI designed to prevent prop drilling (passing props down multiple component levels).

Example useContext hook usage:
```
const foods = {
    fruit: apple,
    dish: curry,
    drink: pepsi,
}

const FoodContext = createContext(foods);

function App(props) {
    return (
        <FoodContext.Provider value={ foods.fruit }>
            <Header />
        </FoodContext.Provider>
    )
}

function Header() {
    const food = useContext(FoodContext);
    
    return <p>{ food }</>
}
```
**Note**: Child components nested inside FoodContext.Provider will have access to its values without having to pass props via accessing a context provider with a useContext hook. 

### useReducer
A useReducer hook is similar to the useState hook, but it has a dispatch function that calls a reducer function to determines how to compute the next state instead of directly updating state with setState.  

Example useReducer hook usage:
```
import { useReducer } from 'react';

function Header() {
    const [state, dispatch] = useReducer(reducer, 0);

    function reducer(state, action) {
        switch (action.type) {
            case "increase":
                return state + 1;
            case "decrease:
                return state - 1;
            default:
                throw new Error();
        }
    }

    return (
        <div>
            <button onClick={ () => dispatch({ type: 'increase' }) }>Increase</button>
            <button onClick={ () => dispatch({ type: 'decrease' }) }>Decrease</button>
        </div>
    )
}
```
**Notes**:
1. The useReducer hook takes in 2 arguments, a reducer function as well as an initial state value.
2. A reducer function takes in 2 argument, a current state and an action.

## React State
A React state is internal data of a component that determines the current behaviour of a component. Components can either be stateless of stateful, where a state of a stateful component can be accessed with hooks. States are useful to manage data that will likely change in an application.

Stateless component:
```
function Header() {
    return (<h1>Hello world</h1>)
}
```

Stateful component:
```
function Header() {
    const [state, setState] = useState("Hello world");

    return (<h1>{ state }</h1>)
}
```

## Prop Drilling & ContextAPI
Prop drilling in React is a situation where a piece of data is passed from a parent to a child component, then to a grandchild component, and so on until it reaches a more distant component further down the component tree. Using ContextAPI can help bypass redundant prop drilling directly into a component.

