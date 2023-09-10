# Week 2 Notes

## HTML
Markup language made up of tags and elements used to define the structure of a webpage.

## Document Object Model (DOM):
To represent the HTML document in Javascript, the browser builds a tree structure of objects called the
Document Object Model (DOM) to allow Javascript to access HTML elements. Each element in a HTML file is represented by an object in which the tree structure follows the nesting of elements defined in the HTML file.

## CSS
Style sheet language used to style a HTML webpage, defined by selectors and declaration blocks.
```
h1 {
    color: blue;
    background-color: grey;
}
```
Based on above, h1 is the selector, while the content inside the curly braces are the declaration blocks.

<hr>

Types of selectors: 
1. Element Selectors
```
h1 {
}
```
2. Id Selectors
```
#navigation {
}
```
3. Class Selectors 
```
.body {
}
```
4. Descendant Selectors 
```
#navigation div h1 {
}
```
5. Child Selectors 
```
#navigation > h1 {
}
```
Note: Descendant Selectors can go through multiple childs (navigation > div > h1), while Child Selector only selects elements that are direct children of a selector (navigation > h1)

## CSS Precedence and Specificity
If an element is styled by multiple CSS selectors, the browser chooses the most precise & specific selector for a HTML element.

Example Precedence: "id" selectors are higher precedence than "h1" selectors


## Useful CSS methods
- Change colour on hover: 
```
p: hover {
    color: red;
}
```

## CSS Box Model 
In CSS, each HTML element are allocated a box for the browser consisting of **content**, **padding**, **border**, **margin** where CSS rules are applied to the boxes of the elements.

Each box consists of 4 parts in order from innermost to outermost:  
- Content
    - width, min-width, max-width, height, min-height, max-height
- Padding
    - padding-top, padding-bottom, padding-left, padding-right
- Border
    - border, border-style, border-width
- Margin
    - margin-top, margin-bottom, margin-left, margin-right

## CSS Document Flow
### Document Flow
In CSS, all HTML elements are organised by 2 categories **Block** and **Inline**.

- Block
    - Block-level elements occupy the full width of its parent element and height of its content with a new line on each element (block elements stack together).
    - Default block-level elements: div, form, h1, h2, h3, h4, h5, h6, p
- Inline
    - Inline-level elements only occupy the width and height of its content with no new line on each element (inline elements can form a row together).
    - Default inline-level elements: a, img, input, label, span

<br>

Note: HTML element's organisation method can be changed:
```
p {
    display: block / inline;
}
```

## CSS Alignment 
### Text Alignment 
Text can be easily aligned with the **text-align** property by either **left**, **right**, **center**, **justify** (justify spreads text apart for equal width on each line).
```
p {
    text-align: left / right / center / justify
}
```

### Element Alignment 
HTML elements can be aligned by setting a width on a child element using the **width** property and push its margin to fill out the remaining available space using **margin** property by **auto** for align center or **float** property by either **left**, **right** for align left / right.
```
<div class=parent>
    <div class=child>
    </div>
</div>

#child {
    width: 50%;
    margin: auto;
}

OR 

#child {
    width: 50%;
    float: left / right;
}
```

