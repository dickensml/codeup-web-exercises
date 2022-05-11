

//Define a function named `isAString` that takes in a value and returns true if the input is a string, or false if the input is not a string.

function isAString(input){
    // if (typeof input === "string"){
    //     return true;
    // } else {
    //     return false;
    // }
    return typeof input === "string";
}

//Define a function named `isNotANumber` that takes in a value and returns true if the input is not a number, or false if the input is a number. This function should consider that numeric strings are not numbers.

function isNotANumber(input){
    if (typeof input !== "number"){
        return true;
    } else {
        return false;
    }
}

//Define a function named `canBeANumber` that takes in a value and returns true if the input is a number or a numeric string, or false if the input is not a number or if it evaluates to NaN when parsed.

function canBeANumber(input){
    return !isNaN(parseFloat(input));
    // if (isNaN(parseFloat(input))){
    //     return false
    // } else {return true}
}

//Define a function named `multiplyByTen` that takes in a value, multiplies it by ten, and returns the result. If the input is not a number and is not a numeric string, it returns false.

function multiplyByTen(input){
    if (!canBeANumber(input)){
        return false;
    } else {
        return input * 10;
    }
}

// Write a function named `randomNumber` that takes in an input and returns a random number between zero and the value of the input.

function randomNumber(input) {
    return (Math.random() * input);
}

// Write a function called `stringLength` that takes in a string and returns the length of the string. If the input is not a string, it should be converted to a string and still return the length of the string.

function stringLength(string){
    return string.toString().length;
}

// Write a function that takes in two strings. The second string should be a single character. The function should return the index of the second input in the first input. If the second input is more than one character or is not in the first input at all, it should return false.

function indexOfCharacter(input1, input2){
    if (input2.length > 1 || input1.indexOf(input2) === -1){
        return false;
    }

    return input1.indexOf(input2);
}

// Write a function that accepts an array of numbers and returns the average.
function average(array) {
    var total = 0;
    // for (var i = 0; i < array.length; i++) {
    //     total += array[i];
    // }
    array.forEach(function(number) {
        total += number;
    })
    return total / array.length;
}

// console.log(average([3, 5, 7, 10, 0]));
// console.log(average([0, 3, 5, 6, 21]));


// Write a function, calculateTotalStudents, that returns the total number of students recorded in the classes array.

let classes = [
    {class: "6th grade history", students: 18},
    {class: "7th grade history", students: 20},
    {class: "8th grade history", students: 22}
];

function calculateTotalStudents(arrayOfObjects){
    var totalStudents = 0;
    for (var i = 0; i < classes.length; i++ ){
        totalStudents += classes[i].students;
    }
    return totalStudents;
}

// Bonus: instead of the total students, return the highest number of students in any class
function findHighestNumber(arrayOfObjects){
    let max = classes[0].students;
    for (var i = 0; i < classes.length; i++){
        if (classes[i].students > max) {
            max = classes[i].students;
        }
    }
    return max;
}

// Write a function called convertToObject that takes in a string that is the name of a class, and a number that is the number of students, and returns an object with the properties `class` and `students`

//convertToObject("Intro to Programming", 20) returns {class: "Intro to Programming", students: 20}

function convertToObject(string, number){
    return {class: string, number: number};
}


var neighborhood1 ={
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 6},
        {name: "HS3", rating: 8}
    ]
}

var neighborhood2 ={
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 8},
        {name: "MS2", rating: 8},
        {name: "HS3", rating: 8}
    ]
}

var neighborhood3 ={
    neighborhood: "Ginormous Ego Estates",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "ES1", rating: 9},
        {name: "MS2", rating: 9},
        {name: "HS3", rating: 9}
    ]
}

// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable if the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.

function desirableNeighborhood(neighborhoodObject){
    var totalRating = 0;
    for (var i = 0; i < neighborhoodObject.schools.length; i++){
        totalRating += neighborhoodObject.schools[i].rating;
    }
    return neighborhoodObject.medianHomePrice < 300000 && neighborhoodObject.crimeRate === "low" && totalRating >= 24;
}









