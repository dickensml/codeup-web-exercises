/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

// TODOne: fill in your name and email and add some programming languages you know
// to the languages array
// TODOne: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'jay';
const email = 'jay@codeup.com';
const languages = ['html', 'css', 'javascript', 'java', 'spring', 'jquery'];

// name = "javier";

// TODOne: rewrite the object literal using object property shorthand
users.push({
    name,
    email,
    languages
});
console.log(users);
// TODOne: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODOne: rewrite the following using arrow functions
users.forEach(user => emails.push(user.email));
users.forEach(user => names.push(user.name));

// console.log(emails);
// console.log(names);

// TODOne: replace `var` with `let` in the following declaration
let developers = [];
// users.forEach(function(user) {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
    // const name = user.name;
    // const email = user.email;
    // const languages = user.languages;
    const { name, email, languages} = user;

    // TODOne: rewrite the assignment below to use template strings
    developers.push(`${name}'s email is ${email}; ${name} knows ${languages.join(', ')}`);
});
// console.log(developers);

// TODOne: Use `let` for the following variable
let list = '<ul>';

// TODOne: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
for (let developer of developers) {
    list += `<li>${developer}</li>`;
}

// TODOne: rewrite the assignment below to use template strings
// });
list += '</ul>';

console.log(list);