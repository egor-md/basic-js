const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let lib = '0123456789ABCDEF';
  let res = true;
  let arr = n.split('-');
  console.log('len', arr, arr.length);
  if (arr.length === 6) {
    arr.forEach(i => {
      let temp = i.split('');
      if (!temp.length === 2) {        
        res = false;
      }
      temp.forEach(j => {
        if (!lib.includes(j)) {          
          res = false;
        }
      })
    });
  }else{
    return false;
  }
  return res;
}

//console.log(isMAC48Address('Z1-1B-63-84-45-E6'));

module.exports = {
  isMAC48Address
};
