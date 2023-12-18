# Week 1 Notes

## Semantics Elements
A semantic element clearly describes its meaning of a HTML document to the browser.

Basic HTML page structure with semantic elements:
```
<!DOCTYPE html>

<html>
  <head>
  </head>
  <body>
      <nav>
        <ul>
          <li><a href="home.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
        </ul>
      </nav>

      <header>
        <img src="logo.png" alt="Hero Section">
      </header>

      <main>
        <article>
          <h1>Article 1</h1>
          <p>Content 1</p>
        </article>
        <article>
          <h1>Article 2</h1>
          <section>
            <p>Content 2a</p>
          </section>
          <section>
            <p>Content 2b</p>
          </section>
        </article>
      </main>

      <footer>
        <p>Copyright 2023</p>
      </footer>
  </body>
</html>
```
**Note**: The navigation bar is often represented as an unordered list.

## Webpage Metadata
Metadata is data about a webpage, in which meta tags can be added inside the head element of a webpage to define a webpage's metadata, often enabling better search results 

A meta tag has 4 types of attributes; name, content, charset and http-equiv:
```
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
</html>
```
**Note**: Defining the viewport metadata as above can help mobile devices responsively render content based on device width.

Other metadata declarations:
```
<meta name="title" content="webpage title">
<meta name="description" content="webpage description">
<meta name="author" content="yuanyi">
<meta name="language" content="english">
<meta name="googlebot" content="notranslate">
<meta name="rating" content="safe for kids">
<meta name="copyright" content="Copyright 2022">
<meta charset="UTF-8">
<meta http-equiv="content-type" content="text/html">
<meta http-equiv="refresh" content="30">
<meta http-equiv="Cache-Control" content="no-cache"> 
```
**Note**: The meta tags with name and content as its attributes are for Search Engine Optimisation (SEO), where defining them may cause a webpage to be ranked higher by the search engine.

<hr>
With the recent development of Open Graph Protocol (OGP) by Meta, the preview card of a webpage can be displayed when sharing its link by using
meta tags to define the preview structure.

Example:
```
<head>
  <meta property="og:title" content="webpage title" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://website.com/" />
  <meta property="og:image" content="logo.png" />

  <meta property="og:description" content="website description">
  <meta property="og:site_name" content="website name">
  <meta property="og:locale" content="en_US">
</head>
```
**Notes**:
1. In order to define the preview card structure by the Open Graph Protocol, all 4 meta tags that defines title, type, url and image must be present, while other meta tags are optional.
2. The property attribute of each meta tag must start with "og".

## Forms 
A form is a section of a HTML webpage that allows user to enter data to be sent the server for processing. 

Form input types:
- Button (Checkbox, Radio, Submit)
- Text
- Email
- Password
- Date
- File
- Image
- Hidden
- Number
- Range
- Reset
- Search
- Telephone
- URL

Example form input:
```
<form>
  <label for="user_password">Password:</label>
  <input type="password" id="user_password" name="user_password">
</form>
```
**Note**: The id attribute of the input tag is used for the label tag, while the name attribute is used as the key for the value submitted to the web server.

## Form Input Details
Multiple sets of radio buttons can be seperated using the fieldset tag:
```
<fieldset id="radioset1">
  <input type="radio" value="value1" name="radioset1>
  <input type="radio" value="value2" name="radioset1>
</fieldset>

<fieldset id="radioset2">
  <input type="radio" value="value1" name="radioset2>
  <input type="radio" value="value2" name="radioset2>
</fieldset>
```

Value slider implementation:
```
<label for="slider">Slider</label>
<input type="range" id="slider" name="slider" min="1" max="10" value="5" oninput="this.nextElementSibling.value = this.value">
<output>5</output>
```

Typeable selection list implementation:
```
<label for="selection">Selection List</label>
<input id="selection" name="selection" list="options">
<datalist id="options">
  <option value="value1"></option>
  <option value="value2"></option>
</datalist>
```

In case of browser differences, specific input tags can be styles with CSS:
```
input[type=text] {
}
input[type=email] {
}
input[type=password] {
}
```
## Form Submit Action
The action attribute of a form tag is used to specify where to send the form data as a web URL address. 

Absolute path:
```
<form action="/login">
</form>
```

Relative path: 
```
<form action="login">
</form>
```

If the current URL of the form was https://meta.com/profile, using an absolute path would send the form data to https://meta.com/login, while using a relative path would send the form data to https://meta.com/profile/login.

## Get vs Post Methods
Form GET method - Form data is sent as part of the URL, where user input is appended to the URL. The web server then receives the HTTP GET request and extracts the form data from the URL.

Form POST method - Form data is sent as part of the HTTP request, where user input is inserted into the HTTP request body and then encrypted. The web server then receives the HTTP POST request and extracts the form data from the request itself.

## Form Validation
Form valiation ensures that the input data of a form is valid and conforms to defined rules.

Types of validation:
- Client-side Validation, validated by front-end HTML or Javascript code
- Server-side Validation, validated by a back-end server

Types of validation guards:
```
<!-- Non-empty fields -->
<input type="text" id="username" name="username" required>

<!-- Length of text input -->
<input type="text" id="username" name="username" required minlength="3" maxlength="12">

<!-- Range of numerical input -->
<input type="number" id="amount" name="amount" required min="1" max="10">

<!-- Multiple file embeds -->
<input type="file" id="files" name="files" multiple>
```

Example CSS for invalid input:
```
input:focus:invalid {
    border: 2px solid red;
}
```
**Note**: This CSS specifies that all input tags that are selected (focus) and have an invalid status will have a red border around it. 

## Video and Audio
Video and audio tags can be used to embed media onto a webpage. Most browsers support .mp4, .webm and .ogg video files, and .mp3, .wav, .ogg audio files.

Video tag implementation:
```
<video width="320" height="240" muted controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.ogg" type="video/ogg">
</video>
```
**Note**: Multiple video formats can be used in case one of them is not supported on a browser, the browser will use the first one it supports.

Audio tag implementation:
```
<audio loop controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
</audio>
```

## Images
Figure and image tags can be utilised together to embed images onto a webpage. Most browsers support .jpg, .png, .svg, .gif, .webp, .avif and .apng image files.

Figure tag implementation:
```
<figure>
  <img src="photo.png" width="320" height="240" alt="A Picture">
  <figcaption>A picture of something.</figcaption>
</figure>
```

## IFrames
An iFrame is a HTML element that enables embedding content from another website into a webpage.

IFrame tag implementation:
```
<iframe src="https://example.com" height="320" height="240" allow="camera 'none'; microphone 'none'; payment 'none';" sandbox=""></iframe>
```
**Note**: The sandbox="" attribute specifies that all sandbox restrictions will be applied to the iFrame.

Sandbox restrictions:
- allow-downloads
- allow-forms
- allow-modals
- allow-orientation-lock
- allow-popups
- allow-presentation
- allow-scripts 


