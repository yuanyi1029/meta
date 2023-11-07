# Week 3 Notes

## Package Managers
A Package Manager is a tool that downloads and installs dependencies (libraries & frameworks) of a specified version.

Example Package Managers: pip (For Python), npm (For Javascript)

## Bundler
A Bundler is a tool that combines all dependencies into a single file bundle.

Example Bundlers: Gulp, Webpack

## Responsive Design
A webpage with responsive designs shrinks or expands depending on the screen size.

3 Techniques of Responsive Design:
1. Flexible Grids
    - Flexible grids for HTML elements are defined using percentage values instead of fixed pixel value
    - Flexible grids are made up of **columns** (content), **margins** (space between columns & screen edge), and **gutters** (space between columns)
2. Fluid Images
    - **max-width** property for images are set to **100%** in CSS so that it shrinks when its grid becomes smaller and never grow larger (won't become blurry)
3. Media Queries
    - Media Queries are a part of CSS that allows developers to query the display size, orientation and aspect ratio to apply **conditionally** apply CSS 

## Responsive Design Breakpoint
A Breakpoint is a specified pixel value in which the content and layout of a website will adapt and adjust to provide the best user experience.

Common Breakpoints:
| Breakpoint  | Boostrap Class infix  |  Dimensions |  
|---|---|---|
|  Extra Small | -  | < 576 px  |
|  Small | sm  | >= 576 px  |  
|  Medium | md  | >= 768 px  | 
|  Large | lg  | >= 992 px  | 
|  Extra Large  | xl  | >= 1200 px  | 
|  Extra Extra Large  | xxl  | >= 1400 px  | 

## Bootstrap
Bootstrap is a collection of pre-written code chunks in CSS and Javascript (CSS & Javascript library). 

## Bootstrap Grid System 
Bootstrap uses a 12 column grid system that can be fluid or fixed, 

In the code below, both columns take up a total column space of 12 on mobile devices so that they stack on top of each other, while they take a total space of 4 and 8 on desktop devices respectively. 
```
<div class="container">
    <div class="row">
        <div class="col-12 col-lg-4">
           // Content here
        <div>
        <div class="col-12 col-lg-8">
           // Content here
        <div>
    <div>
<div>
```
**Note**: Bootstrap infixes prioritise mobile devices first, then only desktop devices. 

## Static vs Dynamic Content   
Static Content - Files transfered by a web server that remains the same for all users such as images or video content.

Dynamic Content - Files that are only generated during the HTTP request based on other factors such as current datetime. To achieve this, the web server communicates with a backend/application server to generate the dynamic content. 

**Note**: A backend/application server handles more complex tasks such as run application logic, communicate with database and check user permissions.

## Single Page Application
Traditionally, multi page applications were used, but they are resource intensive because a new webpage had to be sent on each request. To solve this issue, single page applications can be utilised, where there is only 1 HTML page where it's content gets updated upon interactions.

Example Scenario:
- In a multi page application, the web server sends an entire profile page to be displayed 
- In a single page application, the web server sends a JSON object of the profile page information for the single page application  to update 

2 Techniques of Serving Resources:
1. Bundling
    - In Bundling, the web server sends all HTML, CSS and Javascript code upon request
    - Might take a long time downloading resources if an application is very complex
2. Lazy Loading
    - In Lazy Loading, the web server sends minimal HTML, CSS and Javascript code upon request, where additional resources are downloaded later when required

## React
A Javascript library for building single page applications or mobile applications (React Native), where it uses small pieces of user interface blocks called components to build a web application.

Benefits of using React components:
- Isolated development and testing of components allows for easier web application development
- Components can be re-used easily 

## React Virtual DOM
React keeps tracks of its own virtual DOM in the memory, which is a representation of the browser DOM. React uses the virtual DOM to update the browser DOM when necessary

Reconciliation Process:
1. Update the virtual DOM
2. Check the differences between the virtual DOM and the browser DOM
3. Update the browser DOM
4. The displayed webpage updates to match the browser DOM