"use-strict";

/**
 * Select difference between two arrays.
 *
 * Returns the different elements between two arrays
 *
 * @param {Array} arrA
 * @param {Array} arrB
 * @return {Array} 
 * @public
 */
exports.differenceBetweenTwoArrays = (arrA, arrB) => {
  if (!Array.isArray(arrA) || !Array.isArray(arrB)) {
    throw new TypeError("Parameters must be array");
  } 
  
    let result;
    const setA = new Set(arrA);
      const setB = new Set(arrB);
  
      result = [
        ...arrA.filter(x => !setB.has(x)),
        ...arrB.filter(x => !setA.has(x))
      ];
      return result;
  
};

/**
 * Count of Elements.
 *
 * Returns the count of same or unique elements in an array 
 * by key value pairings.
 *
 * @param {Array} arr
 * @return {Object}  
 * @public
 */
exports.countofElements = (arr) => {
  if(!Array.isArray(arr)){
    throw new TypeError('Parameter must be array');
  }

    return arr.reduce((countElem,elem)=>{
      countElem[elem]= (countElem[elem] || 0 ) +1;
      return countElem;
    },{})  
}

/**
 * Get Max Element in Array.
 *
 * Returns the maximum number in an Array. If array includes different
 * types only numbers are compared
 *
 * @param {Array} arr
 * @return {Number}  
 * @public
 */
exports.getMaxElementInArray = (arr) => {
  if(!Array.isArray(arr)){
    throw new TypeError('Parameter must be array');
  }

  let arrOfNumbers = arr.filter(item => typeof item === 'number')
  return arrOfNumbers.reduce((a,b) => a > b ? a : b);
}

/**
 * Get Min Element in Array.
 *
 * Returns the minimum number in an Array. If array includes different
 * types only numbers are compared 
 * @param {Array} arr
 * @return {Number}  
 * @public
 */
exports.getMinElementInArray = (arr) => {
  if(!Array.isArray(arr)){
    throw new TypeError('Parameter must be array');
  }

  let arrOfNumbers = arr.filter(item => typeof item === 'number')
  return arrOfNumbers.reduce((a,b) => a < b ? a : b);  
}


/**
 * Get Sum of Elements in Array.
 *
 * Returns the sums of elements in an array.
 * @param {Array} arr
 * @return {Number}  
 * @public
 */
exports.sumOfElementsInArray = (arr) => {
  if(!Array.isArray(arr)){
    throw new TypeError('Parameter must be array');
  }
  
  let arrOfNumbers = arr.filter(item => typeof item === 'number')
  return arrOfNumbers.reduce((a,b) => a + b, 0);
}

/**
 * Select random from array.
 *
 * Returns a random element from given array
 * @param {Array} arr
 * @return {any}  
 * @public
 */
exports.selectRandomFromArray = (arr) => {
  if(!Array.isArray(arr)){
    throw new TypeError('Parameter must be array');
  }

  return arr[Math.floor(Math.random()*arr.length)];
}