const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  try {
    date.getTime();
  } catch {
    throw new Error("Invalid date!");
  }
  if (Object.prototype.toString.call(date) === '[object Date]') {
    let m = date.getMonth();
    if (m < 2 || m === 11) return 'winter'
    if (m < 5) return 'spring'
    if (m < 8) return 'summer'
    if (m < 11) return 'autumn'
  }
  else {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason
};
