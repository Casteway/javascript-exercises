const sumAll = function (firstIndex, secondIndex) {
  if (!Number.isInteger(firstIndex) || !Number.isInteger(secondIndex)) {
    return "ERROR";
  }
  if (firstIndex < 0 || secondIndex < 0) {
    return "ERROR";
  }
  let bottomIndex;
  let topIndex;
  if (firstIndex > secondIndex) {
    bottomIndex = secondIndex;
    topIndex = firstIndex;
  } else {
    bottomIndex = firstIndex;
    topIndex = secondIndex;
  }
  let arrayToSum = [];
  for (let i = bottomIndex; i <= topIndex; i++) {
    arrayToSum.push(i);
  }
  return arrayToSum.reduce((total, current) => total + current, 0);
};

// Do not edit below this line
module.exports = sumAll;
