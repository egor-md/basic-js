const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let arr = [];

  if (str === null) {
    str = 'null'
  }

  if (str === true || str === false) {
    str = String(str);
  }

  if (options.addition === false || options.addition === true || options.addition === null) {
    options.addition = String(options.addition);
  }

  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }

  if (!options.separator) {
    options.separator = '+';
  }

  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }

  function makeAddition(addition) {
    let tempAddition = [];
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      tempAddition.push(addition)
    }
    if (!options.additionSeparator) {
      return tempAddition.join('');
    }
    return tempAddition.join(options.additionSeparator)
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    if (options.addition) {
      arr.push(str + makeAddition(options.addition));
    } else {
      arr.push(str);
    }
  }
  return arr.join(options.separator);
}

module.exports = {
  repeater
};


//repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }), 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false'
//repeater('9UXKEEt8Aq', { repeatTimes: 4, separator: '1L467Kdqx2', addition: 'IMqCarClDg', additionRepeatTimes: 8, additionSeparator: 'U7L9D0f8pb' }), '9UXKEEt8AqIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDg1L467Kdqx29UXKEEt8AqIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDg1L467Kdqx29UXKEEt8AqIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDg1L467Kdqx29UXKEEt8AqIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDgU7L9D0f8pbIMqCarClDg';
//repeater(9.234, { repeatTimes: 4, separator: '||', addition: { a: 5 }, additionRepeatTimes: 3, additionSeparator: '&&' }), '9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]||9.234[object Object]&&[object Object]&&[object Object]'