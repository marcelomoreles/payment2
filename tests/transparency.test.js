const sinon = require('sinon')
const axios = require('axios')
const chai = require('chai')
const http = require('chai-http')
const transparency = require('../lib/transparency.js')
const expect = chai.expect
const should = chai.should

chai.use(http)

describe('Initializing payment session on pagseguro', () => {
  it('Should recive email and token on an object', (done) => {
  	transparency.credentials.email = 'lukaswilkeer@yahoo.com.br'
  	transparency.credentials.token = 'ASA98S98AD7WGGD'

  	expect(transparency.credentials).to.be.a('object')
    expect(transparency.credentials).to.have.property('email')
    expect(transparency.credentials).to.have.property('token')
   done()
  })

  it('Should have an environment variable, sandbox or production', (done) => {
  	transparency.settings.ambient = 'sandbox'
  	transparency.settings.logging = false

  	expect(transparency.settings.ambient).to.be.a('string')
  })

  it('Should have validation on ambient settings', (done) => {
  	const setAmbient = (ambient) => transparency.settigs.ambient = 'custom'
  	expect(setAmbient).to.throw(err)
  })

  it('Shoud return 200 OK with an session ID', (done) => {
  })
})