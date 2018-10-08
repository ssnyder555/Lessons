console.log('it works');


// this is definging a function

// const printBoo = () => {
  // this block of code will run
  // when the function is
  // excuted or invoked
  // console.log('boo');
// }

// excuting a functions
// invoking or calling a function
// printBoo();


// write a function "printsum" that will console.log
// the result of 10 + 10.

// const printSum = (num1, num2) => {
  // console.log(num1 + num2)
// }

// printSum (10, 10)

// wrong way
// const printSum = () => {
    // console.log(10 + 10);
// }

// const printTriangle = (a) => {
    // for(i = 1; i <= a; i++) {
        // console.log("#".repeat(i));
    // }
// }

// ================================================

// functions is a gereral rule of thumb
// should do one thing and do it really well

// input is called  parmeter

// const checkInputLength = (input) => {
  // were expecting input to be a string
  // if(input.length > 10){
    // console.log('input is greater then ten')
  // } else {
    // console.log('input is too small');
  // }
// };

// clling the function
// with an argument
 // checkInputLength('anything we want');

 // const sayName = (name) => {
   // console.log('hello ${name}');

 // }
 sayName('Jerry');
 sayName('Kramer');

 when you start repeating yourself its
 an indaction that you could use a functions

repeat yourself with minor differences
// console.log('Hello')

// write a function printParameter then takes parameter input.
// the function should simply consol.log the input parameter.
// invoke the function


// const printParameter = (input) => {
    // console.log(input);
// };
// printParameter("lol");

// const minusOne = (num) => {
    // console.log(num - 1);
// };

// minusOne(8675309);

// const getLastElement = (array) => {
    // console.log(array[array.length - 1]);
// };

// getLastElement([1, 4, "sup", "nope", "yep"]);


// const multipy = (num1, num2) => {
    //console.log(num1 * num2);
// }
 // console.log(multipy(4,5));

// to give a function of vlue
// we must return the value of the function
// remember console.log is for you to see what is
// going, it doesn't affect your code

// const divide = (a, b) => {
  // return a / b;
// }
 // divide(9,3);

 // const divisionResult = divide(9, 3);

 // console.log(divisionResult);

 // we want to write a function to
 // see if a string is a palidrome

 const isPalidrome = (word) => {
    console.log(word.split(""))
}
 }
