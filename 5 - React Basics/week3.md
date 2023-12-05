# Week 3 Notes

## Events 
An event is a process where Javascript interacts with HTML that could be triggered as a result of a user action or system generated event.
# Week 3 Notes

## Website Navigation 
Website naviation is the parts of any website that allows users to browse through various pages or links on that website from a single component. React deals with navigation between different pages differently since React can emphasizes on single page application development. Instead of visiting different pages such as in HTML files, React only changes an existing view with a completely new view based on the virtual DOM, giving the illusion of switching pages. 

## React Router
React Router is a library that allows React to handle client and server side routing in React applications to create the illusion of multiple pages.

Installation:
```
npm install react-router-dom
```

Example React Router usage:
```
import { BrowserRouter } from 'react-router-dom';

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
```
```
import { Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div>
            <nav>
                <Link to="/">Homepage</link>
                <Link to="/about">About</link>
            </nav>
            <Routes>
                <Route path="/" element={ <Homepage />} />
                <Route path="/about" element={ <About />} />
            <Routes>
        </div>
    )
}
```

## React Assets
React assets are images, stylesheets, fonts and any files needed for a React application during runtime. Assets are kept in the assets folder within the src folder of a React application while other independent assets such as favicons can be kept in the public folder.

Example asset import and usage:
```
import myImage from './assets/images/image.jpg'
import myVideo from './assets/videos/video.mp4'

function Header() {
    return (
        <div>
            <img src={ myImage }>
            <img src={ require('./assets/images/image.jpg') }>
            <vieo src={ myVideo }>
        </div>
    )
}
```

Example video import and usage with third-party npm packages:
```
npm install react-player
```

```
import ReactPlayer from 'react-player/youtube';

function Header() {
    return (<ReactPlayer url='https://youtu.be/dQw4w9WgXcQ?si=0D87PZAnPxZag5Yp'>)
}
```

## Bundler
A bundler is a took that combines all Javascript code and assets into a single file that can be served to the browser. When using create-react-app to build React applications, webpack will be the built-in bundler. Since complicated application may have imported modules that also depend on other modules, it is important for bundlers to create a dependency graph. So, webpack is tasked to build a dependency graph and bundles modules into one or more files that a browser can consume. 

Tasks of a bundler:
- Converts modern Javascript code into older version of Javascript understandable by older browsers.
- Optimizes code to load as quickly as possible when a user visits the webpage.
- Processes SCSS code into regular CSS understandable by browsers.
- Builds source maps of the bundle's building blocks.
- Produces various kinds of files based on rules and templates. 