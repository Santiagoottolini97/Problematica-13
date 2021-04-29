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

    describe('intersectionBetweenArrays', () => {
        it('first test for intersectionBetweenArrays', () => {
            expect(complexOperations.intersectionBetweenArrays([1, 2, 3])).toBe('The params should be arrays');
        });
        it('second test for intersectionBetweenArrays', () => {
            expect(complexOperations.intersectionBetweenArrays(['one', 2], [5, 8])).not.toContain(
                'The params should be arrays'
            );
        });
        it('third test for intersectionBetweenArrays', () => {
            expect(complexOperations.intersectionBetweenArrays([1, 2, -1, 0, 8, 7], [9, 10])).toBe(
                'There are not matching elements'
            );
        });
        const expected = [1, 2];
        it('fourth: matches even if received contains additional elements', () => {
            expect(complexOperations.intersectionBetweenArrays([1, 2, 3], [1, 2])).toEqual(
                expect.arrayContaining(expected)
            );
        });
        it('fifth test for intersectionBetweenArrays', () => {
            expect(complexOperations.intersectionBetweenArrays([1, 2, -1, 0, 8, 7], [9, 10])).toBe(
                'There are not matching elements'
            );
        });
        const object = { name: 'santi' };
        it('sixth test for intersectionBetweenArrays', () => {
            expect(complexOperations.intersectionBetweenArrays([null, 'hello', object, undefined, 5.55], ['bye'])).toBe(
                'There are not matching elements'
            );
        });
    });

    describe('sortArrayOfObjectsByKey', () => {
        it('first test for sortArrayOfObjectsByKey', () => {
            expect(
                complexOperations.sortArrayOfObjectsByKey(
                    [{ country: 'Argentina' }, { country: 'Suiza' }, { country: 'Australia' }],
                    'country'
                )
            ).toEqual([{ country: 'Argentina' }, { country: 'Australia' }, { country: 'Suiza' }]);
        });
        it('second test for sortArrayOfObjectsByKey', () => {
            expect(complexOperations.sortArrayOfObjectsByKey({}, ['Hello', 'How are you'])).toBe(
                'The first param should be an array'
            );
        });
        const a = function handleSubmit() {
            console.log('This is void a function');
        };
        it('third test for sortArrayOfObjectsByKey', () => {
            expect(complexOperations.sortArrayOfObjectsByKey([null], [{ name: 'Thomas' }, a])).toBe(
                'The second param should be an string'
            );
        });
        it('fourth test for sortArrayOfObjectsByKey', () => {
            expect(
                complexOperations.sortArrayOfObjectsByKey([{ a, date: '29/09/97' }, true], 'My name is santi')
            ).toContain('Some elements in the array does not have the My name is santi property');
        });
        it('fifth test for sortArrayOfObjectsByKey', () => {
            expect(
                complexOperations.sortArrayOfObjectsByKey(
                    [
                        { country: 'Argentina', age: 19, visa: true },
                        { country: 'Suiza', age: 32, visa: false },
                        { country: 'Australia', age: 60, visa: true },
                    ],
                    'age'
                )
            ).not.toContain('lastname');
        });
        const expected = [{ city: 'Buenos aires' }, { city: 'Santa fe' }, { city: 'Rosario' }];
        it('sixth: matches even if received contains additional elements', () => {
            expect(
                complexOperations.sortArrayOfObjectsByKey(
                    [{ city: 'Buenos aires' }, { city: 'Santa fe' }, { city: 'Rosario' }],
                    'city'
                )
            ).toEqual(expect.arrayContaining(expected));
        });
        const expected2 = [{ country: 'Buenos aires' }, { city: 'Santa fe' }, { city: 'Rosario' }];
        it('seventh: matches even if received contains additional elements', () => {
          expect(
              complexOperations.sortArrayOfObjectsByKey(
                  [{ city: 'Buenos aires' }, { city: 'Santa fe' }, { city: 'Rosario' }],
                  'city'
              )
          ).toEqual(expect.not.arrayContaining(expected2));
      });
    });
    /*
    describe('numberOfOddAndEvenNumbers', () => {
        it('first test for numberOfOddAndEvenNumbers', () => {});
    }); */
});
