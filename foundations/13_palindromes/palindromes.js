const palindromes = function (value) {
  let value1 = value
    .replaceAll(" ", "")
    .replaceAll(",", "")
    .replaceAll(".", "")
    .replaceAll("!", "")
    .toLowerCase()
    .split("");
  console.log(value1);
  let value2 = value1.toReversed();
  for (let i = 0; i < value1.length; i++) {
    if (value1[i] !== value2[i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
