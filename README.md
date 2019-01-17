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


###### `foo(thing) -> string`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples

### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db

#### Running the app
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.
  
#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

#### UML
Link to an image of the UML for your application and response to events
