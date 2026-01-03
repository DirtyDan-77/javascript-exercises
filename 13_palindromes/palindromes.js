const palindromes = function (string) {
// arr = arr.toLowerCase()
// arr = arr.filter(item => item !== " " && item !== ",");
// for(let i = 0; i < arr.length / 2; i++) {
//     let indexOne = 0;
//     let indexTwo = -1;
    
//     let currOne = arr[indexOne];
//     let currTwo = arr[indexTwo];
//     if(currOne !== currTwo) {
//         return false;
//     }
//     indexOne += 1;
//     indexTwo -= 1;
// }
// return true;

  // Since we only consider letters and numbers, create a variable containing all valid characters
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  // Convert to lowercase, split to array of individual characters, filter only valid characters, then rejoin as new string
  const cleanedString = string
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

  // Create a new reversed string for comparison
  const reversedString = cleanedString.split('').reverse().join('');

  // Return the outcome of the comparison which will either be true or false
  return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
