"use strict"

const { randomInt } = require('./math')

module.exports.toDiceNotation = ({ count, sides }) => (
  `${count}d${sides}`
)

module.exports.roll = (notation) => {
  const [count, sides] = notation.split('d').map(num => +num)

//FOR LOOP WAY
  let total = 0
  for (let i = 0; i < count; i++) {
    total += randomInt(1, sides)
  }
  return total

//NOT FOR LOOP WAY
  // return Array(count).fill()
  //   .map(() => randomInt(1, sides))
  //   .reduce((p,c) => p+c)
}


      //extra UNNEEDED console.log("", );!!!
// console.log(module.exports.roll('1d6'))



/////////////////////////////// My original way ///////////////////////////////
// const { randomInt } = require('./math');

// let toDiceNotation = function (dice) {
//   // console.log("Dice=",dice );
//   console.log(`Picture me rolling a ${dice.count}d${dice.sides}`);
//   return `${dice.count}d${dice.sides}`
// }

// let roll = function (diceString) {
//   let diceArray = diceString.split('d');
//   let count = diceArray[0] 
//   let sides = diceArray[1]

//   let total = 0;

//   for (let i = 0; i < count; i++){
//     total += randomInt(sides);
//   }
//   return total;
// }

// module.exports = { roll, toDiceNotation };

