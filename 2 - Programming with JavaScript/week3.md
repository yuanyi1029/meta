# Week 3 Notes

## Programming Paradigms
Programming paradigms are different styles in which a code can be written.

There are 2 main programming paradigms:
1. Functional Programming
2. Object Oriented Programming

## Functional Programming
Functional Programming is a coding style that uses expressions and functions without mutating data to organize software design.

<hr>

A **First-class Function** is a function that is treated as a variable.

First-class functions:
```
function add(a, b) {
    return a + b
}
```

A **Higher-order Function** is a function that receives another function as an argument or a function that returns a new function.

Higher-order functions:
```
function add(getA, getB) {
    return (getA() + getB())
}
```

## Scopes
```
var value1 = "value1"        // global scope

function aFunction() {
    var value2 = "value2"    // local scope
}
```
**Note**: value1 can be accessed globally, while value2 can only be accessed within the code block

## var vs let vs const

- var (ES5)
    - same variable names can be redeclared
    - variables declared anywhere in the function can be accessed
- let (ES6)
    - same variable names cannot be redeclared
    - variables declared can only be accessed within it's code block
    - E.g. variables declared in a nested code block within a function cannot be accessed in the function, but only within the nested code block  
- const (ES6)
    - variable values cannot be changed  

## Objected Oriented Programming
Objected Oriented Programming is a coding style that uses objects to organize software design.

<hr>

Object with properties and methods:
```
var obj = {
    property1: "one",
    property2: "two",
    method1: function() {
        // do something
    },
    method2: function() {
        // do something
    }
}
```

Accessing properties within the object itself using "this":
```
var obj = {
    property1: "one",
    property2: "two",
    method1: function() {
        return this.property1 + this.property2
    },
}
```

## Classes
Classes are blueprints to build new objects of a certain kind.

Class declaration:
```
class Car {
    constructor (arg1, arg2) {
        this.arg1 = arg1;
        this.arg2 = arg2;
    }
    method1 () {
        // do something
    }
    method2 () {
        // do something
    }
}
```

Object instantiation and method calling:
```
var car1 = new Car(argValue1, argValue2)

car1.method1()
car1.method2()
```

Object inheritance:
```
class Car {
    constructor (arg1, arg2) {
        this.arg1 = arg1;
        this.arg2 = arg2;
    }
    method1 () {
        // do something
    }
    method2 () {
        // do something
    }
}

class Honda extends Car {
    constructor (arg1, arg2, arg3) {
        super(arg1, arg2);
        this.arg3 = arg3;
    }
    method3 () {
        // do something
    }
}
```

## Array and Object Iteration
Array iteration:
```
var arr = ["one", "two", "three"]

for (var elem of arr) {
    // do something
}
```

Objects are not iterable, use Object methods instead:
```
var obj = {
    property1: "one",
    property2: "two",
    property3: "three"
}

Object.keys(obj);
Object.values(obj);
Object.entries(obj);   // Return array of arrays
``` 

Looping through object keys:
```
var obj = {
    property1: "one",
    property2: "two",
    property3: "three"
}

for (var elem of Object.keys(obj)) {
    // do something
}
```
**Note**: for-of loops are better than for-in loops because for-of loops do not iterate through an object's prototype's properties

## Data Structures
Common data structures in Javascript:
- Objects
- Arrays
- Maps
- Sets

## Spread Operator
The spread operator "..." can be used to spread array items and join objects together.

Spreading array items:
```
var all = ["one", "two", "three", "four", "five];
var [first, second, third, ...rest] = all;
```

Joining arrays:
```
var arr1 = ["one", "two"];
var arr2 = ["three", "four];
var all = [...arr1, ...arr2];
```

Joining objects:
```
var obj1 = { property1 = "one" };
var obj2 = { property2 = "two" };
var all = {...obj1, ...obj2};
```

Converting string to arrays:
```
var myStr = "Hello";
var myArr = [...myStr];
```

## DOM
The Document Object Model (DOM) is a Javascript object that represents the HTML file saved as a tree structure in the browser's memory, where it can be manipulated using Javascript to alter the HTML webpage.

Example DOM manipulation:
```
// Creating a HTML element
var myElement = document.createElement("h1")

// Adding text to the element
myElement.innerText = "one"

// Assigning an id and class to the element
myElement.setAttribute("id", "elem-id")
myElement.setAttribute("class", "elem-class")

// Appending the element to the DOM
document.body.appendChild(myElement)
```

## JavaScript Selectors and Event Handling
Javascript query selectors:
```
document.querySelector('p')                 // returns the first 'p' HTML element
document.querySelectorAll('p')              // returns all HTML 'p' elements
document.getElementById('heading')          // returns the HTML element with 'heading' id
document.getElementsByClassName('heading')  // returns all HTML elements with 'heading' class
```

Javascript event handling:
```
// Handling events by listening for an event, and calling a function
const target = document.querySelector('body')
target.addEventListener('click', () => console.log('clicked on body'))

// Handling events by adding HTML event attributes
<h1 onClick = "console.log('clicked on h1')">Hello World!</h1>
```

## JSON
JSON is just a Javascript object represented as a string.

Parsing a JSON string into a Javscript object:
```
const jsonStr = '{"property1": "one"}'
const jsonObj = JSON.parse(jsonStr)
```

Converting a Javascript object into a JSON string:
```
const jsonObj = {property1: "one"}
const jsonStr = JSON.stringify(jsonObj)
```

**Notes**:
1. Properties of a JSON string must be in quotes, while Javascript Objects are not in quotes  
2. The strings inside the JSON string must be in double quotes "", therefore the outer
json string quotes must be single quotes
3. JSON objects can contain Javascript functions, however JSON strings cannot contain Javascript functions.