'use strict';

const User = require('./users-model.js');

module.exports = (req, res, next) => {
  // Basic am9objpqb2hubnk=
  // Bearer Token ...
  // console.log(req.headers.authorization);
  // console.log(req.body);
  try {
    let [authType, authString] = req.headers.authorization && req.headers.authorization.split(/\s+/);
    
    switch( authType.toLowerCase() ) {
      case 'basic': 
        return _authBasic(authString);
      case 'bearer':
        return _authBearer(authString);
      default: 
        return _authError();
    }
  }
  catch(e) {
    next('Resource not found');
  }
  
  function _authBasic(str) {
    // str: am9objpqb2hubnk=
    let base64Buffer = Buffer.from(str, 'base64'); // <Buffer 01 02 ...>
    let bufferString = base64Buffer.toString();    // john:mysecret
    let [username, password] = bufferString.split(':'); // john='john'; mysecret='mysecret']
    let auth = {username,password}; // { username:'john', password:'mysecret' }
    
    return User.authenticateBasic(auth)
      .then(user => _authenticate(user) )
      .catch(next);
  }

  function _authBearer(str) {
    return User.authenticateToken(str)
      .then(user => _authenticate(user) )
      .catch(next);
  }

  function _authenticate(user) {
    // console.log({user});
    if(user) {
      req.user = user;
      req.token = user.generateToken();
      next();
    }
    else {
      _authError();
    }
  }
  
  function _authError() {
    next('Invalid User ID/Password');
  }
  
};