const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 * aaaatttt
 */
function encodeLine(str) {
  let arr = str.split('');
  let tempStack = '';
  let res = '';
  if (arr.length) {
    tempStack = arr[0]; 
  }else{
    return '';
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i-1]) {
      tempStack += arr[i];
    }else{
      if (tempStack.length === 1) {
        res += tempStack;
        tempStack = arr[i];
      }else{
        res += tempStack.length + tempStack[0];
        tempStack = arr[i];
      }      
    }
  }
  if (tempStack.length) {
    if (tempStack.length === 1) {
      res += tempStack[0];
    }else{
      res += tempStack.length + tempStack[0];
    }
  }
  return res;
}

//console.log(encodeLine('abbcca'));

module.exports = {
  encodeLine
};
