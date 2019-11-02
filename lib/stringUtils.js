"use-strict";

/**
 * Revert String
 *
 * Returns the reverted string
 *
 * @param {String} str
 * @return {String} 
 * @public
 */
exports.revertString = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError("Parameter must be string");
  } 
  
    return str.split('').reverse().join('')
  
};

/**
 * Reduce text by wordlimit
 *
 * Reduces the text by word count limit
 *
 * @param {String} str
 * @return {String} 
 * @public
 */
exports.excerpt = (str, nwords) => {
  if (typeof str !== 'string') {
    throw new TypeError("Parameter must be string");
  } 
  
    var words = str.split(' ');
    words.splice(nwords, words.length-1);
    return words.join(' ') + 
      (words.length !== str.split(' ').length ? '&hellip;' : '');
  
  
}


/**
 * Highlight text
 *
 * Highlight the text according to given parameters
 *
 * @param {String} text
 * @param {Array} words
 * @param {String} tag optional
 * @return {String}  
 * @public
 */
exports.highlightText = (text,words,tag) => {
  if (typeof text !== 'string') {
    throw new TypeError("text parameter must be string");
  } 

  if (!Array.isArray(words)) {
    throw new TypeError("words parameter must be array");
  }

  // Default tag if no tag is provided
  tag = tag || 'span';
 
  for (var i = 0; i < words.length; i++) {
    // Global regex to highlight all matches
    var re = new RegExp(words[i], 'g');
    if (re.test(text)) {
      text = text.replace(re, '<'+ tag +' class="highlight">$&</'+ tag +'>');
    }
  }
  return text;
}

/**
 * Unhighlight text
 *
 * Unhighlight the text according to given parameters
 *
 * @param {String} text
 * @param {String} tag optional
 * @return {String}  
 * @public
 */
exports.unHighlightText = (text,tag) => {
  if (typeof text !== 'string') {
    throw new TypeError("text parameter must be string");
  }
  
  // Default tag if no tag is provided
  tag = tag || 'span';
  var re = new RegExp('(<'+ tag +'.+?>|<\/'+ tag +'>)', 'g');
  return text.replace(re, '');
}