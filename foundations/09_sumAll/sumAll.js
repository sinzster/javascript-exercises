const sumAll = function (num1, num2) {
  try {
    if (
      num1 < 0 ||
      num2 < 0 ||
      !Number.isInteger(num1) ||
      !Number.isInteger(num2) ||
      isNaN(num1) ||
      isNaN(num2)
    ) {
      throw error;
    }
    let sum = 0;
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
      sum += i;
    }
    return sum;
  } catch (error) {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
