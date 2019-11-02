const arrayUtils = require('./lib/arrayUtils');

let resultDiff = arrayUtils.differenceBetweenTwoArrays(['1','2','3'],['2','3'])
// let resultDiff = array.differenceBetweenTwoArrays(['1','2','3'],'5')
// console.log('result differenceBetweenTwoArrays', resultDiff)

let resultCount = arrayUtils.countofElements(['Lemon', 'Orange', 'Strawberry', 'Strawberry', 'Orange', 'Banana', 'Strawberry','Banana']);
// let resultCount = array.countofElements('5');
//console.log('result countofElements ', resultCount)

let resultMax = arrayUtils.getMaxElementInArray([2, 3, 4.1, 4.2 , 7, 123.456, 'test1', 'test2', false]);
//console.log('result getMaxElementInArray ', resultMax);

let resultMin = arrayUtils.getMinElementInArray([2, 3, 4.1, 4.2 , 7, 123, 'test1', 'test2', false]);
//console.log('result getMinElementInArray ', resultMin);

let resultSum = arrayUtils.sumOfElementsInArray([1,2,3,'test']);
// console.log('result sumOfElementsInArray',resultSum);

let resultSelect = arrayUtils.selectRandomFromArray(['test',2,true,[123]]);
// console.log('result selectRandomFromArray ',resultSelect);

//------------------------------------------------------

const stringUtils = require('./lib/stringUtils');
let resultRevertString = stringUtils.revertString('abcd');
//console.log('result revertString ', resultRevertString);

let resultExcerpt = stringUtils.excerpt('lorem ipsum dolor sit amet', 3);
 //console.log('result resultExcerpt ', resultExcerpt);

// let resultHightligtText = stringUtils.highlightText('My lorem ipsum text', ['My', 'lorem'],'p');
let resultHightligtText = stringUtils.highlightText('lorem ipsum dolor sit amet', ['ipsum','sit'],'p');
// console.log('result resultHightligtText ', resultHightligtText);


// let resultHightligtText = stringUtils.highlightText('My lorem ipsum text', ['My', 'lorem'],'p');
let resultUnHightligtText = stringUtils.unHighlightText('<p class="highlight">lorem</p> ipsum dolor sit amet', 'p');
// console.log('result resultUnHightligtText ', resultUnHightligtText);

//---------------------------------------------------------

const dateUtils = require('./lib/dateUtils');
let resultIsValidDate = dateUtils.isValidDate('31-11-2015','dd-mm-yy');
// let resultIsValidDate = dateUtils.isValidDate('05-11-2015','dd-mm-yy');
console.log('result resultIsValidDate ' , resultIsValidDate);