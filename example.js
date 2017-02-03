const payment = require('payment2');

(function() {
  'use strict';

  const pay3 = () => {
  	const settings = {
  		  email: 'lukasc4l@gmail.com'
  		, token: 'AOSDIAU8979234'
  		, ambient: 'production'
  		, logging: false
  	}
  	const callback = (response) => console.log('Session ID:', response)
  	payment.initialize(settings, callback)
  }


}());
