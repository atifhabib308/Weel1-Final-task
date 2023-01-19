console.log("hello world");

// user Strict;
"use strict";
x = 3.14;
console.log(x);

// variables
//let , const
let message;
message = 'hello world';
console.log(message, "from let variable");
//const
const myBirthday = '24.02.1999'
// myBirthday = 'atif'
console.log(myBirthday)
let name = "Ilya";

console.log( `hello ${1}` ); // ?
console.log( `hello ${"name"}` ); // ?
console.log( `hello ${name}` ); // ?

// type conversions
let str = "123";
console.log(typeof str); // string

let num = Number(str); // becomes a number 123

console.log(typeof num); 

// Conditional Operator '?'
let accessAllowed;
let age = 12;
accessAllowed = (age > 18) ? true : false;
console.log(accessAllowed)

let age2 = 21;

let message2 = (age2 < 3) ? 'Hi, baby!' :
  (age2 < 18) ? 'Hello!' :
  (age2 < 100) ? 'Greetings!' :
  'What an unusual age!';

console.log( message2 );