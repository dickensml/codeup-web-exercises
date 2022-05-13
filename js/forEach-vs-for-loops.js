"use strict";

let grades = [90, 95, 73, 60]

function forEachFindAverage(passInParameter) {
    let total = 0;
    passInParameter.forEach(element => {
        console.log('forEach element is', element)
        total = element + total
        console.log('forEach total is', total)
    })
    return total / passInParameter.length;

}

console.log('forEachFindAverage is', forEachFindAverage(grades))

/************************************/

function highestForEach(passInParameter) {
    let max = 0;
    passInParameter.forEach(element => {
        console.log('element is', element)
        if (element > max) {
            max = element
            console.log('max is', max)
        }
    })
    return max;
}

console.log('HighestForEach is', highestForEach(grades))

/************************************/

function findAverage(passInParameter) {
    let total = 0;
    for (var i = 0; i < passInParameter.length; i++) {
        total = passInParameter[i] + total
    }
    return total / passInParameter.length;
}

console.log('Average is', findAverage(grades))

/************************************/

function highest(passInParameter) {
    let max = 0;
    for (var i = 0; i < passInParameter.length; i++) {
        if (passInParameter[i] > max) {
            max = passInParameter[i]
        }
    }
    return max;
}

console.log('Highest is', highest(grades))

/************************************/

function lowest(passInParameter) {
    let lowNum = passInParameter[0];
    for (var i = 0; i < passInParameter.length; i++) {
        if (passInParameter[i] < lowNum) {
            lowNum = passInParameter[i]
        }
    }
    return lowNum;
}
console.log('Lowest is', lowest(grades))