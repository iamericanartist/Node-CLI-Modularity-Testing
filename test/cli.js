"use strict"

const { exec } = require("child_process")

const { assert: {oneOf} } = require('chai')
describe('cli', () => {
  it("should handle no args", (cb) => {           // Mocha assumes sync data, so to tell it async: "(cb)" as arg
    exec('bin/diceroll', (err, stdout) => {
      if (err) cb(err)
      oneOf(stdout.toString(), ['1\n','2\n','3\n','4\n','5\n','6\n'])
      cb()
    })
  })


  // it.skip("should handle no args", () => {}) // use it.skip to count but ignore specific tests
  it("should handle one arg", () => {
    exec('bin/diceroll 1', (err, stdout) => {
      if (err) cb(err)
      oneOf(stdout.toString(), ['1\n'])
      cb()
    })
  })

  it("should handle two args", () => {
        exec('bin/diceroll 2 2', (err, stdout) => {
      if (err) cb(err)
      oneOf(stdout.toString(), ['2\n', '3\n', '4\n'])
      cb()
    })
      })
})

// // see test results in browser at:///Users/EricD/workspace/nssnode/exercises/cli-apps/01/coverage/lcov-report/lib/index.html
