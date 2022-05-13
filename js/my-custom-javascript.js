"use strict";
"use strict";
$(document).ready(function() {
   // jQuery - Select element with ID of 'pageLink' and set innerHTML using html() method

   // ID Selector
   $('#pageLink').html("<h1>Link to Somewhere</h1>");

   // Vanilla JS way
   // document.getElementById("pageLink").innerHTML = "<h1>Link to Somewhere</h1>";

   // Class Selector
   // returns an array of elements
   console.log($('.list-item'));
   // $('.list-item')[0].innerHTML = "hello";


   // Element Selector

   // If you want to change more than one property, you can pass an object with key-value pairs (property, value)

   // $('li').css({
   //     'background-color': 'hotpink',
   //     'border-bottom': '1px solid black',
   // })
   $('li').css('background-color', 'rebeccapurple');

   // Selecting Multiple Elements -> returns array of element nodes
   $('h1, #pageLink, #list').css('color', 'forestgreen')

   // All Selector -> select every element on the page
   $('*').css('border', '2px dotted black')

});