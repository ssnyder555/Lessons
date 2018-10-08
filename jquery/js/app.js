console.log('working');

// the DOM -Document object model

// The DOM is the programing innerface for html and xml docs
// it turns those documents into an object

// Vanills JS,
// when we are using plan ol javascript
// to interact with the DOM

// create an element then put it on the page

const div = document.createElement('div');

// next we want to put some text in the div
  div.innerText = 'all I can be is me, whoever that is';


// we want to put it on the body
// 1. grab the body
    const body = document.querySelector('body');
// append the div we created to the body,
// so it shows up on the div
      body.appendChild(div);

// jQuery - the motto of Jquery is write less, do more
// jQuery is a libary of methods to make DOM
// manipulation much easier and less cumbersome


// The Basic syntax for jquery

// // css selector
// $('body')
// // this is selecting the element myDiv
// $('#myDiv')
// // selecting all the elements with the dog class
// $('.dogs')
// //select all the p tags that belong to some class
// $)'p.someClass'

//
// $('#myDiv').text('hello world');
//
// // create HTML on the fly, html method is
// //changing the html inside of the body
//
// // in any jQuery method we can create elements on the fly
// $('body').html('<span>Goodbye World</span>');

// saving jQuery elements we usually
// pretend the variab with a dollar sign
// good idea to save variables
// because the browser has less work to do {

// } while (true);
// const $body = $('body');

// const $section = $('<section/>').text('this is the section')

// we decided we want to add the $ection to the $body

// $body.append($section);

$('ul').prepend('<li>lab</li>');
//shepard ant the end of the list
$('ul').append('<li>shepard</li>');

//remove golden from list
$('li').filter(':contains("Golden")').remove();

//creating an h1


const $greeting = $('<h1/>').text('My Favorite Dogs')

$('section').prepend($greeting);

// function to create random rgb
//
// const randRBG = () => {
//   return (
//     Math.floor(Math.random() * 256),
//     Math.floor(Math.random() * 256),
//     Math.floor(Math.random() * 256),
//           );
//
// }
//
//  $('body').css('backgroundColor', 'rgb(40, 56, 0)');

// event listiners

// every kind of interactivity in tyhe browser
// is an event

//types of events
//click
//onKeyPress
// scrolling
// museleave
// mouseenter

$('#myBtn').on('click', () => {
  // after a click ha occured, the anoymnous function
  // here, is invoked, this is a callback function
  console.log("button is working");
});
aeqs4aae4swzq
