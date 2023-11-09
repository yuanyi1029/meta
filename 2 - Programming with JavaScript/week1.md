# Week 1 Notes

## JavaScript 
Javascript is a programming language used to build interactivity into web pages, however it can be also 
used for backend and mobile application development.

Javascript can be used to:
1. Power websites on a server
2. Communicate with databases
3. Build mobile applications
4. Program IoT devices

## Variables
Variable declaration methods:
- var (accessible within entire function)
- let (accessible only in its defined code block, stricter than var)
- const (immutable)

## Data Types
Javascript data types:
- String (Sequence of characters)
- Number (Numerical values)
- Boolean (True / False)
- Null (Absent value)
- Undefined (Unassigned value)
- BigInt (Large numerical values)
- Symbol (Unique values)

## Operators
Assignment Operators: =, +=, -= 

Arithmetic Operators: +, -, *, /, %

Comparison Operators: >, <, ==, !=, ===, !==

Logical Operators: &&, ||, !

## Conditional Statements
If statement:
```
if (condition) {
    // do something
}
```
If-else statement:
```
if (condition) {
    // do something
} 
else {
    // do something 
}
```
Switch statement: 
```
switch (variable) {
    case condition1:
        // do something
        break;
    case condition2:
        // do something
        break;
    default:
        // do something
        break;
}
```

## Loops 
For loop:
```
for (var i = 1; i < 101; i++) {
    // do something 100 times
}
```

While Loop:
```
var i = 1; 
while (i < 101) {
    // do something 100 times
    i += 1 
}
```