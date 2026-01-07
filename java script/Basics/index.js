//logging on console
console.log("hellooo");

// 1. let
console.log(
  "----- variable declaration and definition using 'let' keyword. ----- "
);
let firstName;
firstName = "madhan";
let lastName = "adithya";
console.log("concatenated string : " + firstName + " " + lastName); //concatenation

// 2. var
console.log(
  " ----- variable declaration and definition using 'var' keyword. ----- "
);
var pi = 3.14;
pi = 5;
console.log(pi);

// 3. const
console.log(
  "----- variable declaration and definition using 'const' keyword. ----- "
);
const piConst = 3.14;
// piConst = 5;
console.log(piConst);

console.log("----- primitive data-types. ----- ");

// data-types --> primitive and reference
// primitive:
// 1. String --> let name = 'madhan'
// 2. Number --> let age = 22;
// 3. Boolean --> let isMarried = false;
// 4. Undefined --> let surName; or let surName = undefined; --> note: undefined can be a type of a variable and as well as the value of the variable.
// 5. Null --> let knownStack = null; ---> note: type of a null is 'object';

console.log(
  "----- using 'typeof' keyword we can able to see the type of the variable. ----- "
);

let studentName = "madhan";
let studentAge = 22;
let isGraduated = true;
let isPlaced = undefined;
let offersInHand = null;

console.log(typeof studentName);
console.log(typeof studentAge);
console.log(typeof isGraduated);
console.log(typeof isPlaced);
console.log(typeof offersInHand);

console.log("----- dynamic typing. ----- ");
// dynamic typing - datatype will change from one to another in run-time,
//  this is because Java-script is an dynamic language. JS is not an static language
let votingAge = 18;
console.log(typeof votingAge);
votingAge = "eighteen";
console.log(typeof votingAge);

console.log(
  "----- there is no concept of floating point numbers in JS, all numbers are the type of 'number'. ----- "
);
let mark = 90;
console.log(typeof mark);
mark = 92.5;
console.log(typeof mark);

console.log("----- reference data-types. ----- ");
//reference data-type - objects, array, functions.

console.log("----- 1. Object ----- ");
let person = {
  name: "madhan",
  age: 22,
  isGraduated: true,
};
console.log(typeof person);

// Dot Notation
console.log("Before Change : " + person.name);
person.name = "adithya";
console.log("After Change : " + person.name);

// Bracket Notation
console.log("Before Change : " + person["age"]);
person["age"] = 25;
console.log("After Change : " + person["age"]);

//bracket notations will be more useful when the variable which user targets is unknown inially and known in the run time.
let selection = "isGraduated";
console.log(person[selection]);

console.log("----- 2. Arrays ----- ");

let Genre = ["comedy", "action", "thriller"];

console.log("Before Change : ");
console.log(Genre);
console.log(Genre[2]); //prints thriller

//unlike other programming language JavaScript allows to store different data-types in the same array.
Genre[3] = "Rom-Com"; //String
Genre[4] = 18; //number
Genre[5] = null; //null
Genre[6] = undefined; //undefined
Genre[7] = person; //Object
Genre[8] = true; //Boolean

console.log("Type of the 7th index in the array : " + typeof Genre[7]); // In JavaScript array is an Object.
console.log("After Change : ");
console.log(Genre);

console.log("----- 3. Functions -----");

function greet(name, age) {
  // here "name" is the "PARAMETER" and its value which is passed when the function is called is "ARGUMENT".
  console.log("hi " + name);
  console.log(name + "'s age is : " + age);
}
greet("madhan"); // here the value 'madhan adithya' which is passed to the function's parameter is the "ARGUMENT"
greet("adithya", 22);

//A function can perform an task or calculate something and its can return it.
function square(number) {
  return number * number;
}
console.log(square(5)); //here we are calling 2 functions - 1. log() and 2. square().

console.log("----- Arithmatic operators ----- ");

let a = 4;
let b = 2;
console.log("Addition operator : " + (a + b));
console.log("Subraction operator : " + (a - b));
console.log("multiplication operator : " + a * b);
console.log("division operator : " + a / b);
console.log("modulus operator : " + (a % b));
console.log("exponential operator (a power b) " + a ** b);

console.log("----- Assignment operators ----- ");

a += 4; // a = a + 4;
b *= 2; // b = b * 2;

console.log("'A' value is : " + a + " and " + "'B' value is : " + b);
