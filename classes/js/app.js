console.log('working')
// classes are basicly blueprint for an object
// they allow us to make multiple instances of an
// object

// for example, in a game you may have 100 enemies
// and they all are relativly the same

// create an enemy class that is a blueprint for all
// enemies


// defining a class
// creating the blueprint
// always with a capital letter
// for multiple methods, no commas
// constructor method, is always called constructor
// and
// class Person {
//    constructor(name, eyeColor){
//      this.legs = 2;
//      this.arms = 2;
//      this.eyes = eyeColor;
//      this.name = name;
//
//    }
//    greet(otherPerson){
//      console.log('Hi ${otherPerson}!');
//
//    }
//    jump(){
//      console.log('weeee');
//    }
//  }

// insatiating a class
// creating a object from our blueprint

// const bob = new Person('bob', 'blue');
// const joan = new Person('joan', 'green');


//console.log(bob);
// edit the properties of our instances on the fly
// the instance is just for an object
// bob.eyes = 'orange';
// bob['eyes'] = 'red';
// console.log(joan);


// class Pet {
//   constructor(name, eyeColor, sound) {
//   this.animal = 'dog';
//   this.legs = 4;
//   this.ears = 2;
//   this.name = name;
//   this.eyeColor = eyeColor;
//   this.sound = sound;
// }
// petSound(){
//   console.log(this.sound);
// }
// }
//
// const frankie = new Pet ('frankie', 'brown', 'woof woof');
// console.log(frankie);

// class Pet {
// constructor(type, name, age){
//  this.type = type
//   this.name = name
//  this.age = age
//  this.legs = 4
//  }
//  greet(){
//    if(this.type === 'dog'){
//      return 'Woof!'
//  } else if (this.type === 'cat'){
//    return 'Meowww!'
//  } else {
//    return 'Not sure what to say here....'
//  }
//}
// }


// creating a new seprate class
// that inherits all the properties and all
// the methods from the Person class

// super(name, eyeColor);
// this.superPowers = ['flight', 'x-ray vision',]
// class superHero extends Person {
//   fly() {
//     console.log('up up and away!');
//   }
//   jump(){
//     //super is how we refrence the parent classes
//     super.jump();
//     this.fly();
//   }
// }
//  const superman = new superHero('Clark Kent', 'black');
//

class Person {
  constructor(name, eyeColor) {
    this.legs = 2;
    this.arms = 2;
    this.eyes = eyeColor;
    this.name = name;

  }
  greet(otherPerson) {
    console.log('Hi ${otherPerson}!');

  }
  jump() {
    console.log('weeee');
  }
}
}
class Pet {
  this.animal = 'dog';
  this.hairLength = 'short';
}
class Boat {
  this.engine = 'inline'
  this.
}

class Artiest {jhjgh uyftyf ``
  this.instrument = 'guitar';
  this.
}
