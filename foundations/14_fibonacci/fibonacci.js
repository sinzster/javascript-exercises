const fibonacci = function (value) {
  value = parseInt(value);
  if (value < 0) {
    return "OOPS";
  }
  const fibonacci = [];
  for (let i = 0; i <= value; i++) {
    if (i === 0) {
      fibonacci.push(0);
    } else if (i === 1) {
      fibonacci.push(1);
    } else {
      fibonacci.push(fibonacci.at(-1) + fibonacci.at(-2));
    }
  }
  console.log(fibonacci);
  return fibonacci[value];
};

// Do not edit below this line
module.exports = fibonacci;
