// code for one function in the module (exporting one functions from the main file)

/* function add(a, b) {
  return a + b;
}

module.exports = add; */

/////////////////////////////////////////////

// code for multi function in the module (exporting two functions in the main file)

function add(a, b) {
  return a + b;
}

function evenOdd(n) {
  if (n % 2 == 0) {
    return `Number ${n} is an Even no`;
  } else {
    return `Number ${n} is an Odd no`;
  }
}

function square(n) {
  return n ** 2;
}

function largestThree(a, b, c) {
  if (a > b && a > c) {
    return `Number ${a} is greater than ${b} ${c}`;
  } else if (b > a && b > c) {
    return `Number ${b} is greater than ${a} ${c}`;
  } else {
    return `Number ${c} is greater than ${a} ${b}`;
  }
}

function factorial(n) {
  if (n < 0) {
    return "The factorial of negative no does not exist";
  } else if (n == 1 || n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function reverseString(n) {
  return n.split("").reverse().join("");
}

module.exports = {
  add,
  evenOdd,
  square,
  largestThree,
  factorial,
  reverseString,
};
