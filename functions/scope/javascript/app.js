console.log('it works');


// Scope is the restriction of where in your code
// that you can access or use variables

// Block scope local Scope
// global Scope


// let and const are only availible the the block
// that they are declared

// {
  // const item = ' book';
// }
 // console.log(item);
 // }
 // Hoisting, leaks out of the Block

 // in general we want to control our Scope
 // as tightly as possible, so thats why why
 // want to use const and let



 // {
   // var taco = 'taco';
 // }
 // console.log();

// scope flows from the outside in


// {
  // word = 'taco'
// }
// console.log(word);

// const item = 'meatball';

// const setItem = () => {
  // return item;
// }


// console.log(setItem);
// let count = 0
// for (var i = 0; i < 10; i++) {

// }
// console.log('outside');

const checkSquare = (num) => {
  if(Math.sqrt(num) % 1 === 0){
    return true;
  }else {
    return false;
  }
}

const checkToLimit = (limit) => {
  for(let i = 0; i <= limit; i++){
    console.log(i, <--);checkSquare(i);
  }
}

checkToLimit(50);
