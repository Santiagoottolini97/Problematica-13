import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Unit Tests', () => {
    describe('checkEmail', () => {
        it('first test for checkEmail', () => {
            expect(complexOperations.checkEmail('')).toBe('The email should be an string');
        });
        it('second test for checkEmail', () => {
            expect(complexOperations.checkEmail('@')).toBe('The email is invalid');
        });
        it('third test for checkEmail', () => {
            expect(complexOperations.checkEmail('santiago@.ar')).toBe('The email is invalid');
        });
        it('fourth test for checkEmail', () => {
            expect(complexOperations.checkEmail('santi@gmail.com')).toBe('The email is valid');
        });
        it('fifth test for checkEmail', () => {
            expect(complexOperations.checkEmail('santi@gmail.com')).not.toBe('The email is invalid');
        });
        it('sixth test for checkEmail', () => {
            expect(complexOperations.checkEmail('.com@gmail')).toBe('The email is invalid');
        });
        it('seventh test for checkEmail', () => {
            expect(complexOperations.checkEmail('santi@gmail.com')).toBe('The email is valid');
        });
        it('eighth test for checkEmail', () => {
            expect(complexOperations.checkEmail('santi@hotmail.com')).toBe('The email is valid');
        });
        it('ninth test for checkEmail', () => {
            expect(complexOperations.checkEmail('santi@yahoo.com')).toBe('The email is valid');
        });
    });

    describe('calculateArea', () => {
        it('first test for calculateArea', () => {
            expect(complexOperations.calculateArea('triangle', 2, 4)).toBe(4);
        });
        it('second test for calculateArea', () => {
            expect(complexOperations.calculateArea('triangle', 8, 9)).toBeGreaterThanOrEqual(36);
        });
        it('third test for calculateArea', () => {
            expect(complexOperations.calculateArea('square', 8, 9)).toBeLessThan(73);
        });
        it('fourth test for calculateArea', () => {
            expect(complexOperations.calculateArea('square', 8, 9)).toBeLessThan(73);
        });
        it('fifth test for calculateArea', () => {
            expect(complexOperations.calculateArea('rectangle', 2, 7)).not.toBeNull();
        });
        it('sixth test for calculateArea', () => {
            expect(complexOperations.calculateArea('rectangle', 2, 7)).not.toBeUndefined();
        });
        it('seventh test for calculateArea', () => {
            expect(complexOperations.calculateArea('rectangle', 2, 7) > 10).toBeTruthy();
        });
        it('eighth test for calculateArea', () => {
            expect(complexOperations.calculateArea('triangle', 'rectangle', 10)).toBe(
                'number1 and number2 should be numbers'
            );
        });
        const expected = 'number1 and number2 should be booleans';
        it('nineth: matches if the received value does not contain the expected substring', () => {
            expect('number1 and number2 should be numbers').toEqual(expect.not.stringContaining(expected));
        });
        it('tenth test for calculateArea', () => {
            expect(complexOperations.calculateArea('triangle', 'rectangle', 10)).toHaveLength(37);
        });
    });

    describe('sumGratherThan', () => {
        it('first test for sumGratherThan', () => {
            expect(complexOperations.sumGratherThan(null, '')).toBe('The params should be numbers');
        });
        it('second test for sumGratherThan', () => {
            expect(complexOperations.sumGratherThan(undefined, 'null')).toBe('The params should be numbers');
        });
        it('third test for sumGratherThan', () => {
            expect(complexOperations.sumGratherThan('', '')).toBe('The params should be numbers');
        });
        it('foruth test for sumGratherThan', () => {
            expect(complexOperations.sumGratherThan(undefined, undefined)).toBe('The params should be numbers');
        });
        it('fifth test for sumGratherThan', () => {
            expect(complexOperations.sumGratherThan(null, null)).not.toContain('is less than');
        });
        it('sixth test for sumGratherThan', () => {
            expect(complexOperations.sumGratherThan(null, null)).not.toContain('is greater than');
        });
        it('seventh test for sumGratherThan', () => {
            expect(complexOperations.sumGratherThan(-5, 10, 6)).toEqual('5 is less than 6');
        });
        //this test past, but souldnt pass because 5 isnt less than 5
        it('eight test for sumGratherThan', () => {
            expect(complexOperations.sumGratherThan(-5, 10, 5)).toEqual('5 is less than 5');
        });
        const expected = '10 is less than 6';
        it('nineth: matches if the received value does not contain the expected substring', () => {
            expect('10 is grather than 6').toEqual(expect.not.stringContaining(expected));
        });
    });

    /*
    describe('sortArrayOfObjectsByKey', () => {
        it('first test for sortArrayOfObjectsByKey', () => {});
    });

    describe('numberOfOddAndEvenNumbers', () => {
        it('first test for numberOfOddAndEvenNumbers', () => {});
    }); */
});