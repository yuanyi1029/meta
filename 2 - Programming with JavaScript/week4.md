# Week 4 Notes

## NodeJS and npm 
NodeJS - Runtime environment built using Chrome's V8 Javascript engine to allow running code on a backend server instead of strictly on browsers

npm - Package manager used to install dependencies as node modules that comes pre-installed with NodeJS

<hr>

When starting a new project:
```
npm init
```
After going through the process, a "package.json" file will be created. This file holds all the instructions of all the node modules needed for the project folder. node modules can now be installed inside the project folder.

Installing node modules during development:
```
npm install module_name
```

When sharing this project folder to other users, all they need to do is run the "npm install" command to install all modules needed for the project since the "package.json" specifies the required modules for the specific project folder.

Installing node modules for other users:
```
npm install 
```

## Testing
Testing is the process of confirmeing that a software works as intended in it's requirements.

Types of Testing:
- End-to-End Testing
    - Testing the end-product in the perspective of the user
    - Slow and time consuming
- Integration Testinng
    - Testing separate parts of an application to see how they work together
    - Faster and cheaper than End-to-End Testing
- Unit Testing
    - Testing the smallest pieces of code in isolation such as functions
    - Fastest and cheapest

## Mocking 
Mocking is separating code from related dependencies during testing, this involves creating mock data to make sure that unit testing is stand-alone. For example, we can create mock user data when testing the front-end instead of obtaining real data from the back-end

## JEST Framework
JEST is a Javascript framework used for unit testing.

Other Javascript unit test frameworks:
- Jasmine
- Mocha
- Karma
- qUnit

Installing the JEST framework:
```
jest --version
npm init 
npm install --save-dev jest

// Specify "jest" at the "test" section of package.json
"scripts": {
    "test": "jest"
}
```
**Note**: Usually we only need to run "npm install jest", where --save is default. But we specify --save-dev instead because jest is a module only needed during the development stages and not needed during the release of an application, so it is a Dev Dependency instead of a normal Dependency. 

Testing with the JEST framework:
```
// function file:
function myFunction (arg1) {
    return arg1
}
module.exports = myFunction

// testing file:
const myFunction = require('./filename.js')
test ("testing description", () => {
    expect(myFunction(value1).toBe(expected_value))
})
```
