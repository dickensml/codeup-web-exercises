(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

  //  var person = {
  //       firstName: 'Michael',
  //       lastName: 'Dickens',
  //       greeting: 'Hello! My name is ',

    //}
       // console.log (person);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    //console.log(person.greeting + person.firstName + ' ' + person.lastName);

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

        //output: name, amount before, discount, final amount
        // identify if amount is > $200
        // function that takes in and does the math
        //var for: discount


    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


        var finalAmount = ('number');

            shoppers.forEach (function (shopper) {
               // console.log(shopper.amount);
                var discount = (shopper.amount * .12);

                if (shopper.amount > 200) {
                    finalAmount = (shopper.amount * .88);
                    return alert(shopper.name + ' spent ' + shopper.amount + ' and received a  discount of ' + discount + '. Their final amount is  ' + finalAmount + '.');
                } else {
                    return alert(shopper.name + ' spent ' + shopper.amount + '. Their final amount is ' + shopper.amount + '.');
                }

        })


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {authorLastName: 'Wallace', authorFirstName: 'William', title: 'A walking guide of London.'},
        {authorLastName: 'Walsh', authorFirstName: 'Joe', title: "Life's been good to me so far."},
        {authorLastName: 'Floyd', authorFirstName: 'Pink', title: 'Sonnets to my Mother.'},
        {authorLastName: 'Young', authorFirstName: 'Angus', title: 'Modern theory of electricity.'},
        {authorLastName: 'Yeat', authorFirstName: 'William Butler', title: 'Walkabout in Ireland.'}
    ];





    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();