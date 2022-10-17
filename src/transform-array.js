const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let res = [];
  let discard_next = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-prev') {
      if (arr[i - 2] === '--discard-next') {
        continue
      }
      res.pop();
      continue
    }
    if (arr[i] === '--double-prev') {
      if (res.length) {
        let j = arr[i - 1]
        if (arr[i - 2] === '--discard-next') {          
          continue
        }
        res.push(j);
        discard_next = false;
      }
      continue
    }
    if (arr[i] === '--double-next') {
      if (i + 1 < arr.length) {
        let j = arr[i + 1];
        res.push(j);
        discard_next = false;
      }
      continue
    }
    if (arr[i] === '--discard-next') {
      discard_next = true;
      continue
    }
    let j = arr[i];
    if (!discard_next) {
      res.push(j);
    }
    discard_next = false;
  }
  return res;
}

module.exports = {
  transform
};
