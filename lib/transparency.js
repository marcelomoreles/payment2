(function() {

  'use strict';
  
  const axios = require('axios')

  const error = (msg) => { throw new Error(msg) }
  const credentials = { email: '', token: '' }
  const settings = { ambient: '', logging: '' }

  const initialize = (credentials, env) => {
  	// Validation
  	credentials.email = credentials.email || error('Missing e-mail')
  	credentials.token = credentials.token || error('Missing token')

  	const callback = (response) => {
  		console.log(response)
  	}

  	request.sessions(credentials, env, callback)
  }

  transparency = {}
  transparency.error = error
  transparency.credentials = credentials
  transparency.initialize = initialize


  module.exports = transparency

}());
