(function() {

  'use strict';
  
  const axios = require('axios')

  const error = (msg) => { throw new Error(msg) }
  const settings = { email: '', token: '', env: '', logging: false }

  const multiValidate = (arr = [], rule) => arr.map(rule)
  const validate = (data, rule) => [data].filter(rule)[0]
  const envRule = (value) => ['production', 'sandbox'].includes(value)

  const initialize = (obj) => {
	  settings.email = obj.email || error('Missing e-mail')
	  settings.token = obj.token || error('Missing token')
    settings.env = validate(obj.env, envRule) || error('Env must be production or sandbox')
    settings.logging = obj.logging || false

  	const callback = (response) => {
  		console.log(response)
  	}

  	//request.sessions(settings, callback)
  }

  let transparency = {}
  transparency.error = error
  transparency.settings = settings
  transparency.initialize = initialize

  module.exports = transparency
}());
