const repeatString = function (word, num) {
  let result = "";
  if (num === 0) {
    return "";
  } else if (num < 0) {
    return "ERROR";
  }
  for (let i = 1; i <= num; i++) {
    result += word;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
