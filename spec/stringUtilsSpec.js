import {
    revertString,
    excerpt,
    highlightText,
    unHighlightText,
    camelize
} from '../lib/stringUtils'

describe('revert string', ()=>{
    beforeEach(()=>{
    })

    it('should reverts the given param string', () => {
        expect(revertString('abc')).toEqual('cba');  
    })

    it('should throw an error exception if parameter is not string', () => {
        expect(()=>{
            revertString(5)
        }).toThrowError('Parameter must be string');
    })
});

describe('reduce the word limit by word count limit', ()=>{
    let text;

    beforeEach(()=>{
        text = 'lorem ipsum dolor sit amet'
    })

    it('should reduce the word by the given word count limit',()=>{
        expect(excerpt(text,3)).toEqual('lorem ipsum dolor&hellip;')
    })

    it('should throw an error exception if parameter is not string', () => {
        expect(()=>{
            excerpt(5)
        }).toThrowError('Parameter must be string');
    })
});

describe('highlight text', ()=>{
    let text;
    let wordsArr;
    let tag;

    beforeEach(()=>{
        text = 'lorem ipsum dolor sit amet';
        wordsArr = ['ipsum', 'sit']
        tag = 'p'
    })

    it('should highlight the text according to the given parameters',()=>{
        expect(highlightText(text,wordsArr,tag)).toEqual('lorem <p class="highlight">ipsum</p> dolor <p class="highlight">sit</p> amet')
    })

    it('should throw an error exception if text parameter is not string', () => {
        expect(()=>{
            highlightText(5,wordsArr,tag)
        }).toThrowError('text parameter must be string');
    })
    
    it('should throw an error exception if words parameter is not array', ()=>{
        expect(()=>{
            highlightText(text,'word')
        }).toThrowError('words parameter must be array')
    })
})

describe('unHighlight text', ()=>{
    let text;
    let tag;

    beforeEach(()=>{
        text = '<p class="highlight">lorem</p> ipsum dolor sit amet';
        tag = 'p'
    })

    it('should unHighlight the text according to the given parameters',()=>{
        expect(unHighlightText(text,tag)).toEqual('lorem ipsum dolor sit amet')
    })

    it('should throw an error exception if text parameter is not string', () => {
        expect(()=>{
            highlightText(5,tag)
        }).toThrowError('text parameter must be string');
    })
})

describe('camelize text', () => {
    let text;
    beforeEach(()=>{
        text = "Lorem ipsum dolor sit amet";
    })

    it('should camelize the given string',()=>{
        expect(camelize(text)).toEqual('loremIpsumDolorSitAmet')
    })

    it('should throw an error exception if text parameter is not string', () => {
        expect(()=>{
            camelize(5)
        }).toThrowError('parameter must be string');
    })
})
