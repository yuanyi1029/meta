# Week 3 Notes

## Components and Elements
When React analyzes the rendering method of all components, it takes the entire JSX tree starting from the root component and creates another tree represented as a Javascript Object called an element. During a change in the user interface, React compares the new user interface tree with the old user interface tree and make changes accordingly. This process is fast because Javascript is quick in comparing objects (React elements). 

Example React component:
```
return (
    <button className="button">
        <span>
            { buttonTitle }
        </span>
    </button>
)
```
Example React element:
```
{
    type: "button"
    props: {
        className: "button"
        children: {
            type: "span",
            children: ...
        }
    }
}
```

## Component Composition
Component composition is a technique in React where several components are used together to form a more complex component. 

Features that enable component composition in React:
- Containment 
    - Containment refers to the fact the some complex components do not know their child components ahead of time (E.g. Navigation bar, Side bar, Pop-up dialog box)
- Specialization
    - Specialization refers to the fact the some complex components are special cases to existing components (E.g. Delete button is a specialization to a regular button)


Example component composition implementation:
```
function Button({ children, backgroundColour }) {
    return <button style={{ backgroundColour }}>{ children }</button>
}

function Alert({ children }) {
    return <div className="Alert">{ children }</button>
}

function DeleteButton() {
    return <Button backgroundColour="red">Delete</Button>
}

function App() {
    return (
        <div className="App">
            <Alert>
                <h1>Delete Account</h1>
                <DeleteButton />
            </Alert>
        </div>
    )
}
```
**Note**: The implementation above showcases the implementation of a complex Alert box implementation that contains smaller components by utilising the children prop. 

## Dynamic Child Manipulation
By utilising the React.cloneElement and React.children APIs, child components can be dynamically manipulated within the parent component. The React.cloneElement API clones and returns a new copy of an element while the React.children API provides utilities for dealing with the props.children data structure.

Example dynamic children manipulation implementation:
```
function Row({ children, spacing }){
    const childStyle = {
        marginLeft: `${ spacing }px`,
    }

    return (
        <div className="row>
            { React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                    stlyle: {
                        ...child.props.style,
                        ...{index > 0 ? childStyle : {}}
                    }
                })
            }) }
        </div>
    )
}

function Order() {
    <div>
        <Row spacing="32">
            <p>First</p>
            <p>Second</p>
            <p>Third</p>
        </Row>
    </div>
}
```
**Note**: The above implementation maps through each child component and clones it, while altering the style property to inherit its previous style while also applying childStyle to it. 

## Higher-order Components
A higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component.

Example higher-order component:
```
function initialComponent() {
    return <h1>Hello world</h1>
}

function higherOrderComponent(WrappedComponent) {
    const newProp = { amount: 5 }
    return <WrappedComponent newProp={ newProp } {...originalProps}/>;
}

const ImprovedComponent = higherOrderComponent(InitialComponent)

function App() {
    return (
        <div>
            <ImprovedComponent />
        </div>
    )
}
```
**Note**: Since ImprovedComponent is created from the higherOrderComponent function, it now has the extra "amount" prop.

## Render Props
Render props is a technique for sharing code between React components using a render prop where it's value is a render function

Example render props implementation:
```
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleMousePositionChange = (e) => {
            setMousePosition({x: e.clientX, y: e.clientY});
        };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {window.removeEventListener("mousemove", handleMousePositionChange)}}, []);

    return render({ mousePosition });
};

function MouseLogger1() {
    return (
        <div>
            <MousePosition render={({ mousePosition }) => (
                <div>x: {mousePosition.x}</div>
                <div>y: {mousePosition.y}</div>
            )}/>
        </div>
    )
}

function MouseLogger2() {
  return (
    <MousePosition render={({ mousePosition }) => (<p>({ mousePosition.x }, { mousePosition.y })</p>)}/>
  )
}
```
**Note**: Only the MousePosition component performs the logic of calculating mouse movement, whereas MouseLogger1 and MouseLogger2 only renders the MousePosition component while providing a unique render function so that it is visually different. 

## React Testing Library and JEST
The React testing library is a set of utilities used to test React components while JEST is a Javascript test runner framework used to execute tests.

Example React component test implementation:
```
export function App() {
    return (
        <div>
            <a href="https://example.com">Click me</a>
        </div>
    )
}

export function FeedbackForm() {
    return (
        <div>
            <form>
                <!-- Form Implementation -->
            </form>
        </div>
    )
}
```
```
import { render, screen } from '@testing-library/react';
import { App, FeedbackForm } from './filename';

test("renders a link that points to example.com", () => {
    render(<App />)
    const linkElement = screen.getByText("Click me")
    expect(linkElement).toBeInTheDocument()
})

describe("Feedback Form Test", () => {
    test("Submission is disabled if score is lower than 5 and there is no feedback", () => {
        const handleSubmit = jest.fn();
        render(<FeedbackForm onSubmit={ handleSubmit } />)

        const rangeInput = screen.getByLabelText(/Score:/)
        fireEvent.change(rangeInput, { target: { value: "4" } })

        const submitButton = screen.getByRole("button")
        fireEvent.click(submitButton)

        expect(handleSubmit).not.toHaveBeenCalled()
        expect(submitButton).toHaveAtribute("disabled")
    })
})
```
