"use-strict";

/**
 * isValidDate
 *
 * Returns false if the given date is not valid with the given format
 *
 * @param {String} value
 * @param {String} userFormat
 * @return {String} 
 * @public
 */
exports.isValidDate = (value,userFormat) => {
  // Set default format if format is not provided
  userFormat = userFormat || 'mm/dd/yyyy';
 
  // Find custom delimiter by excluding
  // month, day and year characters
  var delimiter = /[^mdy]/.exec(userFormat)[0];
 
  // Create an array with month, day and year
  // so we know the format order by index
  var theFormat = userFormat.split(delimiter);
 
  // Create array from user date
  var theDate = value.split(delimiter);
  return isDate(theDate, theFormat);
};

const isDate = (date, format) => {
    var m, d, y, i = 0, len = format.length, f;
    for (i; i < len; i++) {
      f = format[i];
      if (/m/.test(f)) m = date[i];
      if (/d/.test(f)) d = date[i];
      if (/y/.test(f)) y = date[i];
    }
    return (
      m > 0 && m < 13 &&
      y && y.length === 4 &&
      d > 0 &&
      // Check if it's a valid day of the month
      d <= (new Date(y, m, 0)).getDate()
    );
  }