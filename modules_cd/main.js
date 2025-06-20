// if the package is given as it is by its name like -> require("math"); then it will try to find it out in his node directory.
// if the package is given as -> require("./math"); then it will find this math package from the current directory.

// code for one function in the module(requiring/importing one functions from the math file)

/* const math = require("./math");

console.log(math(5,5));  */

////////////////////////////////////////////

// code for multi function in the module (requiring/importing two functions from the math file)

const {
  add,
  evenOdd,
  square,
  largestThree,
  factorial,
  reverseString,
} = require("./math");

console.log("Addition of two numbers are: ", add(5, 5));
console.log(evenOdd(4));
console.log(square(5))
console.log(largestThree(3,8,4))
console.log(factorial(5))
console.log(reverseString("John Doe"))
