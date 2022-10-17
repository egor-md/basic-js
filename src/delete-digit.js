const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('');
  let res = 0;
  arr.forEach((i,idx) => {
    let temp = String(n).split('');
    temp.splice(idx, 1);
    if (res < +temp.join('')) {
      res = +temp.join('');
    }
  })
  return res
}

//console.log(deleteDigit(152))


module.exports = {
  deleteDigit
};
