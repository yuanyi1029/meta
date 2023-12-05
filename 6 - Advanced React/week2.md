# Week 2 Notes

## useState Hook
The useState hook is used to manage the state within a component. 

Example useState hook usage:
```
import { useState } from 'react';

function Header() {
    const [state, setState] = useState("Hello world");

    function handleChange() {
        setState("Goodbye world)
    }

    return (
        <div>
            <h1>{ state }</h1>
            <button onClick={ handleChange }>Change State<button> 
        </div>
    )
}
```
**Notes**: 
1. The useState hook creates a variable with an initial value representing the initial state, and a function to set that state variable's value.
2. The setState function can only be used indirectly, such as on click events or mouseover events.

## Pure vs Impure Functions
A pure function will return the same output everytime it is invoked while an impure function will perform a side effect everytime it is invoked.

Pure function:
```
function Header(props) {
    return <h1>{ props.name }</h1>
}
```

Impure function :
```
function Header(props) {
    console.log(props.name)
    return <h1>{ props.name }</h1>
}
```
**Note**: console.log() is considered a side effect because it calls a browser API.

## useEffect Hook
The useEffect hook is used to perform side effects in components.

Example useEffect hook usage:
```
import { useEffect } from 'react';

function Header() {
    const total = 5 

    useEffect(function() {
        console.log(total)
    }, [])

    return <h1>Total: {total}</h1
}
```
**Notes**: 
1. The useEffect hook accepts a callback function and an array as parameters. 
2. The array parameter called a dependency array is used to configure when the useEffect hook will execute. By default, if no second argument is provided to the useEffect hook, the effect will run after every render.

## React Hook Rules
There are 4 main rules of React Hooks:
1. Only call hooks inside a React component function, not regular Javascript functions. 
2. Only call hooks at the top level of a React component function, before the return statement, outside of loops and conditionals.
3. Multiple state or effect hooks are allowed in a single React component function.
4. Always make multiple hook calls in the same order in each React component function.

## The Fetch Function
The Javascript fetch function is used to make a server request to retrieve some JSON data from it. Since fetching data from a third-party API is considered a side effect, it is best to use the useEffect hook to deal with API calls in a React application.

Example fetch function usage:
```
fetch('https://example.com/api/?user_id=1')
    .then(response => response.json)
    .then(data => console.log(data))
```
Example fetch function usage in React components:
```
import { useEffect } from 'react';

function Header() {
    const [state, setState] = useState({})
    useEffect(() => {
        fetch('https://example.com/api/?user_id=1')
            .then(response => response.json)
            .then(data => setState(data))
    }, [])

    return <h1>{ state.name }</h1>
}
```

## useReducer Hook
The useReducer hook is similar to the useState hook, but it has a dispatch function that calls a reducer function to determines how to compute the next state instead of directly updating state with setState.  

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
1. The useReducer hook takes in 2 arguments, a reducer function and an initial state value while return an array of the initial state and a dispatch function.
2. A reducer function takes in 2 argument, a current state and an action.


## useRef
The useRef hook is used to persist values between renders, but a more common usage is to grab native HTML elements from JSX.

Example useRef hook usage:
```
import { useRef } from 'react';

function Header() {
    const myInput = useRef(null);
    
    function focusInput() {
        myInput.current.focus()
    } 

    return (
        <input ref={ myInput } type="text">
        <button onClick={ focusInput }>Focus input</button>
    )
}
```
**Note**: The initial myInput variable is null, but it later refers to the HTML input where native functions such as focus() can be called, resulting in the input field being in focus when the button is clicked. 

## Custom Hook
React custom hooks are hooks that are self-made rather than relying on regular built-in hooks to allow for unique functionality.

Example custom hook implementation:
```
import { useEffect } from 'react';

function useConsoleLog(variable) {
    useEffect(() => {
        console.log(variable)
    }, [variable])
}
```
```
import { useState } from 'react';
import useConsoleLog from './filename.js';

function Header() {
    const [count, setCount] = useState(0);
    useConsoleLog(count); 

    function increaseCount() {
        setCount(previous => previous + 1)
    }

    return (
        <div> 
            <h1>Count: { count }</h1>
            <button onClick={ increaseCount }>Increase Count</button>
        </div>
    )
}

```
**Note**: This custom hook console logs a variable's value whenever it gets updated by utilising the useEffect hook within it's implementation.