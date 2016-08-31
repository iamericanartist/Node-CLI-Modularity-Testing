"use strict"

//ORIGINAL VERSION
// var assert = require('assert');

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });


//FAT ARROW VERSION
// var assert = require('assert')

// describe('Array', () => {
//   describe('#indexOf()', () => {
//     it('should return -1 when the value is not present', () => {
//       assert.equal(-1, [1,2,3].indexOf(4))
//     })
//   })
// })

////////using Chai library
// // var assert = require('chai').assert   //same as
// var { assert } = require('chai')      //same as

// describe('Array', () => {
//   describe('#indexOf()', () => {
//     it('should return -1 when the value is not present', () => {
//       assert.equal(-1, [1,2,3].indexOf(4))
//     })
//   })
// })

// //moved to their own test files
// const { isFunction } = require('chai').assert

// const { randomInt } = require("../lib/math")

// describe('math', () => {
//   describe('randomInt', () => {
//     it('should be a function', () => {
//       isFunction(randomInt)
//     })
//   })
// })

// const parseArgs = require('../lib/parse-args')

// describe('parse-args', () => {
//   it('should be a function', () => {
//     isFunction(parseArgs)
//   })
// })
