const functions = require('./dummy');

describe('Roman Numeral to Decimal', () => {

    // Unit Test #1
    it('When input is I, it should return 1', () => {
        //Arrange
        const str = 'I';

        //Act
        const decimal = functions.char_to_int(str);

        //Assert
        expect(decimal).toEqual(1);


    });

    // Unit Test #2
    it('When input is II, it should return 2', () => {
        //Arrange
        const str = 'II';

        //Act
        const decimal = functions.roman_to_int(str);

        //Assert
        expect(decimal).toEqual(2);
    });

    // Unit Test #3
    it('When input is V, it should return 5', () => {
       //Arrange
        const str = 'V';

        //Act
        const decimal = functions.roman_to_int(str);

        //Assert
        expect(decimal).toEqual(5);
    });

    // Unit Test #4
    it('When input is IV, it should return 4', () => {
       //Arrange
        const str = 'IV';

        //Act
        const decimal = functions.roman_to_int(str);

        //Assert
        expect(decimal).toEqual(4);
    });
});