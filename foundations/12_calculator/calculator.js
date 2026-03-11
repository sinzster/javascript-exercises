const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (values) {
  return values.reduce((sum, item) => (sum += item), 0);
};

const multiply = function (arr) {
  return arr.reduce((result, item) => (result *= item), 1);
};

const power = function (num, power) {
  return num ** power;
};

const factorial = function (value) {
  if (value === 0) {
    return 1;
  }
  return value * factorial(value - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
