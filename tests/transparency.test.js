const sinon = require('sinon')
const axios = require('axios')
const chai = require('chai')
const http = require('chai-http')
const transparency = require('../lib/transparency.js')
const expect = chai.expect
const should = chai.should

chai.use(http)

describe('Initializing payment session on pagseguro', () => {
  it('Should recive settings on a object', (done) => {
    const settings = {
        email: 'lukaswilkeer@yahoo.com.br'
      , token: 'ASA98S98AD7WGGD'
      , env: 'sandbox'
    }

    transparency.initialize(settings)

  	expect(transparency.settings).to.be.a('object')
    expect(transparency.settings).to.have.property('email')
    expect(transparency.settings.email).to.exist
    expect(transparency.settings).to.have.property('token')
    expect(transparency.settings.token).to.exist
    done()
  })

  it('Should have an environment variable, sandbox or production', (done) => {
    expect(transparency.settings.env).to.be.a('string')
    expect(transparency.settings.env).to.be.eql('sandbox')
    done()
  })

  it('Should have validation on env settings', (done) => {
    const settings = {
        email: 'lukaswilkeer@yahoo.com.br'
      , token: 'ASA98S98AD7WGGD'
      , env: 'failed'
    }
    const setAmbient = (settings) => transparency.initialize(settings)
    expect(setAmbient).to.throw(Error)
    done()
  })

  it('Shoud return 200 OK with an session ID', (done) => {
  })
})
