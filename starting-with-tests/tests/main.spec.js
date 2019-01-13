var expect = require('chai').expect
var calc = require('../src/main.js')

describe('Main Js', function() {
  //smoke tests
  describe('Smoke tests calculator', function() {

    it('Should exist the CALC LIB', function() {
      expect(calc).to.exist
    })

    it('Should exist the method SUM', function() {
      expect(calc.sum).to.exist
      expect(calc.sum).to.be.a('function')
    })

    it('Should exist the method SUB', function() {
      expect(calc.sub).to.exist
      expect(calc.sub).to.be.a('function')
    })

    it('Should exist the method MULT', function() {
      expect(calc.mult).to.exist
      expect(calc.mult).to.be.a('function')
    })

    it('Should exist the method DIV', function() {
      expect(calc.div).to.exist
      expect(calc.div).to.be.a('function')
    })
  })

})