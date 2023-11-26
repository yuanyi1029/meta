# Week 2 Notes

## CSS Display Attribute 
In CSS, the display property specifies the display behaviour of an element. The display property can be of inline, block, flex and grid.

```
#sample {
    display: inline / block / flex / grid
}
```
**Notes**:
1. The flexbox value allows for a flexible responsive design where the container can shrink or expand.
2. The display value to grid allows for a 2D layout model where the container now has rows and columns.

## Flexbox
**Important Source**: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Flexbox is a type of container that allows dynamic growing and shrinking of itself to better align the elements inside it, where it is more suited for simple layouts.

Flexbox container properties:
- flex-direction: row | row-reverse | column | column-reverse
- flex-wrap: wrap | nowrap
- align-items: flex-start | flex-end | center |Stretch
- justify-content: flex-start | flex-end | center | space-between | space-evenly

Flexbox child item properties:
- flex-grow: factor of flex’s main size  
- flex-shrink: factor of flex’s main size
- flex-basis: auto | factor of main’s size | measurement unit
- order:position in flex
- align-self:  start | center | end | stretch

Example:
```
.container {
    display: flex; 
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap; 
    align-items: flex-end;
    gap: 10px;
}
```

## Grid
Grid is a type of container that allows a grid-based layour system with rows and columns that makes it easier to design webpages without altering positioning.

Grid container properties:
- grid-template-columns: measurement unit | % units | repeat()
- grid-template-rows: measurement unit | % units | repeat()
- grid-auto-columns: measurement unit
- grid-auto-rows: measurement unit
- grid-gap: measurement unit
- grid-column-gap: measurement unit
- grid-row-gap: measurement unit
- justify-items: start | center | end | stretch
- align-items: start | center | end | stretch
- place-items: start | stretch 
- justify-content: start | center | end | stretch | space-between | space-evenly | space-around
- align-content: start | center | end | stretch | space-between | space-evenly | space-around
- place-content: center | start
- grid-auto-flow: row | column | dense
- grid-auto-columns: measurement units
- grid-auto-rows: measurement units

Grid child item properties:
- grid-column: column position 
- grid-column-start: column start position 
- grid-column-end: column end position 
- grid-row: row position
- grid-row-start: row start position 
- grid-row-end: row end position 
- justify-self: start | center | end | stretch
- align-self: start | center | end | stretch
- place-self: start | stretch

Example:
```
.container {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-rows: 200px 100px;
    grid-gap: 10px;
}
.container {
    display: grid;
    grid-auto-columns: 100px;
    grid-auto-rows: 100px;
    column-gap: 5px;
    row-gap: 5px;
}
```

Example grid-template-areas usage to define a grid structure:
```
.container {
    grid-template-areas: "head head" 
                         "nav main" 
                         "footer footer"; 
    grid-template-rows: 30px 1fr 30px; 
    grid-template-columns: 150px 1fr; 
}
.header { 
    grid-area: head; 
} 
.nav { 
    grid-area: nav; 
} 
.main { 
    grid-area: main; 
} 
.footer { 
    grid-area: footer; 
} 

```

## CSS Units of Measurements 
Absolute Units: 
- Q
- mm
- cm
- in
- pc
- pt
- px

Relative Units:
- em
- ex
- ch
- rem
- lh
- rlh
- vw
- vh
- vmin 
- vmax 
- %

## CSS Selectors in Depth
CSS Selectors are used to select specific HTML elements for styling.

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
6. General Sibling Selectors
```
h1 ~ p {
}
```
7. Adjacent Sibling Selectors 
```
h1 + p {
}
```
8. Attribute Selectors
```
a[href="https://meta.com"] {
}
```
9. Group Selectors 
```
h1, h2, h3, p {
}
```
10. nth-of-type Selectors and nth-child Selectors
```
li:nth-of-type(2){
}
li:nth-child(2){
}
```

**Notes**:
1. Descendant Selectors can go through multiple childs (navigation > div > h1), while Child Selector only selects elements that are direct children of a selector (navigation > h1)
2. General Sibling Selectors select related elements that are nested in the same HTML block, while Adjacent Sibling Selectors only select the first related element that is nested in the same HTML block.   

## CSS Precedence and Specificity
If an element is styled by multiple CSS selectors, the browser chooses the most precise & specific selector for a HTML element. The precedence of CSS selectors are as follows (from highest to lowest precedence):

1. Inline styles
2. IDs
3. Classes, attributes and pseudo-classes
4. Elements and pseudo-elements 

## Pseudo-classes
Pseudo classes are keywords added to a selector that specifies a special state of the selected element to improve interactivity, Example pseudo-classes are as follows:

- hover
- active
- focus
- first-of-type
- last-of-type
- link & visited & hover & active (for hyperlinks / anchors)
- disabled & enabled (for buttons)
- checked & indeterminate (for checkboxes)
- valid & invalid (for emails / phone numbers)

```
a:hover {
}
a:active {
}
a:active {
}
li:first-of-type {
}
li:last-of-type {
}

```

## Pseudo-elements
Pseudo elements are keywords added to a selector that specifies a specified parts of the selected element to improve interactivity, Example pseudo-elements are as follows:

- first-letter
- first-line
- selection (style for highlighting)

```
p::first-letter {
}
p::first-line {
}
p::selection {
}
```

## CSS Effects
CSS effects are used to add visual effects to elements or configure how they blend with overlapping elements.

Common CSS effects:
- Hover Effect
- Cursor Effect
- Sliding Galleries
- Video Backgrounds
- Colour Transitions
- Full-screen Snapping

## CSS Transform and Transition
The transform and transition CSS properties can be used together to apply motion to HTML elements.

Example CSSS motion:
```
.container  {
    transform: rotate(20deg);
    transition: 5s;
}
```

## CSS Animation
The animation CSS property and @keyframes rule can be used together to animate HTML elements. 

Example CSS animation:
```
.minutes {
    animation: cycle 6s infinite linear;
}
.hours {
    animation: cycle 60s infinite linear;
}
@keyframes cycle {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.container {
    animation: grow 3s infinite ease-in;
}
@keyframes grow {
    0% { width: 50px; }
    50% { height: 20px; }
    100% { width: 100px; }
}
```
