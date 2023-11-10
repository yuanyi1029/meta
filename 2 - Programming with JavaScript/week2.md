# Week 2 Notes

## Functions
Function declaration:
```
aFunction (arg1, arg2) {
    // do something
}
```
Function call:
```
aFunction(value1, value2);
```

## Arrays
Array operations:
```
var arr = ["one", "two", "three"]

arr[0]
arr[1]
arr[2]
arr.length
arr.push()
arr.pop()
```

## Objects
Object construction with dot notation: 
```
var obj = {}

obj.property1 = "one";
obj.property2 = "two";
obj.property3 = "three";
``` 

Object construction with block notation: 
```
var obj = {}

obj[property1] = "one";
obj[property2] = "two";
obj[property3] = "three";
``` 

Object construction with key-value pairs: 
```
var obj = {
    property1: "one",
    property2: "two",
    property3: "three"
}
``` 

Objects construction that contain methods:
```
var obj = {
    property1: "one",
    method1: function() {
        // do something
    },
    method2: function() {
        // do something
    }
}
``` 

## Math Object
Javascript has a built in Math object that have accessible properties and methods.

Number Constants:
```
Math.PI
Math.E
Math.LN2
```

Rounding Methods:
```
Math.ceil()     // rounds up to closest integer
Math.floor()    // rounds down to closest integer
Math.round()    // rounds up to closest integer for decimals .5 or above, otherwise rounds down to closest integer
Math.trunc()    // removes decimal values completely
```

Arithmetic and Calculus Methods:
```
Math.power()
Math.sqrt()
Math.cbrt()
Math.abs()
Math.log()
Math.max()
Math.min()
Math.sin()
Math.cos()
Math.tan()
```

Random Methods:
```
Math.random()   // between 0 - 0.99
```

## Strings
Strings behave like arrays, but they are not arrays because not all array methods work on strings, they are iterables instead.

String operations:
```
var myStr = "Hello";

myStr.length;
myStr.charAt();
myStr.concat();
myStr.indexOf();
myStr.split();
myStr.toUpperCase();
myStr.toLowerCase();
```

## Bugs vs Errors
Bug - A bug causes a program to run in an unintended way 

Error - An error causes a program to stop running. 3 main errors in Javascript are Reference Error, Syntax Error and Type Error

## Error Handling
Try-catch statement:
```
try {
    // do something
}
catch (error) {
    // do something
}
```
Throw statement:
```
throw new ReferenceError();
throw new SyntaxError();
throw new TypeError();
```
