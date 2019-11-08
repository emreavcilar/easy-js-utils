import {
    addComas
} from '../lib/numberUtils'

describe('add comas', ()=>{
    let num;
    let char;
    beforeEach(()=>{
        num = 123456789
        char = '.'
    })

    it('seperate the given number parameter with commas', () => {
        expect(addComas(num,char)).toEqual('123.456.789');  
    })

    it('should throw an error exception if num parameter is not number', () => {
        expect(()=>{
            addComas('123456789',char)
        }).toThrowError('num parameter must be number');
    })

    it('should throw an error exception if char parameter is not string', () => {
        expect(()=>{
            addComas(num,123)
        }).toThrowError('char parameter must be string');
    })
});
