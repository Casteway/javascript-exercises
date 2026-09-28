const findTheOldest = function (people) {
  return people.reduce((oldestSoFar, current) => {
    if (
      current.yearOfDeath - current.yearOfBirth >
      oldestSoFar.yearOfDeath - oldestSoFar.yearOfBirth
    ) {
      return current;
    }
    return oldestSoFar;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
