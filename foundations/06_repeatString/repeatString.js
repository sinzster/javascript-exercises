const repeatString = function (strValue, repeat) {
  if (repeat < 0) {
    return "ERROR";
  }
  let repeatString = "";
  for (let i = 0; i < repeat; i++) {
    repeatString += strValue;
  }
  return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
