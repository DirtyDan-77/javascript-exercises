const add = function(numOne, numTwo) {
  if (typeof numOne !== "number" || typeof numTwo !== "number") {
    return "invalid input";
  }
  return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
  if (typeof numOne !== "number" || typeof numTwo !== "number") {
    return "invalid input";
  }
  return numOne - numTwo;
};

const sum = function(arr) {
  if (!Array.isArray(arr)) return "invalid input";

  return arr.reduce((sum, num) => {
    if (typeof num !== "number") return sum;
    return sum + num;
  }, 0);
};

const multiply = function(arr) {
  if (!Array.isArray(arr)) return "invalid input";

  return arr.reduce((mul, num) => {
    if (typeof num !== "number") return mul;
    return mul * num;
  }, 1);
};


const power = function(numOne, numTwo) {
  if (typeof numOne !== "number" || typeof numTwo !== "number") {
    return "invalid input";
  }
  return numOne ** numTwo;
};


const factorial = function (num) {
  if (typeof num !== "number" || num < 0) return "invalid input";
  if (num === 0 || num === 1) return 1;

  let count = num;
  for (let i = num - 1; i > 0; i--) {
    count *= i;
  }

  return count;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
