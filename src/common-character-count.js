const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {  
  let s11 = s1.split('');
  let s22 = s2.split('');
  let res = 0;  
  s11.forEach(i => {    
    for (let j = 0; j < s22.length; j++) {     
      if (i === s22[j]) {
        s22.splice(j, 1);
        res++;
        break;
      }
    }
  });
  
  return res;
}

//console.log(getCommonCharacterCount('aabcc', 'adcaa'))

module.exports = {
  getCommonCharacterCount
};
