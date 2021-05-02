import 'jest';
let isNumber = jest.fn().mockReturnValue(true);
let isArray = jest.fn().mockReturnValue(true);
let isString = jest.fn().mockReturnValue(true);
let validateEmail = jest.fn().mockReturnValue(true);
let sum = jest.fn().mockReturnValue(18);
let multip = jest.fn().mockReturnValue(20);
let division = jest.fn().mockReturnValue(2);
let exponent = jest.fn().mockReturnValue(3);
let isSupportedFigure = jest.fn().mockReturnValue(true);
let arrayElementsAreObjectWithKey = jest.fn().mockReturnValue(true);
let arrayIntersection = jest.fn().mockReturnValue([101]);
let sortArrayByKey = jest.fn().mockReturnValue([{ name: 'Romina' }, { name: 'Joaquin' }, { name: 'Luciano' }], 'name');
let getEvenNumbersFromArray = jest.fn().mockReturnValue([12, 24]);
let getOddNumbersFromArray = jest.fn().mockReturnValue([9, 15]);

const funmock = jest.mock('./basicOperations', () => {
    return {
        sum,
        isNumber,
        isNumber,
        isArray,
        isString,
        validateEmail,
        multip,
        division,
        exponent,
        isSupportedFigure,
        arrayElementsAreObjectWithKey,
        arrayIntersection,
        sortArrayByKey,
        getEvenNumbersFromArray,
        getOddNumbersFromArray,
    };
});

export default funmock;
