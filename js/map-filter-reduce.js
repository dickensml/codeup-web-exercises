"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// 2.  Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

// let under50 = products.filter(products => products.price < 50);

let langArr = users.filter(user => user.languages.length >= 3);

console.log("Users lang: ",langArr);

// 3. Use .map to create an array of strings where each element is a user's email address

let userEmailArr =  users.map(user => user.email);
console.log("emeils: ", userEmailArr);

//  4.  Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average

const yearsExp = users.reduce((bucket, currentValue) => {
    console.log("bucket, currentValue: ", bucket, currentValue) ;
    return bucket + currentValue.yearsOfExperience
}, 0);
console.log("Total Years of Experience: ", yearsExp);

const avgYears = yearsExp / users.length;
console.log("Average Years: ", avgYears)

//  5.  Use .reduce to get the longest email from the list of users.





// 6.  Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const usersNames = users.reduce((bucket, currentValue))


// Bonus:  Use .reduce to get the unique list of languages from the list of users.



