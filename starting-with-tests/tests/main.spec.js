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

  describe('SUM', function() {
    it('Shoul return 4 when SUM(2,2)', function() {
      expect(calc.sum(2, 2)).to.be.equal(4)
    })
  })

  describe('SUB', function() {
    it('Should return 3 when SUB(10,7)', function() {
      expect(calc.sub(10, 7)).to.be.equal(3)
    })

    it('Shoul return -3 when SUB(12, 9)', function() {
      expect(calc.sub(9, 12)).to.be.equal(-3)
    })
  })

  describe('MULT', function() {
    it('Should return 10 when MULT(5,2)', function() {
      expect(calc.mult(5, 2)).to.be.equal(10)
    })
  })

  describe('DIV', function() {
    it('Should return 1 when DIV(15, 15)', function() {
      expect(calc.div(15, 15)).to.be.equal(1)
    })

    it('Should return ´Do not divide by zero!´ when divide by zero', function() {
      expect(calc.div(3, 0)).to.be.equal('Do not divide by zero!')
    })

  })
})