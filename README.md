![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Bearer Authorization

### Author: Fletcher
Worked with Jared and got tips from Caity

### Links and Resources
[![Build Status](https://travis-ci.com/asdFletcher/18-authorization.svg?branch=master)](https://travis-ci.com/asdFletcher/18-authorization)

* [repo](https://github.com/asdFletcher/18-authorization)
* [travis](https://travis-ci.com/asdFletcher/18-authorization)
* [back-end](https://github.com/asdFletcher/18-authorization)
* [heroku](https://fl-18-auth.herokuapp.com/)

#### Documentation
* [swagger](http://xyz.com) (API assignments only)
* [jsdoc](http://xyz.com) (All assignments)

### Modules
#### `modulename.js`
##### Exported Values and Methods

#### `google.js`
##### Exported Values and Methods
- `authorize`

#### `middleware.js`
##### Exported Values and Methods
- anonymouse function

#### `router.js`
##### Exported Values and Methods
- `authRouter`

#### `users-model.js`
##### Exported Values and Methods
- users mongoose model

#### `app.js`
##### Exported Values and Methods
- `server` (instance of express)
- `start` function

#### `404.js`
##### Exported Values and Methods
- anonymous function (not found route)

#### `500.js`
##### Exported Values and Methods
- anonymous function (server error route)


### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db
* `SECRET` - salt for making tokens

#### Running the app
* `npm start`
* Endpoint: `/signup`
  * Creates a new user in the database
  * POST request
* Endpoint: `/signin`
  * Signs the user in
  * POST request
* Endpoint: `/test`
  * tests the route
  * POST request

  
### Testing
Tests can be found in the `__tests__` directory:
`__tests__/<file to be tested>.test.js`

Where `<file to be tested>` is the name of the file that the test file applies to.

All testing for this class was done with Jest: 
* [Jest docs](https://jestjs.io/docs/en/getting-started)

Instructions for replicating the tests for this project are as follows:

* Clone the repo.
* Create a node runtime environment

    ```JavaScript
    npm init
    ```
    This will create a `package.json` file, a `package-lock.json` file.

* Install Jest

    ```JavaScript
    npm i jest
    ```

* Run jest

    ```JavaScript
    npm jest --verbose --coverage
    ```
    It is useful to bind this to the command:
    ```JavaScript
    npm test
    ```
    To do this, manually edit your package.json to include the following under the "scripts" attribute:
    ```Javascript
    "scripts": {
        "test": "jest --verbose --coverage",
        "test-watch": "jest --watchAll --verbose --coverage"
    }
    ```
    `test-watch` will re-run tests when the file is saved

---

