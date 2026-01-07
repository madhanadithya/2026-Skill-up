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

console.log("----- Increment operator ----- ");

console.log(a++); //post increment : means, if A is 8 then it will prints 8 first and then before going into next line it increments the A value to 9
console.log(a);
console.log(++a); //pre increment : means, if A is 9 then it will increments the A first and then prints it.

console.log("----- Decrement operator ----- ");

console.log(a--); //post decrement : means, if A is 10 then it will prints 10 first and then before going into next line it decrements the A value to 9
console.log(a);
console.log(--a); //pre decrement : means, if A is 9 then it will decrements the A first and then prints it.

console.log("----- Comparision operator ----- ");

a = 10;
b = 5;

console.log(a < b); //less than
console.log(a <= b); // less than or equal to
console.log(a > b); //greater than
console.log(a >= b); //greater than or equal to

console.log(1 === 1); //strict equality (looks for 'type + value')
console.log("1" === 1); //strict equality (looks for 'type + value')
console.log(1 !== 2); //strict not equal (looks for 'type + value')
console.log("1" !== 1); //strict not equal (looks for 'type + value')

//lose comparison operators who look into the types. it cares onoy about the value. if there is different types of values then it will convert the second value into the type of the first variable.
console.log(1 == 1); //lose (looks for just 'value')
console.log("1" == 1); //lose (looks for just 'value')
console.log(1 != 2); //lose not equal (looks for jus 'value')
console.log("1" != 1); //lose not equal (looks for jus 'value')

console.log(true == 1); // different types of values to check the loose comparison operator ( == ).
console.log(false == 0);

console.log("----- Logical operator with Boolean ----- ");
let income = 50000;
let creditScore = 800;

console.log("----- logical AND -----");
let eligible = income > 30000 && creditScore >= 750;
console.log("eligible : " + eligible);
let applicationRefused = !eligible;
console.log("application refused : " + applicationRefused);

console.log("----- logical OR -----");
eligible = income > 30000 || creditScore >= 750;
console.log("eligible : " + eligible);
applicationRefused = !eligible;
console.log("application refused : " + applicationRefused);

console.log("----- Logical operator with Non-Boolean ----- ");

//we have a concept called 'truthy' and 'falsy' values in the javascript.
// eg: falsy is not exactly same as the boolean 'false'.

// 'falsy' values ---> null, undefined, NaN, 0, '' (empty string), false.
// 'truthy' values ---> anything which is not 'falsy' is 'truthy'.

console.log(false || "madhan adithya"); //it will print 'madhan adithya' because the value "madhan adithya" in the expression is a non-falsy value so it is truthy.

//short-circuit :
console.log(false || 1 || "deva"); //now it will print just "1" because whenever the logical OR finds a true statement it stop executing it and return it even if there is 100 operands cause OR operator will satisfied even if we have only one true statement. so thats why the 'deva' is not printed.

//real world example

let userColor = "red";
let defaultColor = "blue";

let selectedColor = userColor || defaultColor;
console.log(selectedColor); //prints 'red'

userColor = undefined;
selectedColor = userColor || defaultColor;
console.log(selectedColor); //prints 'blue'. because the userColor's value here is falsy and the defaultColor's value is truthy.

console.log("----- Bit-wise operator ----- ");

// some important things to note before diving into the bit-wise operators

// Short-circuiting only exists for logical operators, not bitwise operators

// 🔹 Logical OR (||)
// Operates on boolean truth
// Goal: “Do I already know the answer?”
// If true found → STOP
// Needs only one operand

// 🔹 Bitwise OR (|)
// Operates on every bit
// Goal: “Compute the final bit pattern”
// MUST evaluate all operands
// Needs every operand’s bits

// 1 byte = 8 bits

// hexadecimal values (8 digits)
// 0 = 00000000
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011

a = 1;
b = 2;

// bit-wise OR
c = a | b;
// 1 = 00000001
// 2 = 00000010
// R = 00000011 => 3 this is because, in OR operator if any one is true(1) then we will consider that true(1).
console.log("bit-wise OR : " + c); // prints 3

// bit-wise AND
c = a & b;
// 1 = 00000001
// 2 = 00000010
// R = 00000000 => 0 this is because, in AND operator both needs to be true(1) to consider that as true(1) but here both aren't true.
console.log("bit-wise AND : " + c); // prints 0

console.log(
  "----- 🔹 IMPORTANT : real-world usecase of the bit-wise operators. -----"
);

// it will be helpful in the access controls. (eg : RBAC - Role Based Access Control).

// read, write, execute

// consider here we have 3 different access so here we're using the last 3 digits in a 8 digit hexadecimal number.
// if the 6th bit is set to 1 then the user has read access, if the 7th bit is set to 1 then the user has write and if its 8th bit then he/she has the execution access.

// ..... 64 32 16 8 4 2 1

// 4 => 00000100 -> read
// 2 => 00000010 -> write
// 1 => 00000001 -> execute
// 6 => 00000110 -> read and write
// 3 => 00000011 -> write and execute
// 5 => 00000101 -> read and execute
// 7 => 00000111 -> read, write and execute.

// Another IMPORTANT hint
// using bit-wise OR (|) we can add anything (here we can add permissions)
// using bit-wise AND (&) we can check anything (here we can check weather the user has the permission or not).

let myPermission = 0;
let readAccess = 4;
let writeAccess = 2;
let executeAccess = 1;

//ternary operator
let hasAccessToRead =
  myPermission & readAccess
    ? "yes, the user has access to read"
    : "No, the user dont have access to read";

// 0 => 00000000 (myPermission)
// 4 => 00000100 (read)
// R => 00000000 => 0 ---> got this by performing bit-wise AND.
// since we got 0, condition fails in the ternary operator. so the user dont have any access, because 0 is a falsy value)

console.log(hasAccessToRead);

myPermission = myPermission | readAccess | writeAccess; //adding read and write access to the user.

// 0 => 00000000 (myPermission)
// 4 => 00000100 (read)
// 2 => 00000010 (write)
// R => 00000110 => 6 (read and write) ---> got this by performing bit-wise OR.

hasAccessToRead =
  myPermission & readAccess
    ? "yes, the user has access to read"
    : "No, the user dont have access to read";

console.log(hasAccessToRead);

console.log("----- swapping 2 variables using 3rd variable. ----- ");

let catName = "Tom";
let mouseName = "Jerry";

console.log("cat name before swap : " + catName);
console.log("mouse name before swap : " + mouseName);

let temp = catName;
catName = mouseName;
mouseName = temp;
console.log("cat name after swap : " + catName);
console.log("mouse name after swap : " + mouseName);

console.log(
  "----- swapping 2 variables using function (without 3rd variable). ----- "
);

function swapper(catName, mouseName) {
  return [mouseName, catName];
}

[catName, mouseName] = swapper(catName, mouseName);

console.log("cat name after 2nd swap : " + catName);
console.log("mouse name after 2nd swap : " + mouseName);
