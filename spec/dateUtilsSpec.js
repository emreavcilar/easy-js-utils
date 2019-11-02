import {
    isValidDate
} from '../lib/dateUtils'

describe('is date valid', ()=>{
    let validDate;
    let invalidDate;
    let dateFormat;
    beforeEach(()=>{
        validDate = '05-11-2015';
        invalidDate = '31-11-2015';
        dateFormat = 'dd-mm-yy';
    })

    it('should return false with given invalid date and date format', () => {
        expect(isValidDate(invalidDate,dateFormat)).toEqual(false);  
    })

    it('should return false with given valid date and date format', () => {
        expect(isValidDate(validDate,dateFormat)).toEqual(true);  
    })
})
