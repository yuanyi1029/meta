# Week 1 Notes

## Rendering Lists
Built-in list functions such as the map() function can be utilised to render lists inside of components easily. 

```
const lst = [1, 2, 3]

function Header() {
    const lstItems = lst.map(item => {
        return <li>{ item }</li>
    })
    return (
        <div>
            <ul>
                { lstItems }
            </ul>
        </div>
    )
}
```

## React Keys
React keys is a property used in HTML list item elements that is unique to help React identify which list items have been added or removed. Assigning key properties to list elements are optional but will improve rendering speed.

Example React key assignment:
```
<ul>
    <li key="apple" id="apple">Apple</li>
    <li key="orange" id="orange">Orange</li>
    <li key="banana" id="orange">Banana</li>
</ul>
```
**Note**: If the list items are created from looping through an index, it is bad practice to assign each item's index as its key, because it may cause errors when the ordering of the list items change in the future when rendering. 

## Controlled Components
Controlled components are a set of components that offer a declarative application programming interface (API) to enable full control of the state of HTML elements at any time. A controlled component can be implemented by using the value property of a HTML element and the onChange callback.

Example uncontrolled component:
```
function App() {
    return (
        <div>
            <form>
                <input type="text" />
            </form>
        <div>
    )
}
```

Example controlled component:
```
function App() {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    function handleChange1(event) {
        setValue1(event.target.value)
    }

    function handleChange2(event) {
        setValue2(event.target.value)
    }
     
    return (
        <div>
            <form>
                <input value={ value1 } onChange={ handleChange } type="text" />
                <select value={ value2 } onChange={ handleChange2 }>
                    <option value="1">Option 1</option>
                    <option value="2">Option 3</option>
                    <option value="3">Option 2</option>
                </select>
            </form>
        <div>
    )
}
```
**Note**: The event parameter is automatically passed by React and contains information about the event, which is why the handleChange function needs to have event as a parameter. 

## ContextAPI
ContextAPI provides an alternative way to pass data through the component tree without having to pass props down manually at every level, which can be useful for global states.

Example ContextAPI implementation:
```
import { createContext, useContext, useState } from 'react';

const UserContext = createContext(undefined);

export function UserProvider({ children }) {
    const [user, setUser] = useState({
        name: "John",
        email: "john@example.com"
    })

    return <UserContext.Provider value={{ user }}>{ children }</UserContext.Provider>;
}

export function useUser() {
    return useContext(UserContext);
}
```
```
import { UserProvider, useUser } from './UserContext';

function Root() {
    return (
        <UserProvider>
            <App />
        </UserProvider>
    )
}

function App() {
    const { user } = useUser();
    return (
        <h1>Hello { user.name }</h1>
    )
}
```
**Note**: Child components nested inside the userProvider component will have access to its value property without having to pass props via accessing a context provider with a useContext hook. 

## React Re-rendering
If a component renders in a React application, React will re-render all its child components regardless of props or context. If a top level component is complex that will re-render many times, all its child components will re-render causing bad performance. To mitigate this issue, the top level API React.memo() can be utilised.

Example React.memo implmentation:
```
function App() {
    return (
        <AppContext.Provider>
            <ComponentA />
        </AppContext.Provider>
    )
}

function ComponentA() { return <ComponentB />};
function ComponentB() { return <ComponentC />};
function ComponentC() { null };

export default React.memo(ComponentA);
```
**Note**: This implementation prevents ComponentA, ComponentB and ComponentC to re-render when the App component re-renders.