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
A React hook is a function that allows us to hook into React states and lifecycle features from components. A common React hook is the useState hook, where it is used to manage the state within a component.

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
**Note**: The useState hook creates a variable with an initial value representing the initial state, and a function to set that state variable's value.

## React State