const removeFromArray = function (array, ...toRemove) {
  return array.filter((num) => !toRemove.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
