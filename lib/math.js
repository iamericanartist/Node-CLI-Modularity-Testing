"use strict"

module.exports.randomInt = (min, max) => (
  Math.floor(
    Math.random()
    * (max - min + 1)
    + min
  )
)


/////////////////////////////// My original way ///////////////////////////////
// const randomInt = (dieSides) => {
//   return Math.floor(Math.random() * (dieSides)) + 1;
// };

// module.exports = { randomInt };
