function repeatString(string, num) {
  if (num < 0) return 'ERROR';
  
  let result = "";
  for (let i = 0; i < num; i++) {
    result += string; // simpler and clearer than concat
  }
  return result;
}

module.exports = repeatString;
