"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

//Function 1  Define a function named isTrue that takes in any input and returns true if the input provided is exactly equal to true in value and data type.

    function isTrue(input) {
    return input === true;
}
    isTrue;


//Define a function named isFalse that takes in a value and returns a true if and only if the provided input is equal to false in both type and value.

    function isFalse(input1) {
        return input1 === false;
}
    isFalse;


//Define a function named not that takes in any input and returns the boolean opposite of the provided input.

    function not(input2) {
        if (input2 == true) {
            return false;
        } else
            return true;
    }
    not;

//Define a function named addOne that takes in a single input. If the input is a number or a numeric string, return the value plus one.

    function addOne(input3) {
        return parseFloat(input3) + 1;
    }
    addOne;


//Define a function named isEven that takes in a single input. If the input is an even number or a string containing an even number, return true. Any other input should return false for the output.

    function isEven(input4) {
        if (parseFloat(input4) % 2) {
            return true;
        } else
            return false;
    }
    isEven;

//Define a function named isIdentical that takes in two input arguments. If each input is equal both in data type and in value, then return true. If the values are not the same data type or not the same value, return false.



    function isIdentical(input5) {
        if (input5(inputA === inputB)) {
            return true;
        } else
            return false;

    }
    isIdentical;
