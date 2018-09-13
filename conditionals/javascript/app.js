console.log('js works');

// Bang operator or not operator !
let toggle = true;
console.log('this is togle, toggle');

toggle = !toggle;

console.log('this is toggle now', toggle);

// all values in javascript have an implicit
//"trouthiness", they can be evaluated
//as true or false

//all of these are falsey value
//false
//0
//""
//NaN
//null
//undefined


console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(NaN));

//if(bollean expression)

// Equality operators

// ==, !=, ===, !==

// === (checks value and datatype)
// == (does not check datatype)

// we want to try to stick with
// "===" because we want to try to
// to make sure we know what datatype
// we are working with

// Comparison operators
// implicity conver strings to numbers
// <, >, <=, >=

// 12 >= "12"
// => true

// "A" > "a"
// => false

// "b" > "a"
// => true

// "z" > "abc"
// => true

// logical opertors



// && checks to see if both conditions are true

// if(true && 1){
// }

//  || checks to see if either statement is true
// as soon as it finds a true value it evaluates
// so true

 // if(true || false)

 // const input = 'kermit';

 // if(input === 'kermit'){
   // console.log("you're allowed in kermit");
 // } else {
   // console.log("not allowed");
 // }

//const number = 9;

//if(number % 2 === 0){
  //console.log('this number is even');
//}else {
  //console.log('this is an odd number')
//}
