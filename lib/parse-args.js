"use strict"

module.exports = (args) => {
  let count, sides

  switch (args.length) {
    case 1:
      count = 1
      sides = args[0]
      break
    case 2:
      count = args[0]
      sides = args[1]
      break
    default:
      count = 1
      sides = 6
  }

  return { count, sides }
}


/////////////////////////////// My original way ///////////////////////////////
// module.exports = (args) => {
//   // console.log("args",args);
  
//   //count is # of die
//   let count = parseInt(args[0])
  
//   //sides is # of sides
//   let sides = parseInt(args[1])
  
//   return { count, sides }
//   }
