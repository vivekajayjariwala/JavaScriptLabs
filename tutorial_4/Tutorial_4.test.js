const Tutorial_4 = require('./Tutorial_4')

// Big Endian's Test

test('BigEndian with one date'
    , () => {
        expect(Tutorial_4.bigEndianParser('2021-03-31')).toBe('[{"day":"31","month":"03","year":"2021"}]')
    });

test('BigEndian with two dates'
    , () => {
        expect(Tutorial_4.bigEndianParser('2019-11-02', '2020-04-06')).toBe('[{"day":"02","month":"11","year":"2019"}'+
                                                                             ',{"day":"06","month":"04","year":"2020"}]') ;
    });


test('BigEndian with 3 dates'
    , () => {
        expect(Tutorial_4.bigEndianParser('2015-10-12','1999-09-05', '2020-04-06')).toBe('[{"day":"12","month":"10","year":"2015"}'+
                                                                                         ',{"day":"05","month":"09","year":"1999"}'+
                                                                                         ',{"day":"06","month":"04","year":"2020"}]') ;
    });

// Little Endian's Test

test('LittleEndian with one date'
    , () => {
        expect(Tutorial_4.littleEndianParser('31-03-2021')).toBe('[{"day":"31","month":"03","year":"2021"}]')
    });

test('LittleEndian with two dates'
    , () => {
        expect(Tutorial_4.littleEndianParser('02-11-2019', '06-04-2020')).toBe('[{"day":"02","month":"11","year":"2019"}'+
                                                                             ',{"day":"06","month":"04","year":"2020"}]') ;
    });


test('LittleEndian with 3 dates'
    , () => {
        expect(Tutorial_4.littleEndianParser('12-10-2015','05-09-1999', '06-04-2020')).toBe('[{"day":"12","month":"10","year":"2015"}'+
                                                                                         ',{"day":"05","month":"09","year":"1999"}'+
                                                                                         ',{"day":"06","month":"04","year":"2020"}]') ;
    });


// Middle Endian's Test

test('MiddleEndian with one date'
    , () => {
        expect(Tutorial_4.middleEndianParser('03-31-2021')).toBe('[{"day":"31","month":"03","year":"2021"}]')
    });

test('LittleEndian with two dates'
    , () => {
        expect(Tutorial_4.middleEndianParser('11-02-2019', '04-06-2020')).toBe('[{"day":"02","month":"11","year":"2019"}'+
                                                                             ',{"day":"06","month":"04","year":"2020"}]') ;
    });


test('LittleEndian with 3 dates'
    , () => {
        expect(Tutorial_4.middleEndianParser('10-12-2015','09-05-1999', '04-06-2020')).toBe('[{"day":"12","month":"10","year":"2015"}'+
                                                                                         ',{"day":"05","month":"09","year":"1999"}'+
                                                                                         ',{"day":"06","month":"04","year":"2020"}]') ;
    });



    
test('LittleEndian with 6 dates'
, () => {
    expect(Tutorial_4.middleEndianParser('10-12-2015','09-05-1999', '04-06-2020','05-01-2000','10-10-1998', '04-17-2022'))
    
                                        .toBe('[{"day":"12","month":"10","year":"2015"}'+
                                            ',{"day":"05","month":"09","year":"1999"}'+
                                            ',{"day":"06","month":"04","year":"2020"}' +
                                            ',{"day":"01","month":"05","year":"2000"}'+
                                            ',{"day":"10","month":"10","year":"1998"}'+
                                            ',{"day":"17","month":"04","year":"2022"}' +
                                            ']') ;
});