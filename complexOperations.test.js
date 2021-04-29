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
            expect(complexOperations.checkEmail('test@.com')).toBe('The email is invalid');
        });
        it('fourth test for checkEmail', () => {
            expect(complexOperations.checkEmail('test@radiumrocket.com')).toBe('The email is valid');
        });
        it('fifth test for checkEmail', () => {
            expect(complexOperations.checkEmail('test@radiumrocket.com')).not.toBe('The email is invalid');
        });
        it('sixth test for checkEmail', () => {
            expect(complexOperations.checkEmail('.com@gmail')).toBe('The email is invalid');
        });
        it('seventh test for checkEmail', () => {
            expect(complexOperations.checkEmail('test@gmail.com')).toBe('The email is valid');
        });
        it('eighth test for checkEmail', () => {
            expect(complexOperations.checkEmail('test@hotmail.com')).toBe('The email is valid');
        });
        it('ninth test for checkEmail', () => {
            expect(complexOperations.checkEmail('test@yahoo.com')).toBe('The email is valid');
        });
        /* 
     it('seventh test for checkEmail', () => {
      expect(complexOperations.checkEmail("test@gmal.cm")).toBe("The email is invalid");;
    });
    it('sixth test for checkEmail', () => {
      expect(complexOperations.checkEmail("test@gmail.cm")).toBe("The email is invalid");;
    }); */
    });

    /* describe('calculateArea', () => {
    it('first test for calculateArea', () => {

    });
  });

  describe('sumGratherThan', () => {
    it('first test for sumGratherThan', () => {

    });
  });

  describe('intersectionBetweenArrays', () => {
    it('first test for intersectionBetweenArrays', () => {

    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('first test for sortArrayOfObjectsByKey', () => {

    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('first test for numberOfOddAndEvenNumbers', () => {
      
    }); 
  });*/
});
