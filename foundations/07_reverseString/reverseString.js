const reverseString = function (strValue) {
  const reverseArray = [];
  const strArray = strValue.split("");
  for (let i = strValue.length - 1; i >= 0; i--) {
    reverseArray.push(strArray[i]);
  }
  return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
