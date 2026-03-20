const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

/**
 * @param { Array } arr
 * @returns { number }
 */
const sum = function (arr) {
  return arr.reduce((acc, item) =>  acc + item, 0)
};

/**
 * @param { Array } arr
 * @returns { number }
 */
const multiply = function (arr) {
  return arr.reduce((acc, item) =>  acc * item, 1)
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  let factorial = 1;

  for (let i = 1; i <= a; i++) {
    factorial  *= i;
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
