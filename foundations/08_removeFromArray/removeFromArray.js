const removeFromArray = function (array, ...toExclude) {
  for (item of toExclude) {
    array = array.filter((val) => val !== item);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
