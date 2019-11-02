import {
    differenceBetweenTwoArrays,
    countofElements,
    getMaxElementInArray,
    getMinElementInArray,
    sumOfElementsInArray,
    selectRandomFromArray
} from '../lib/arrayUtils'

describe('difference between two arrays', ()=>{
    let firstArr;
    let secondArr;
    let secondParam;
    beforeEach(()=>{
        firstArr = [5, 2, 1];
        secondArr = [1, 2, 3, 4, 5];
        secondParam = '5';
    })

    it('should find the difference between two arrays', () => { 
        expect(differenceBetweenTwoArrays(firstArr,secondArr)).toEqual([3, 4])  
    })

    it('should throw an error exception if parameters is not array', () => {
        expect(()=>{
            differenceBetweenTwoArrays(firstArr,secondParam)
        }).toThrowError('Parameters must be array');
    })
})

describe('count of same elements', ()=>{
    let arr;
    let param;
    beforeEach(()=>{
        arr = ['Lemon', 'Orange', 'Strawberry', 'Strawberry', 'Orange', 'Banana', 'Strawberry'];
        param = 'test';
    })
 
    it('should find the count of the same elements in an array', () => { 
        expect(countofElements(arr)).toEqual({ Lemon: 1, Orange: 2, Strawberry: 3, Banana: 1 })  
    })

    
    it('should throw an error exception if parameters is not array', () => {
        expect(()=>{
            countofElements(param)
        }).toThrowError('Parameter must be array');
    })
})

describe('gets max number in an array', ()=>{
    let arr;
    let param;
    beforeEach(()=>{
        arr = [2, 3, 4.1, 4.2 , 7, 123, 'test1', 'test2', false];
        param = 'test';
    })
 
    it('should find the maximum number in an array', () => {
        expect(getMaxElementInArray(arr)).toEqual(123)  
    })

    it('should throw an error exception if parameter is not array', () => {
        expect(()=>{
            getMaxElementInArray(param)
        }).toThrowError('Parameter must be array');
    })
})

describe('gets min number in an array', ()=>{
    let arr;
    let param;
    beforeEach(()=>{
        arr = [2, 3, 4.1, 4.2 , 7, 123, 'test1', 'test2', false];
        param = 'test';
    })
 
    it('should find the maximum number in an array', () => { 
        expect(getMinElementInArray(arr)).toEqual(2)  
    })

    it('should throw an error exception if parameter is not array', () => {
        expect(()=>{
            getMinElementInArray(param)
        }).toThrowError('Parameter must be array');
    })
})

describe('get sum of elements in an array', ()=>{
    let arr;
    let param;
    beforeEach(()=>{
        arr = [2, 3, 4,'test',false];
        param = 'test';
    })
 
    it('should return the sum of elements in array', () => { 
        expect(sumOfElementsInArray(arr)).toEqual(9)  
    })

    it('should throw an error exception if parameter is not array', () => {
        expect(()=>{
            sumOfElementsInArray(param)
        }).toThrowError('Parameter must be array');
    })
})

describe('get random element from array', ()=>{
    let arr;
    let randomElem;
    beforeEach(()=>{
        arr = ['test',2,true,[123]];
        randomElem = selectRandomFromArray(arr)
    })
 
    it('should return random elements from array', () => { 
        expect(arr).toContain(randomElem);
    })

    it('should throw an error exception if parameter is not array', () => {
        const param = 'test';
        expect(()=>{
            sumOfElementsInArray(param)
        }).toThrowError('Parameter must be array');
    })
})