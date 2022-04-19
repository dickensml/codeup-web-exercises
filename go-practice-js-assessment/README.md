# JavaScript Basics Assessment

## Core competencies assessed

- Reading and following directions
- Producing solutions that match the problem specification
- Using Git and working with GitHub
    - Cloning a git repository from GitHub
    - Creating your own branch
    - Committing and pushing work to a new branch on GitHub

- Programing fundamentals in JavaScript
    - Working with values, variables, and data types
    - Using assignment and comparision operators
    - Working with JS internal functions to make decisions and perform actions.
    - Writing functions that take in inputs, process, and return outputs.
    

## Instructions

0. *Carefully* read *all* the instructions and problems before beginning your work.

1. Clone this repository to your local projects directory. If you're using IntelliJ, go to File->New->Project From Version Control->GitHub and then paste the clone address of this repo. The clone address of the repo is found by clicking the green "Clone or download" button on the repo's page.

1. Create a branch named `firstName-lastLastname` where `firstName` is your first name and `lastName` is your last name. In IntelliJ, go to VCS, then Git, then Branches, and click "+ New Branch" and name it accordingly.
     
1. Write your solutions to the problems presented below inside `solutions.js`.

1. Read the Testing instructions below.

1. Add, commit often (preferably every time you finish a problem), and only push your firstName-lastName branch to GitHub when an instructor tells you to.

## Problems

1. Define a function named `isBoolean` that takes in a value and returns a boolean if the argument provided is a boolean value or not.
        
        isBoolean(true)             // true
        isBoolean(false)            // true
        isBoolean(0)                // false
        isBoolean(null)             // false
        isBoolean("")               // false
        isBoolean("kwiw")           // false
        isBoolean([1, 2])           // false

1. Define a function named `isString` that takes in a value as an input and returns a boolean if the input provided is a string or not. Numeric strings will count as strings and should return true.
        
        isString("Hello")           // true
        isString("Codeup")          // true
        isString("123")             // true
        isString(4)                 // false
        isString(true)              // false
        isString([1, 2, 3])         // false
        isString()                  // false
        isString(null)              // false
      
1. Define a function named `isNotString` that accepts an input and returns `true` or `false` based on whether an input is not a string. Numeric strings will count as strings and should return `false`.
        
        isNotString(4)                 // true
        isNotString(true)              // true
        isNotString([1, 2, 3])         // true
        isNotString()                  // true
        isNotString(null)              // true
        isNotString("Hello")           // false
        isNotString("Codeup")          // false
        isNotString("123")             // false
       
1. Define a function named `isEmptyString` that will return `true` when passed an argument with the value of "", i.e. an empty string. All other arguments should return false.
       
        isEmptyString("")                // true
        isEmptyString(" ")               // false
        isEmptyString("Hello")           // false
        isEmptyString("Codeup")          // false
        isEmptyString("123")             // false
        isEmptyString(true)              // false
        isEmptyString([1, 2, 3])         // false
        isEmptyString(null)              // false
        isEmptyString()                  // false
 
 1. Define a function named `isNotANumber` that accepts an input and returns `true` or `false` based on whether an input is a non-numeric value or not. Numbers as strings are not a number and should return true.
 
         isNotANumber("")               // true
         isNotANumber(true)             // true
         isNotANumber("Bob")            // true
         isNotANumber([1,2,3])          // true
         isNotANumber("42")             // true
         isNotANumber(23)               // false
         isNotANumber(3.141)            // false

1. Define a function named `isNegative` that accepts a number and returns `true` or `false` based on whether the input is less than zero.
        
        isNegative(-1)              // true
        isNegative(-5)              // true
        isNegative("-3")            // true
        isNegative(0)               // false
        isNegative(6)               // false
        isNegative("10")            // false
        isNegative(true)            // false
        isNegative(false)           // false
        isNegative("Bob")           // false
        isNegative([-1, 2, 3])      // false
        isNegative(null)            // false

1. Define a function named `isPositive` that accepts an input and returns `true` or `false` based on whether the input is above zero. Any non-numeric input should return false.

        isPositive(1)               // true
        isPositive("6")             // true
        isPositive(3.141)           // true
        isPositive(-1)              // false
        isPositive(-5)              // false
        isPositive("-4")            // false
        isPositive(0)               // false
        isPositive("Bob")           // false
        isPositive(true)            // false

1. Define a function named `isZero` that will return `true` when passed an argument of the numeric value `0`, and return `false` for all other arguments.
        
        isZero(0)                 // true
        isZero("0")               // true
        isZero("Hello")           // false
        isZero("Codeup")          // false
        isZero("123")             // false
        isZero(true)              // false
        isZero([1, 2, 3])         // false
        isZero(null)              // false
        isZero()                  // false
              
1. Define a function named `isArray` that takes in an input and returns a boolean whether or not that input is an array or not.
        
        isArray([])                 // true
        isArray([1, 2, 3])          // true
        isArray(['a', 'b'])         // true
        isArray(false)              // false
        isArray(12)                 // false
        isArray("Bob")              // false
        isArray({'some': 'object'}) // false
        isArray(true)               // false
        isArray()                   // false

1. Define a function named `upperCase` that takes in a single input. If the input is not a string, return `false`. If the input is a non-numeric string, then return it with all the letters capitalized. 
        
        upperCase("Codeup")         // "CODEUP"
        upperCase("javascript")     // "JAVASCRIPT"
        uppercase("45")             // "45"
        upperCase(23)               // false
        upperCase(null)             // false
        upperCase([1, 2, 3])        // false
        upperCase(true)             // false
        upperCase()                 // false


## Testing your work w/ automated tests

Open `assessment.html` in your browser. Jasmine will run tests on the code inside `solutions.js`. The first time you load assessment.html, you will see every test failing because `solutions.js` is empty to start. 

The automated tests provide immediate feedback as to whether or not your solutions solve the problems.

- Click on Spec List inside of `assessment.html` to see test results.

- If all the specs for `isNegative` function are green, then the provided solution is correct.

- Make sure that the functions inside `solutions.js` are not wrapped in an IFFE.

## How solutions will be graded

- Your grade is entirely dependent on the completeness of your solutions

- No credit will be given for code that cannot run due to typos or syntax errors.

- No credit will be given for commented out code.

- There are ten questions on the test. Below is an example of how a question appears on the test.<br><kbd><img src="/images/test-question.png" ></kbd>

- Each question counts for 10 points of the final grade.

- For a question to be counted as correct all specs must pass for the question.<br><kbd><img src="/images/correct-answer.png" ></kbd>

- If any of the specs are red for the question then the entire question will be considered incorrect.<br><kbd><img src="/images/incorrect-answer.png" ></kbd>

## Hints
- If you have green tests and notice that everything is now completely red, it means you likely have a syntax error or a type error in your code. Those kinds of errors will keep all the code from executing properly.
- If you have a syntax error, type error, or reference error in a particular solution function, and it's time to commit and push your work, then comment out that function or the line of code with the error so that your other solutions will be appropriately graded.

- Consider this problem: 

> Write a function called `isBoolean` that takes in a value and returns `true` or `false` if the argument provided is a boolean data-type or not.
>
> `isBoolean("Dog")` should return `false` because a string is not a boolean
>
> `isBoolean(false)` should return `true` because only true and false are boolean values.

- When a problem says `return`, it means `return`, not `console.log`.

- When a problem says that a function will take in an input, then it means the function must be defined so that it takes in an argument as its input, rather than relying on variables defined outside the function.

The following example is incorrect because the function does not take in an argument. It's modifying a global variable, and that is not the same as accepting an input as an argument.

```js
var input = "Grace Hopper"
function isBoolean() {
    return typeof input == "boolean";
}
```

This is incorrect because the function doesn't return the output. Functions that do not have an explicit `return` statement return `undefined` by default.

```js
function isBoolean(input) {
    console.log(typeof input == 'boolean');
}
```

Correct solution:

```js
function isBoolean(input) {
    return typeof input == "boolean";
}
```


