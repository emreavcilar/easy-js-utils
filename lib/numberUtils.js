"use-strict";


/**
 * addComas
 *
 * Returns string format of given number with separated given character
 *
 * @param {String} val
 * @param {String} char
 * @return {String} 
 * @public
 */

exports.addComas = (num,char) => {
    if(typeof num !== 'number'){
        throw new TypeError('num parameter must be number')
    }
    if(typeof char !== 'string'){
        throw new TypeError('char parameter must be string')
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, char);
}