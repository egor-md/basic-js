const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const res = [];
  for (let i = 0; i < names.length; i++) {
    let counter = names.slice(0, i).filter(el => el === names[i]).length;
    console.log(counter);
    if (counter === 0) {
      if (res.includes(names[i])) {
        res.push(names[i] + '(1)');
      } else {
        res.push(names[i]);
      }
    } else {
      if (res.includes(names[i])) {
        res.push(names[i] + `(${counter})`);
      }
    }
  }
  console.log(res);
  return res;
}

//console.log(renameFiles(['a', 'b', 'cd', 'b ', 'a(3)']));

module.exports = {
  renameFiles
};
