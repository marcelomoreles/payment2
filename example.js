const payment = require('payment2')

const pay = () => {
	const settings = {
    	email: 'lukasc4l@gmail.com'
		, token: 'AOSDIAU8979234'
		, ambient: 'production'
		, logging: false
	}
	const callback = (response) => console.log('Session ID:', response)
	const initialize = () => payment.initialize(payment.credentials, callback)
	payment.settings(settings, initialize)
}

const pay2 = () => {
	const settings = () => {
		payment.settings.email: 'lukasc4l@gmail.com'
		payment.settings.token: 'AOSDIAU8979234'
		payment.settings.ambient: 'production'
		payment.settings.logging: false
	}
	const callback = (response) => console.log('Session ID:', response)
	payment.initialize(settings, callback)
}

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
