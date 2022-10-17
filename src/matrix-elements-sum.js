const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0;
  for (let i = 0; i < matrix[0].length; i++) {    
    if (!(matrix[0][i] === 0)) {      
      res += matrix[0][i];
     for (let j = 1; j < matrix.length; j++) {
        if (!(matrix[j][i] === 0)) {
          res += matrix[j][i];
        }else{
          break;
        }   
      }
    }
  }
  return res;
}

/* console.log(getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
])); */

module.exports = {
  getMatrixElementsSum
};
