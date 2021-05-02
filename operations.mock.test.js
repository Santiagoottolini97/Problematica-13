import funMock from './operations.mock';
import * as complexOperations from './complexOperations';

describe('complexOperation- Mocked Tests', () => {
    describe('checkEmail', () => {
        it('first test for checkEmail', () => {
            expect(complexOperations.checkEmail('santi@gmail.com')).toBe('The email is valid');
        });
        it('second test for checkEmail', () => {
            expect(complexOperations.checkEmail('santi@hotmail.com')).toBe('The email is valid');
        });
        it('third test for checkEmail', () => {
            expect(complexOperations.checkEmail('santi@yahoo.com')).toBe('The email is valid');
        });
        it('fourth test for checkEmail', () => {
            expect(complexOperations.checkEmail('santi@yahoo.com')).toContain('valid');
        });
        it('fifth test for checkEmail', () => {
            expect(complexOperations.checkEmail('test@yahoo.com')).not.toContain('invalid');
        });
    });

    describe('calculateArea', () => {
        it('first test for calculateArea', () => {
            expect(complexOperations.calculateArea('square', 5, 4)).toEqual(20);
        });
        it('second test for calculateArea', () => {
            expect(complexOperations.calculateArea('triangle', 5, 4)).toEqual(2);
        });
        it('third test for calculateArea', () => {
            expect(complexOperations.calculateArea('square', 10, 2)).toBeCloseTo(19.999);
        });
    });

    describe('sumGratherThan', () => {
        it('first test for sumGratherThan', () => {
            expect(complexOperations.sumGratherThan(2, 16, 11)).toBe('18 is grather than 11');
        });
        it('second test for sumGratherThan', () => {
            expect(complexOperations.sumGratherThan(15, 3, 20)).toBe('18 is less than 20');
        });
        it('third test for sumGratherThan', () => {
            expect(complexOperations.sumGratherThan(15, 3, 17)).not.toContain('less');
        });
    });

    describe('intersectionBetweenArrays', () => {
        it('first test for intersectionBetweenArrays', () => {
            expect(complexOperations.intersectionBetweenArrays([100, 109, 101], [1004, 101, 259])).toStrictEqual([101]);
        });
        it('second test for intersectionBetweenArrays', () => {
            expect(complexOperations.intersectionBetweenArrays([100, 109, 101], [1004, 101, 259])).not.toEqual([100]);
        });
        it('third test for intersectionBetweenArrays', () => {
            expect(complexOperations.intersectionBetweenArrays([100, 109, 101], [1004, 101, 259])).not.toEqual([109]);
        });
    });

    describe('sortArrayOfObjectsByKey', () => {
        it('first test for sortArrayOfObjectsByKey', () => {
            expect(
                complexOperations.sortArrayOfObjectsByKey(
                    [{ name: 'Romina' }, { name: 'Joaquin' }, { name: 'Luciano' }],
                    'name'
                )
            ).toStrictEqual([{ name: 'Romina' }, { name: 'Joaquin' }, { name: 'Luciano' }]);
        });
    });

    describe('numberOfOddAndEvenNumbers', () => {
        it('first test for numberOfOddAndEvenNumbers', () => {
            expect(complexOperations.numberOfOddAndEvenNumbers([12, 24, 9, 15])).toEqual({ even: 2, odd: 2 });
        });
    });
});
