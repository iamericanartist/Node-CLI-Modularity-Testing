"use strict"

const { isFunction, oneOf } = require('chai').assert

const { randomInt } = require('../lib/math')

describe('math', () => {
  describe('randomInt', () => {
    it('should be a function', () => {
      isFunction(randomInt)
    })
    it('should return a number', () => {
      for (let i = 0; i < 1000; i++) {      //test for random number generation using for loop
        oneOf(randomInt(2,6), [2,3,4,5,6])
      }
    })
  })
})

