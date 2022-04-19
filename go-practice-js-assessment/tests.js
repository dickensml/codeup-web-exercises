"use strict";

/** 
 * Tests for the following functions. See README.md for more detail.
 * isBoolean
 * isNegative
 * isPositive
 * isString
 * isArray
 * isNotString
 * isNotANumber
 * isZero
 * isEmptyString
 * upperCase
 */

const randomBoolean = Boolean(Math.round(Math.random()));
const randomPositiveNumber = Math.ceil(Math.random() * 100);
const randomNegativeNumber = Math.ceil(Math.random() * 100) * -1;
const exampleObject = { "firstName": "Grace", "lastName": "Hopper"};
const exampleArray = ['Grace Hopper', 'Ada Lovelace', 'Margaret Hamilton', 'Sandi Metz'];
const exampleString = "Grace Hopper";
const randomIndex = Math.floor(Math.random() * exampleArray.length);
const randomString = exampleArray[randomIndex];

describe("isBoolean", function() {
    it('should be a defined function', function() {
        expect(typeof isBoolean).toBe('function');
    });
    it('should return a boolean value', function() {
       expect(typeof isBoolean(true)).toBe('boolean');
       expect(typeof isBoolean("Bob")).toBe('boolean');
    });
    it('should return true when passed the boolean true', function() {
       expect(isBoolean(true)).toBe(true);
    });
    it('should return true when passed the boolean false', function() {
        expect(isBoolean(false)).toBe(true);
    });
    it('should return false when passed the number ' + randomPositiveNumber, function() {
       expect(isBoolean(randomPositiveNumber)).toBe(false);
    });
    it('should return false when passed the number ' + randomNegativeNumber, function() {
       expect(isBoolean(randomNegativeNumber)).toBe(false);
    });
    it('should return false when passed the number 0', function() {
        expect(isBoolean(0)).toBe(false);
    });
    it('should return false when passed no inputs (undefined) ', function() {
        expect(isBoolean()).toBe(false);
    });
    it('should return false when passed null', function() {
        expect(isBoolean(null)).toBe(false);
    });
    it('should return false when passed an array', function() {
        expect(isBoolean(exampleArray)).toBe(false);
    });
    it('should return false when passed a string', function() {
        expect(isBoolean(exampleString)).toBe(false);
    });
    it('should return false when passed a string', function() {
        expect(isBoolean(randomString)).toBe(false);
    });
    it('should return false when passed an object', function() {
        expect(isBoolean(exampleObject)).toBe(false);
    });
});

describe('isString', function() {
    it('should be a defined function', function() {
        expect(typeof isString).toBe('function');
    });
    it('should return a boolean', function() {
        expect(typeof isString("Banana")).toBe('boolean');
        expect(typeof isString(45)).toBe('boolean');
    });
    it('should return true when the input passed is the string ' + exampleString, function() {
        expect(isString(exampleString)).toBe(true);
    });
    it('should return true when the input passed is the numeric string "123".', function() {
        expect(isString("123")).toBe(true);
    });
    it('should return true when the input is the numeric string "' + randomPositiveNumber + '".', function() {
        expect(isString(String(randomPositiveNumber))).toBe(true);
    });
    it('should return true when the input is the numeric string "' + randomNegativeNumber + '".', function() {
        expect(isString(String(randomNegativeNumber))).toBe(true);
    });
    it('should return true when passed the string "' + randomString + '".', function() {
        expect(isString(randomString)).toBe(true);
    });
    it('should return false when passed no input', function() {
        expect(isString()).toBe(false);
    });
    it('should return false when passed boolean inputs', function() {
        expect(isString(true)).toBe(false);
        expect(isString(false)).toBe(false);
    });
    it('should return false when passed a number', function() {
        expect(isString(randomPositiveNumber)).toBe(false);
        expect(isString(randomNegativeNumber)).toBe(false);
    });
    it('should return false when passed an array', function() {
        expect(isString(exampleArray)).toBe(false);
    });
    it('should return false when passed an object', function() {
        expect(isString(exampleObject)).toBe(false);
    });
    it('should return false when passed null', function() {
        expect(isString(null)).toBe(false);
    });
});

describe('isNotString', function() {
    it('should be a defined function', function() {
        expect(typeof isNotString).toBe('function');
    });
    it('should return a boolean', function() {
        expect(typeof isNotString("Banana")).toBe('boolean');
        expect(typeof isNotString(45)).toBe('boolean');
    });
    it('should return false when the input passed is the string ' + exampleString, function() {
        expect(isNotString(exampleString)).toBe(false);
    });
    it('should return false when the input passed is the numeric string "123".', function() {
        expect(isNotString("123")).toBe(false);
    });
    it('should return false when the input is the numeric string "' + randomPositiveNumber + '".', function() {
        expect(isNotString(String(randomPositiveNumber))).toBe(false);
    });
    it('should return false when the input is the numeric string "' + randomNegativeNumber + '".', function() {
        expect(isNotString(String(randomNegativeNumber))).toBe(false);
    });
    it('should return false when passed the string "' + randomString + '".', function() {
        expect(isNotString(randomString)).toBe(false);
    });
    it('should return true when passed no input', function() {
        expect(isNotString()).toBe(true);
    });
    it('should return true when passed boolean inputs', function() {
        expect(isNotString(true)).toBe(true);
        expect(isNotString(false)).toBe(true);
    });
    it('should return true when passed a number', function() {
        expect(isNotString(randomPositiveNumber)).toBe(true);
        expect(isNotString(randomNegativeNumber)).toBe(true);
    });
    it('should return true when passed an array', function() {
        expect(isNotString(exampleArray)).toBe(true);
    });
    it('should return true when passed an object', function() {
        expect(isNotString(exampleObject)).toBe(true);
    });
    it('should return true when passed null', function() {
        expect(isNotString(null)).toBe(true);
    });
});

describe('isNotANumber', function() {
    it('should be a defined function', function() {
        expect(typeof isNotANumber).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isNotANumber(4)).toBe('boolean');
        expect(typeof isNotANumber("Bob")).toBe('boolean');
    });
    it('should return false when passed 0 as input', function() {
        expect(isNotANumber(0)).toBe(false);
    });
    it('should return false when passed -5 as input', function() {
        expect(isNotANumber(-5)).toBe(false);
    });
    it('should return false when passed ' + randomNegativeNumber, function() {
        expect(isNotANumber(randomNegativeNumber)).toBe(false);
    });
    it('should return false when passed ' + randomPositiveNumber, function() {
        expect(isNotANumber(randomPositiveNumber)).toBe(false);
    });
    it('should return false when passed Infinity, since infinity is considered a number.', function() {
        expect(isNotANumber(Infinity)).toBe(false);
    });
    it('should return true when passed the boolean ' + randomBoolean, function() {
        expect(isNotANumber(randomBoolean)).toBe(true);
    });
    it('should return true when passed the string "Grace Hopper"', function() {
        expect(isNotANumber(exampleString)).toBe(true);
    });
    it('should return true when passed null as the input', function() {
        expect(isNotANumber(null)).toBe(true);
    });
    it('should return true when passed an array', function() {
        expect(isNotANumber(exampleArray)).toBe(true);
    });
    it('should return true when passed an object', function() {
        expect(isNotANumber(exampleObject)).toBe(true);
    });
    it('should return true when no input is passed in as an argument', function() {
        expect(isNotANumber()).toBe(true);
    });
});

describe('isEmptyString', function(){
    it('should be a defined function.', function() {
        expect(typeof isEmptyString).toBe('function');
    });
    it('should return a boolean value.', function() {
        expect(typeof isEmptyString("")).toBe('boolean');
        expect(typeof isEmptyString(1)).toBe('boolean');
    });
    it('should return true when passed the string "".', function() {
        expect(isEmptyString("")).toBe(true);
    });
    it('should return false when passed the string "' + randomString + '".', function() {
        expect(isEmptyString(randomString)).toBe(false);
    });
    it('should return false when passed the string "Jim Henson".', function () {
        expect(isEmptyString('Jim Henson')).toBe(false);
    });
    it('should return false when passed the string "  Bill     & Ted   ".', function () {
        expect(isEmptyString('  Bill     & Ted   ')).toBe(false);
    });
    it('should return false when passed the string "   ".', function () {
        expect(isEmptyString('   ')).toBe(false);
    });
    it('should return false when passed the number 0.', function() {
        expect(isEmptyString(0)).toBe(false);
    });
    it('should return false when passed the number '+ randomPositiveNumber +'.', function() {
        expect(isEmptyString(randomPositiveNumber)).toBe(false);
    });
    it('should return false when passed the number '+ randomNegativeNumber +'.', function() {
        expect(isEmptyString(randomNegativeNumber)).toBe(false);
    });
    it('should return false when passed a boolean.', function() {
        expect(isEmptyString(true)).toBe(false);
        expect(isEmptyString(false)).toBe(false);
    });
    it('should return false when passed an array.', function() {
        expect(isEmptyString(exampleArray)).toBe(false);
    });
    it("should return false when called without an argument provided.", function () {
        expect(isEmptyString()).toBe(false);
    })
});

describe('isNegative', function() {
    it('should be a defined function', function() {
        expect(typeof isNegative).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isNegative(-12)).toBe('boolean');
        expect(typeof isNegative(12)).toBe('boolean');
    });
    it('return false for 0', function() {
        expect(isNegative(0)).toBe(false);
    });
    it('returns true for -1', function() {
        expect(isNegative(-1)).toBe(true);
    });
    it('returns false for 6', function() {
        expect(isNegative(6)).toBe(false);
    });
    it('returns false for 123.456', function() {
        expect(isNegative(123.456)).toBe(false);
    });
    it('returns true for -3.14159', function() {
        expect(isNegative(-3.14159)).toBe(true);
    });
    it('returns true for ' + randomNegativeNumber, function() {
        expect(isNegative(randomNegativeNumber)).toBe(true);
    });
    it('returns true for the string number "-4".', function() {
        expect(isNegative("-4")).toBe(true);
    });
    it('returns false for ' + randomPositiveNumber , function() {
        expect(isNegative(randomPositiveNumber)).toBe(false);
    });
    it('returns false for the string number "23".', function() {
        expect(isNegative(23)).toBe(false);
    });
    it('returns false for non-number strings such as "Grace Hopper"', function() {
        expect(isNegative("Grace Hopper")).toBe(false);
    });
    it('returns false when no argument is provided as input to the function', function() {
        expect(isNegative()).toBe(false);
    });
    it('should return false when passed an array', function() {
        expect(isNegative(exampleArray)).toBe(false);
    });
    it('should return false when passed the boolean ' + randomBoolean, function() {
        expect(isNegative(randomBoolean)).toBe(false);
    });
    it('should return false when passed a string', function() {
        expect(isNegative(randomString)).toBe(false);
    });
});

describe('isPositive', function() {
    it('should be a defined function', function(){
        expect(typeof isPositive).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isPositive(randomPositiveNumber)).toBe('boolean');
        expect(typeof isPositive(randomNegativeNumber)).toBe('boolean');
    });
    it('should return true for 1', function() {
        expect(isPositive(1)).toBe(true);
    });
    it('should return true for ' + randomPositiveNumber, function() {
        expect(isPositive(randomPositiveNumber)).toBe(true);
    });
    it('shound return true for the numeric string "12".', function() {
        expect(isPositive("12")).toBe(true);
    });
    it('should return false for 0', function() {
        expect(isPositive(0)).toBe(false);
    });
    it('should return false for ' + randomNegativeNumber, function() {
        expect(isPositive(randomNegativeNumber)).toBe(false);
    });
    it('returns false for non-number strings such as "Grace Hopper"', function() {
        expect(isPositive("Grace Hopper")).toBe(false);
    });
    it('returns false when no argument is provided as input to the function', function() {
        expect(isPositive()).toBe(false);
    });
    it('returns false when passed an array', function() {
        expect(isPositive(exampleArray)).toBe(false);
    });
    it('returns false when passed an object', function() {
        expect(isPositive(exampleObject)).toBe(false);
    });
    it('returns false when passed null', function() {
        expect(isPositive(null)).toBe(false);
    });
    it('returns false when passed the boolean value ' + randomBoolean, function() {
        expect(isPositive(false)).toBe(false);
    });
});

describe('isZero', function(){
    it('should be a defined function', function() {
        expect(typeof isZero).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isZero(0)).toBe('boolean');
        expect(typeof isZero(1)).toBe('boolean');
    });
    it('should return true when passed the number 0', function() {
        expect(isZero(0)).toBe(true);
    });
    it('returns false for -1', function() {
        expect(isZero(-1)).toBe(false);
    });
    it('returns false for 6', function() {
        expect(isZero(6)).toBe(false);
    });
    it('returns false for 123.456', function() {
        expect(isZero(123.456)).toBe(false);
    });
    it('returns false for -3.14159', function() {
        expect(isZero(-3.14159)).toBe(false);
    });
    it('returns false for ' + randomNegativeNumber, function() {
        expect(isZero(randomNegativeNumber)).toBe(false);
    });
    it('returns true for the string number "0".', function() {
        expect(isZero("0")).toBe(true);
    });
    it('returns false for ' + randomPositiveNumber , function() {
        expect(isZero(randomPositiveNumber)).toBe(false);
    });
    it('returns false for the string number "23".', function() {
        expect(isZero('23')).toBe(false);
    });
    it('returns false for non-number strings such as "Grace Hopper"', function() {
        expect(isZero("Grace Hopper")).toBe(false);
    });
    it('returns false when no argument is provided as input to the function', function() {
        expect(isZero()).toBe(false);
    });
    it('should return false when passed an array', function() {
        expect(isZero(exampleArray)).toBe(false);
    });
    it('should return false when passed a string', function() {
        expect(isZero(randomString)).toBe(false);
    });
});

describe('isArray', function() {
    it('should be a defined function', function() {
        expect(typeof isArray).toBe('function');
    });
    it('should return a boolean value', function() {
        expect(typeof isArray([1, 2, 3])).toBe('boolean');
        expect(typeof isArray(1)).toBe('boolean');
    });
    it('should return true when passed the array [1, 2, 3]', function() {
        expect(isArray([1, 2, 3])).toBe(true);
    });
    it('should return true when passed an array of strings', function() {
        expect(isArray(exampleArray)).toBe(true);
    });
    it('should return true when passed an array of numbers', function() {
        expect(isArray([randomPositiveNumber, randomNegativeNumber])).toBe(true);
    });
    it('should return false when passed an object', function() {
        expect(isArray(exampleObject)).toBe(false);
    });
    it('should return false when passed a string', function() {
        expect(isArray(exampleString)).toBe(false);
    });
    it('should return false when passed a boolean', function() {
        expect(isArray(randomBoolean)).toBe(false);
    });
    it('should return false when passed null', function() {
        expect(isArray(null)).toBe(false);
    });
    it('should return false when passed a number', function() {
        expect(isArray(randomPositiveNumber)).toBe(false);
    });
    it('should return false when called with no inputs', function() {
        expect(isArray()).toBe(false);
    });
});

describe('upperCase', function() {
    it('should be a defined function', function() {
        expect(typeof upperCase).toBe('function');
    });
    it("should return 'CODEUP' when passed the string 'Codeup'.", function() {
        expect(upperCase('Codeup')).toBe('CODEUP');
    });
    it("should return 'JAVASCRIPT' when passed the string 'JavaScript'.", function() {
        expect(upperCase('JavaScript')).toBe("JAVASCRIPT");
    });
    it("should return '' when passed the empty string ''.", function() {
        expect(upperCase("")).toBe("");
    });
    it("should return 'BOB' when passed the string 'BOB'.", function() {
        expect(upperCase("BOB")).toBe("BOB");
    });
    it("should return false when passed '45'.", function() {
        expect(upperCase('45')).toBe('45');
    });
    it('should return false when passed null', function() {
        expect(upperCase(null)).toBe(false);
    });
    it('should return false when called with no arguments', function() {
        expect(upperCase()).toBe(false);
    });
    it('should return false when passed the array [1, 2, 3]', function() {
        expect(upperCase([1, 2, 3])).toBe(false);
    });
});