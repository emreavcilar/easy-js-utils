# easy-js-utils

Table of Contents
=================

  * [easy-js-utils](#easy-js-utils)
    * [Installation](#installation)
  * [Usage](#usage)
    
  * [API](#api)
    * [Array utilities](#easy-js-utils/arrayUtils)
    * [String utilities](#easy-js-utils/stringUtils)
    * [Date utilities](#dateUtils)
  * [License](#license)


easy-js-utils
=========

**easy-js-utils** is a package of helper functions.

Installation
------------

It's recommended to install via [npm](https://github.com/isaacs/npm/):

    npm install easy-js-utils --save


Usage
=====

**easy-js-utils** has no external dependencies


```javascript
//ES5
var arrayUtils = require('easy-js-utils/lib/arrayUtils')
arrayUtils.countofElements(['Lemon', 'Orange', 'Strawberry', 'Strawberry', 'Orange', 'Banana', 'Strawberry']);

//ES6
import {countOfElements} from 'easy-js-utils/lib/arrayUtils'
countofElements(['Lemon', 'Orange', 'Strawberry', 'Strawberry', 'Orange', 'Banana', 'Strawberry'])
```

API
===

Array Utilities
------------------------
**differenceBetweenTwoArrays**
Returns the different elements between two arrays 
```javascript
import {differenceBetweenTwoArrays} from 'easy-js-utils/lib/arrayUtils'
differenceBetweenTwoArrays(['1','2','3'],['2','3'])
//returns ['1']
```
**countofElements**
Returns the object of the count of elements in an array by key value pairings. 
```javascript
import {countOfElements} from 'easy-js-utils/lib/arrayUtils'
countofElements(['Lemon', 'Orange', 'Strawberry', 'Strawberry', 'Orange', 'Banana', 'Strawberry','Banana'])
//returns { Lemon: 1, Orange: 2, Strawberry: 3, Banana: 2 }
```
**getMaxElementInArray**
Returns the maximum number in an Array. If array includes different types only numbers are compared
```javascript
import {getMaxElementInArray} from 'easy-js-utils/lib/arrayUtils'
getMaxElementInArray([2, 3, 4.1, 4.2 , 7, 123.456, 'test1', 'test2', false])
//returns 123.456
```
**getMinElementInArray**
Returns the minimum number in an Array. If array includes different types only numbers are compared
```javascript
import {getMinElementInArray} from 'easy-js-utils/lib/arrayUtils'
getMinElementInArray([2, 3, 4.1, 4.2 , 7, 123, 'test1', 'test2', false])
//returns 2
```
**sumOfElementsInArray**
Returns the sum of elements in an array.
```javascript
import {sumOfElementsInArray} from 'easy-js-utils/lib/arrayUtils'
sumOfElementsInArray([1,2,3])
//returns 6
```
**selectRandomFromArray**
Returns a random element from given array 
```javascript
import {selectRandomFromArray} from 'easy-js-utils/lib/arrayUtils'
selectRandomFromArray(['test',2,true,[123]])
//returns an element from array
```

String Utilities
----------------
**revertString**
Returns the reverted string 
```javascript
import {revertString} from 'easy-js-utils/lib/stringUtils'
revertString('abcd')
//returns dcba
```
**excerpt**
Reduces the text by word count limit. Works same in wordpress excerpt
```javascript
import {excerpt} from 'easy-js-utils/lib/stringUtils'
excerpt('lorem ipsum dolor sit amet', 3)
//returns lorem ipsum dolor&hellip;
```
**highlightText**
Highlight the text according to given parameters
```javascript
import {highlightText} from 'easy-js-utils/lib/stringUtils'
highlightText('lorem ipsum dolor sit amet')
//returns lorem <p class="highlight">ipsum</p> dolor <p class="highlight">sit</p> amet
```
**unHighlightText**
Unhighlight the text according to given parameters
```javascript
import {unHighlightText} from 'easy-js-utils/lib/stringUtils'
unHighlightText('<p class="highlight">lorem</p> ipsum dolor sit amet', 'p')
//returns lorem ipsum dolor sit amet
```

Date Utilities
-------------------------
**isValidDate**
Returns false if the given date is not valid with the given format
```javascript
import {isValidDate} from 'easy-js-utils/lib/dateUtils'
isValidDate('05-11-2015','dd-mm-yy') //returns true
isValidDate('31-11-2015','dd-mm-yy') //returns false
```

License
=======

See [LICENSE](https://github.com/emreavcilar/easy-js-utils/blob/master/LICENSE) file.