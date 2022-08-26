/*
document.addEventListener("DOMContentLoaded", () => {
  // function doClick() {
  //   const para = document.createElement("p");
  //   para.textContent = "paragraphs....";
  //   document.body.appendChild(para);
  // }

  function doClick() {
    const myHeading = document.createElement("h1");
    myHeading.textContent = "Hello World..";
    document.body.appendChild(myHeading);
  }
  const btn = document.querySelector("button");
  btn.addEventListener("click", doClick);
});

const myArr = [""];
if (myArr[0]) {
  console.log("hallo");
}
let a;
a + 2; // Evaluates to NaN
const n = null;
console.log(n * 32); // Will log 0 to the console

//var is function level scope to available to out of block scope but not let is only block level scope
if (true) {
  var x = 5;
}
console.log(x); // x is 5
if (true) {
  let y = 5;
}
// console.log(y); // y is reference error
console.log(z === undefined);
var z = 3;
// will return a value of undefined
var myvar = "my value";

(function () {
  console.log(myvar); // undefined
  var myvar = "local value";
})();
// console.log(x); // ReferenceError
// let x = 3;
const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];
parseInt("101", 2); // 5
console.log(parseInt("101", 4));
var c = 10.45;
// var result = c.toExponential();
// var result = c.toFixed(3);//dot after value
var result = c.toPrecision(5); //full value
console.log(result);
const myList = ["home", "school", +"hospital"];
//BOOLEAN

const myFalse = new Boolean(false); // initial value of false
const g = Boolean(myFalse); // initial value of true
const myString = new String("Hello"); // string object
const s = Boolean(myString); // initial value of true
console.log("adfd \n dsfd");
console.log("adfd  dsfd");

if (false) {
  console.log("dfd");
} else if (true) {
  console.log("dfldl");
} else if (false) {
  console.log("uoeuo");
} else {
  console.log("oeuro");
}
//falsy values---- false, undefined, null, 0 or -0, NaN,(empty string) "" or '' or ``;

//Note: Do not confuse the primitive boolean values true and false with the true and false values of the Boolean object!
const b = new Boolean(false);
if (b) {
  console.log("true");
} // this condition evaluates to true
if (b == true) {
  console.log("true");
} // this condition evaluates to false

//SWITCH CASE
function doSwitchCase(value) {
  switch (value) {
    case "blue": {
      console.log("its blue color");
      break;
    }
    case "red": {
      console.log("its red color");
      break;
    }
    case "black":
      console.log("its black color");
      break;
    default:
      console.log("NO COLOR.......");
  }
}
doSwitchCase("yellow");
*/
//Errors Handling

function doError(value) {
  // if(typeof value !=='string') return;
  /* if (typeof value !== "string") {
    // return;
    let err = new Error("is not is String");
    console.error(err);
    return;
  }*/
  //throw the errors
  // method 1
  /* if (typeof value !== "string") {
    let err = new Error("is not is String");

    throw err;
  }*/
  // method 2 (more than error)

  if (typeof value !== "string") {
    let err = new Error("is not is String");

    throw err; //like alert or log
  }
  /*   if (value.length <= 3) {
    let err = new Error("Name Invalid");
    throw err;
  }*/
  //short way
  // if (value.length <= 3) throw new Error("Name Invalid");  //with error keyword
  if (value.length <= 3) throw "Name Invalid"; //without error keyword

  let result = value.split("");
  // console.log(result);
}
// doError("hallo");
// doError(45);
// doError("ha");

try {
  // doError(23);
  // doError("ha");
  doError("hallo");
} catch (error) {
  //error.name -- Error
  //error.message -- Name Invalid (like)
  //alert
  // console.log(error);
  doCheck(); // Catch kulla fn() kuda write pannalam -- error vantha intha function call aagum
} finally {
  // errors vanthalum vaarlanalum finaly excute aagum Last ah function call panna use aagum
  //like-- doCloseApplication()
  // doCheck();
}

function doCheck() {
  // console.log("DoChecked..........");
}

// let num = factorial(4);

//////////////////////////////////////////////////
/*
for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement;
/// do while
do statement;
while (condition);
//while loop
while (condition)
  statement
*/
//FOR LOOPS
/*
for (let step = 0; step < 5; step++) {
  console.log("walking to the east");
}
function howMany(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++)
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  // const musicTypes = document.querySelector("#musicTypes");
  // console.log(document.selectForm.musicTypes.options); //to get From values using name attribute
  const musicTypes = document.selectForm.musicTypes;
  console.log(`You have selected ${howMany(musicTypes)} option(s).`);
});

//// DO WHILE LOOP

let i = 0;
do {
  i++;
  console.log(i);
} while (i < 5);


////WHILE LOOP

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x = x + n;
  console.log(x);
}

// BREAK AND CONTINUE STATEMENT
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    // break;
    continue;
  }
  // console.log(i);
}
let i = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    // break;
    continue;
  }
  console.log(i);
}

let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
//1,3,7,12

let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    // continue;  //without continue statement
  }
  n += i;
  console.log(n);
}
// 1,3,6,10,15

///////////////////////////
// LABEL STATEMENT
loop1: for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    // if (j == 3) break loop1;
    if (j == 3) break loop1;
    console.log(i, j);
  }
}

label: {
  console.log("label 1");
  console.log("label 2");
  break label;
  console.log("label 3");
}
*/
/*
let arr = ["how", "ARE", "you", "friend"];

//FOR OF
arr.foo = "ind"; //not work in FOR OF METHOD
for (let value of arr) {
  console.log(value);
}
for (let [ind, value] of arr.entries()) {
  console.log(ind, value);
}

//FOR IN
arr.foo = "ind"; // foo is index value; like to create a custom index value
for (let i in arr) {
  console.log(i);
  console.log(arr[i]);
}


/////////////////////////////////////

///// FUNCTIONS

//Function DEclaration or Function Defination 0r funtion statement or funtion

function doSquare(num) {
  return num * num;
}
// console.log(doSquare(5)); //25
function myFunc(theObject) {
  theObject.make = "Toyoto";
}
const mycar = {
  make: "honda",
  model: "Accord",
  year: 1998,
};

console.log(mycar.make);
myFunc(mycar);
console.log(mycar.make);
mycar.make = "Indigo";
console.log(mycar.make);

function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30

const square = function (num) {
  return num * num;
};

const x = square(6);
console.log(square(6)); // 36
console.log(x); // 36

// 1st argment fn, 2nd array
function map(f, a) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

//argument ah fn send panna fn expression use aagum

function map(f, a) {
  const result = [];
  for (const v of a) {
    result[i] = f(v);
  }
  return result;
}
const f = function (x) {
  return x * x * x;
};

const num = [0, 1, 2, 5, 10];
const cube = map(f, num);
console.log(cube);

//
let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}

// RECURSION

function loop(x) {
  // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
  if (x >= 10) {
    return;
  }
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);

function foo(i) {
  if (i < 0) {
    return;
  }
  console.log("begin: " + i);
  foo(i - 1);
  console.log("end: " + i);
}
foo(3);

// Output:

// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3


function myConcat(separator) {
  console.log(arguments);
  let result = ""; // initialize list
  // iterate through arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
myConcat("dd");
// returns "red, orange, blue, "
myConcat(", ", "red", "orange", "blue");

// returns "elephant; giraffe; lion; cheetah; "
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// returns "sage. basil. oregano. pepper. parsley. "
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");

//not a default parameter before es6
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

multiply(5); // 5 no 2nd argument to get NaN error

function multiplyFunc(a, b = 1) {
  return a * b;
}
console.log(multiplyFunc(5));

// rest parameter

function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]

//arrow function not work this,arguments.length,super

//no seperate this
function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

const p = new Person();

///to fix

function Person() {
  const self = this; // Some choose `that` instead of `self`.
  // Choose one and be consistent.
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}
*/
/*
////////////////////////////////////////////////
/////////////////////////////////////////////

//OPERATOR

//A unary operator requires a single operand, either before or after the operator:

// operator operand
// operand operator

// ex  , x++ or ++x,++ and -- are the only postfix operators in JavaScript — all other operators, like !, typeof, etc. are prefix.

//Destructing

const foo = ["one", "two", "three"];

// without destructuring
const one = foo[0];
const two = foo[1];
const three = foo[2];
let a = 5;
let b = (a = 7);
console.log(b, a);
console.log(++a);
console.log(a++);
console.log(a++);
// with destructuring
// const [one, two, three] = foo;

// Logical AND &&

const a1 = true && true; // t && t returns true
const a2 = true && false; // t && f returns false
const a3 = false && true; // f && t returns false
const a4 = false && 3 == 4; // f && f returns false
const a5 = "Cat" && "Dog"; // t && t returns Dog
const a6 = false && "Cat"; // f && t returns false
const a7 = "Cat" && false; // t && f returns false

//Logical OR ||

const o1 = true || true; // t || t returns true
const o2 = false || true; // f || t returns true
const o3 = true || false; // t || f returns true
const o4 = false || 3 == 4; // f || f returns false
const o5 = "Cat" || "Dog"; // t || t returns Cat
const o6 = false || "Cat"; // f || t returns Cat
const o7 = "Cat" || false; // t || f returns Cat

//Logical OR ||

const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !"Cat"; // !t returns false

//short circuit evalution

// false && anything is short-circuit evaluated to false.
// true || anything is short-circuit evaluated to true.

// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
console.log(0 || 45); //45
console.log(0 ?? 45); //0
console.log("" || 45); //45
console.log("" ?? 45); //''
console.log(undefined ?? 45); //45
console.log(null ?? 45); //45

// string operator

let mystring = "alpha";
mystring += "bet"; // evaluates to "alphabet" and assigns this value to mystring.

// Conditional(ternary) Operator

let statusVal = (age >= 18 ? "Adult" : "minor");
console.log(statusVal);

//Relationa Operator

// Arrays
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
0 in trees; // returns true
3 in trees; // returns true
6 in trees; // returns false
// console.log(4 in trees); //true
"bay" in trees; // returns false (you must specify the index number,
// not the value at that index)
"length" in trees; // returns true (length is an Array property)

// built-in objects
"PI" in Math; // returns true
const myString = new String("coral");
"length" in myString; // returns true

// Custom objects
const mycar = { make: "Honda", model: "Accord", year: 1998 };
// console.log("year" in mycar); //true
"make" in mycar; // returns true
"model" in mycar; // returns true

//instance of
const theDays = new Date(1995, 12, 17);
//like typeof theDays==='Object'
if (theDays instanceof Object) {
  // statements to execute
  console.log("d");
}
*/
/*
//Math
console.log(Math.floor(99.9)); // 99
console.log(Math.ceil(99.9)); // 100
console.log(Math.abs(-100)); // 100
console.log(Math.min(-10, 0, 1, 2, 3)); // -10
console.log(Math.max(-10, 0, 1, 2, 3)); // 3
console.log(Math.max([-10, 0, 1, 2, 3])); // not working
console.log(Math.random() * 10); // like 3.74917842 ,4.820834
console.log(Math.trunc(Math.random() * 10) + 1); //3,4,2 random hole number
console.log(Math.round(Math.random() * 10) + 1); //3,4,2 random hole number
console.log(Math.fround(Math.random() * 10) + 1); //like 3.74917842 ,4.820834
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095

Math.sqrt(1); // 1
Math.sqrt(0); // 0
Math.sqrt(-1); // NaN
Math.sqrt(-0); // -0
Math.cbrt(64); //4

Math.sign(3); //  1
Math.sign(-3); // -1
Math.sign("-3"); // -1
Math.sign(0); //  0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign("foo"); // NaN
Math.sign(); // NaN

//DATE
new Date()
const Xmas95 = new Date("December 25, 1995");
console.log(Xmas95);
console.log(new Date("2022-08-02"));

console.log(new Date().getDate()); //2(date)
console.log(new Date().getFullYear()); //2022
console.log(new Date().getTime()); //1659405639249    milliseconds
// const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day

const today = new Date();
const endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
endYear.setFullYear(today.getFullYear()); // Set year to this year
const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft); //returns days left in the year
console.log(today, endYear, msPerDay);
console.log(today.getTime(), endYear.getTime(), msPerDay, daysLeft);

function JSClock() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  let temp = "" + (hour > 12 ? hour - 12 : hour);
  if (hour === 0) temp = "12";
  temp += (minute < 10 ? ":0" : ":") + minute;
  temp += (second < 10 ? ":0" : ":") + second;
  temp += hour >= 12 ? " P.M." : " A.M.";
  return temp;
}

function jsClock() {
  let time = new Date();
  let hour = time.getHours();
  let mint = time.getMinutes();
  let sec = time.getSeconds();
  let temp = " " + hour > 12 ? hour - 12 : hour;
  if (hour === 0) temp = "12";
  temp += (mint < 10 ? ":0" : ":") + mint;
  temp += (sec < 10 ? ":0" : ":") + sec;
  temp += hour > 12 ? "P.M" : "A.M";

  return temp;
}

console.log(jsClock());
*/
/////////////////////////////////
///////////////////////////////////
//////////////////////////////////////

//WORKING WITH STRING
/*
let str = "The quick brown fox jumps over the lazy dog.";
console.log(str.length); // 44
//start with lenght 1...
//start with index 0....

// INDEXOF

console.log(str.indexOf("o")); // 12 (default first value'o');
console.log(str.indexOf("dog")); // 40
console.log(str.indexOf("dogsss")); // -1 not value
// Return value when using an empty search string
"hello world".indexOf(""); // returns 0
"hello world".indexOf("", 0); // returns 0
"hello world".indexOf("", 3); // returns 3
"hello world".indexOf("", 8); // returns 8
// however, with a second argument whose value is greater than or equal to the string's length, the return value is the string's length:

"hello world".indexOf("", 11); // returns 11
"hello world".indexOf("", 13); // returns 11
"hello world".indexOf("", 22); // returns 11

"Blue Whale".indexOf("Blue"); // returns  0
"Blue Whale".indexOf("Blute"); // returns -1
"Blue Whale".indexOf("Whale", 0); // returns  5
"Blue Whale".indexOf("Whale", 5); // returns  5
"Blue Whale".indexOf("Whale", 7); // returns -1
"Blue Whale".indexOf(""); // returns  0
"Blue Whale".indexOf("", 9); // returns  9
"Blue Whale".indexOf("", 10); // returns 10
"Blue Whale".indexOf("", 11); // returns 10

let position = str.indexOf("o");wew
let count = 0;
while (position !== -1) {
  count++;
  position = str.indexOf("e", position + 1);
}
console.log("count", count);
console.log(str.indexOf("o", 15)); // 17 (search after 15 - letter first value'o')

//LAST INDEXOF

console.log(str.lastIndexOf("o")); // 41 (default last value'o')
console.log(str.lastIndexOf("o", 20)); // 17 (search before 20 - last value'o')

//CharAT
console.log(str.charAt()); //T default 0
console.log(str.charAt(4)); //q 4th index
console.log(str.charAt(str.length - 1)); //. last value
"ABC".charCodeAt(0); // returns 65
// charCodeAt() will always return a value that is less than 65536

*/
/*
//STARTSWITH And ENDSWITH 

//return true or false
const str1 = "Saturday night plans";

console.log(str1.startsWith("Sat")); // expected output: true

console.log(str1.startsWith("Sat", 3)); //false

let str = "To be, or not to be, that is the question.";

console.log(str.startsWith("To be")); // true
console.log(str.startsWith("not to be")); // false
console.log(str.startsWith("not to be", 10)); // true

let str = 'To be, or not to be, that is the question.'

console.log(str.endsWith('question.'))  // true
console.log(str.endsWith('to be'))      // false
console.log(str.endsWith('to be', 19))  // true


//INCLUDES

"Blue Whale".includes("blue"); // returns false
"Blue Whale".toLowerCase().includes("blue"); // returns true
const str = "To be, or not to be, that is the question.";

console.log(str.includes("To be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false
console.log(str.includes("TO BE")); // false
console.log(str.includes("")); // true

//concat
// It is strongly recommended to use the assignment operators (+, +=) instead of the concat() method.

let hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day."));
// Hello, Kevin. Have a nice day.

let greetList = ["Hello", " ", "Venkat", "!"];
"".concat(...greetList); // "Hello Venkat!"

"".concat({}); // [object Object]
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"

//String.fromCharCode(65, 66, 67);   // returns "ABC"

//SPLIT

const myString = "Hello World. How are you doing?";
console.log(myString.split(" ")); //['Hello', 'World.', 'How', 'are', 'you', 'doing?']
console.log(myString.split(" ", 3)); //["Hello", "World.", "How"]

//SLICE
const str = "The quick brown fox jumps over the lazy dog.";

console.log(str.slice(31)); //  "the lazy dog."

console.log(str.slice(4, 19)); //  "quick brown fox"

console.log(str.slice(-4)); //  "dog."

console.log(str.slice(-9, -5)); //  "lazy"

const str1 = "The morning is upon us.", // the length of str1 is 23.
  str2 = str1.slice(1, 8), // OUTPUT: he morn
  str3 = str1.slice(4, -2), // OUTPUT: morning is upon u
  str4 = str1.slice(12), // OUTPUT: is upon us.
  str5 = str1.slice(30); // OUTPUT: ""

const text = "Mozilla";
console.log(text.substring(2, 5)); // => "zil"
console.log(text.substr(2, 3)); // => "zil"
const text = "Mozilla";
console.log(text.substring(5, 2)); // => "zil"
console.log(text.slice(5, 2)); // => ""

//MATCH
const paragraph = "The quick brown fox jumps over the lazy dog.4 It barked.";
console.log(paragraph.match(/[0-9]/g)); //4
console.log(paragraph.match(/[T]/gi)); //['T','t','t']
console.log(paragraph.match(/[A-Z]/g)); //['T','I']

const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const regexp = /[A-E]/gi;
const matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

//REPLACE

const p =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

console.log(p.replace("dog", "monkey"));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

const regex = /Dog/i;
console.log(p.replace(regex, "ferret"));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

let re = /apples/gi;
let str1 = "Apples are round, and apples are juicy.";
let newstr = str1.replace(re, "oranges");
console.log(newstr); // oranges are round, and oranges are juicy.

//SEARCH

let str = "hey JudE";
let re = /[A-Z]/g;
let reDot = /[.]/g;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)); // returns -1 cannot find '.' dot punctuation


//REPEAT

'abc'.repeat(-1)    // RangeError
'abc'.repeat(0)     // ''
'abc'.repeat(1)     // 'abc'
'abc'.repeat(2)     // 'abcabc'
'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
'abc'.repeat(1/0)   // RangeError

({ toString: () => 'abc', repeat: String.prototype.repeat }).repeat(2)
// 'abcabc' (repeat() is a generic method)


//TRIM

const greeting = "   Hello world!   ";

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";

const orig = "   foo  ";
console.log(orig.trim()); // 'foo'
*/

/////////////////////////////////////
////////////////////////////////////////
/////////////////////////////////////////////
/*
//ARRAY METHODS
let years = [0, 1, 2];
// console.log(years["2"] !== years["02"]); //true

//empty array

let arr = new Array(5); //[empty × 5]
let arr1 = Array(5); //[empty × 5]
let arr2 = [];
arr2.length = 5; //[empty × 5]
console.log(arr2);

// const obj = {};
// // …
// obj.prop = [element0, element1, /* … , elementN];

// // OR
// const obj = { prop: [element0, element1, /* … , elementN] };
const arr3 = [42]; // Creates an array with only one element:
// the number 42.

const arr4 = Array(42); // Creates an array with no elements
// and arr.length set to 42.
//
// This is equivalent to:
const arr5 = [];
arr.length = 42;
const wisenArray = Array.of(9.3); // wisenArray contains only one element 9.3
console.log(wisenArray);
let wisenArr = Array.of(5.3); //['5.3']

// const arr = ["one", "two", "three"];
// arr[2]; // two
// arr.length or arr['length']  //3
let arrr = [];
arrr[3.5] = "Hallo";
console.log(arrr.length); //0
console.log(arrr.hasOwnProperty(3.5)); //true       or
console.log(Object.hasOwn(arrr, 3.5)); //true

const cats = [];
cats[30] = ["Dusty"];
console.log(cats.length); // 31

const cats1 = ["Dusty", "Misty", "Twiggy"];
console.log(cats1.length); // 3
cats1.length = 2; // ['Dusty', 'Misty'] Twiggy is removed.
cats1.length = 0; // [] //all values removed
cats1.length = 3; //  [empty × 3]
console.log(cats1);

const colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
const divs = document.getElementsByTagName("div");
for (let i = 0, div; (div = divs[i]); i++) {
  // / Process div in some way /
  // console.log(div);
}

colors.forEach((item, i, arr) => {
  console.log(item, i);
});

const array = ["first", "second", , "fourth"];

array.forEach((item) => {
  console.log(item);
});

// first
// second
// fourth //3rd not value not show

if (array[2] === undefined) {
  // console.log(true);  //true
}
const array1 = ["first", "second", undefined, "fourth"];

array1.forEach((item) => {
  console.log(item);
});

// first
// second
// undefined
// fourth

let myArray = ["1", "2", "3"];
let arrAlbht = ["a", "b", "c"];
myArray.concat(arrAlbht); //myArray => ["1", "2", "3", "a", "b", "c"]

let myNewArray = ["Wind", "Rain", "Fire"];
myNewArray.join(" - "); // myNewArray is "Wind - Rain - Fire"

const myArray1 = ["1", "2"];
myArray1.push("3"); // myArray1 is now ["1", "2", "3"]

const myArray2 = ["1", "2", "3"];
let last = myArray2.pop(); // myArray2 is now ["1", "2"]  last = "3"

const myArray3 = ["1", "2"];
myArray3.unshift("0"); // myArray3 is now ['0',"1", "2"]

const myArray4 = ["0", "1", "2"];
let last1 = myArray2.shift(); // myArray4 is now ["1", "2"]  last1 = "0"

// REVERSE METHOD
const arr = [1, 2, 3, 4, 5];
console.log(arr.reverse()); //5,4,3,2,1
const arr1 = ["hero", "honda", "splender", "java"];
console.log(arr1.reverse()); //['java', 'splender', 'honda', 'hero']

// SORT METHOD
const arr1 = ["hero", "arun", "splender", "balu", "java"];
let newArr = arr1.sort((a, b) => a - b); //number 
console.log(newArr);


//INDEX OF AND LAST INDEX OF
const a = ["a", "b", "a", "b", "a"];
// console.log(a.indexOf("b"));  //1
// console.log(a.indexOf("b", 2)); //3
console.log(a.indexOf("c")); //-1  value not found
console.log(a.lastIndexOf("c")); //-1  value not found
console.log(a.lastIndexOf("b")); //3
console.log(a.lastIndexOf("b", 2)); //1

// MAP METHOD
const arr = [1, 2, 3, 4, 5];
let newArr = arr.map((val) => val * 5);
console.log(newArr); // [5, 10, 15, 20, 25]
let res = arr.map((val) => val > 3); //
console.log(res);   //  [false, false, false, true, true]


// FILTER METHOD

const arr = [1, 2, 3, 4, 5];
let result = arr.filter((val) => val < 3);
console.log(result); //val<3  [1, 2]   //val<=3  [1, 2, 3]  //val >3  [4,5]

const a1 = ['a', 10, 'b', 20, 'c', 30];
const a2 = a1.filter((item) => typeof item === 'number');
console.log(a2); // logs [10, 20, 30]



// EVERY METHOD

function isNumber(value) {
  return typeof value === 'number';
}
const a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // logs true
const a2 = [1, '2', 3];
console.log(a2.every(isNumber)); // logs false


// SOME METHOD

function isNumber(value) {
  return typeof value === 'number';
}
const a1 = [1, 2, 3];
console.log(a1.some(isNumber)); // logs true
const a2 = [1, '2', 3];
console.log(a2.some(isNumber)); // logs true
const a3 = ['1', '2', '3'];
console.log(a3.some(isNumber)); // logs false


// REDUCE METHOD

const a = [10, 20, 30];
const total = a.reduce((a, b) => {
  return a + b;
}, 0);
console.log(total); //60

//SPARSE ARRAYS

// Array constructor:
const a = Array(5); // [ <5 empty items> ]

// Consecutive commas in array literal:
const b = [1, 2, , , 5]; // [ 1, 2, <2 empty items>, 5 ]

// Directly setting a slot with index greater than array.length:
const c = [1, 2];
c[4] = 5; // [ 1, 2, <2 empty items>, 5 ]

// Elongating an array by directly setting .length:
const d = [1, 2];
d.length = 5; // [ 1, 2, <3 empty items> ]

// Deleting an element:
const e = [1, 2, 3, 4, 5];
delete e[2]; // [ 1, 2, <1 empty item>, 4, 5 ]


let arr = [1, 2, , , 5];
console.log(arr); // [1, 2, empty × 2, 5]
console.log(arr[2]); //undefined
for (const i of arr) console.log(i);
// Logs "1 2 undefined undefined 5"

const another = [...arr];
console.log(another); //[1, 2, undefined, undefined, 5]

let a = new Array(4);
for (let i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (let j = 0; j < 4; j++) {
    a[i][j] = [`${i} ${j}`];
  }
}
console.log(a);
// Row 0: [0, 0] [0, 1] [0, 2] [0, 3]
// Row 1: [1, 0] [1, 1] [1, 2] [1, 3]
// Row 2: [2, 0] [2, 1] [2, 2] [2, 3]
// Row 3: [3, 0] [3, 1] [3, 2] [3, 3]

let arr = [1, 2, 3];
arr.property = "value";
console.log(arr.property); // value
console.log(arr); // [1, 2, 3, property: 'value']
arr.name = "kumar";
console.log(arr.name); //kumar
console.log(arr); // [1, 2, 3, property: 'value', name: 'kumar']


/// NEW MAP ARRAY METHOD

//to set values with key:value in array

let arr = new Map();
arr.set("name", "value");
arr.set("dog", "woof");
arr.set("cat", "meao");

console.log(arr); //{'name' => 'value', 'dog' => 'woof', 'cat' => 'meao'}
console.log(arr.get("dog")); //woof
console.log(arr.get("cat")); //meao
console.log(arr.size); // 3 (length)
console.log(arr.has("cat")); //true  has using key only not value
console.log(arr.has("meao")); // false
console.log(arr.delete("cat")); //cat is deleted
console.log(arr); //  {'name' => 'value', 'dog' => 'woof',}
console.log(arr.has("cat")); //false

for (let [key, value] of arr) {
  // console.log(`${key} goes ${value}`);
}
// "cat goes meow"
// "elephant goes toot"

arr.clear(); //clear all values
console.log(arr.size);


////////////////////////////////////

// set array method (Set may only occur once; it is unique in the Set's collection.)

let arr = new Set();
arr.add("kumar");
arr.add(1);
arr.add("foo");
console.log(arr); // {'kumar', 1, 'foo'}
console.log(typeof arr); // Object
console.log(arr.size); // 3
arr.delete("foo"); //foot value is deleted
console.log(arr); // {'kumar', 1}
console.log(arr.size); // 2

for (let val of arr) {
  console.log(val); //kumar ,1
}


let arr = [1, 2, 3, 4, 5];
console.log(arr[0]); //1
console.log(arr[-1]); //1undefined
console.log(arr.at(0)); //1
// get last value in array
console.log(arr[arr.length - 1]); //5
console.log(arr.at(-1)); //5
console.log(arr.slice(-1)[0]); //5

const username = "Jonas Schmdman";
// let user=username.toLowerCase().split(' ').map(val=>val[0]).join('');  //js

//// get maximum value in array
let arr = [100, 400, 200, 500, 700];
let max = arr.reduce((a, b) => (a > b ? a : b), arr[0]); //700  (intial value arr[0] get 700)
let min = arr.reduce((a, b) => (a < b ? a : b), arr[0]); // 0  (intial value arr[0] get 100)
// let min = arr.reduce((a, b) => (a < b ? a : b), 0); // 0  (intial value 0 get 0)
console.log(max, min);

//FLAT METHOD
let arr = [
  [1, [2, [3]]],
  [4, 5, 6],
];
// [[1,2],[3,4]]       //[1,2,3,4,]
// console.log(arr.flat(2)); //[1, 2, 3, 4, 5, 6];

// FLATMAP METHOD

// let flatmapArr = arr.flatMap((val) => console.log(val));

// SORT METHOD  //array mutated
let arr1 = ["bala", "kumaran", "gopi", "arun"];
console.log(arr1.sort()); // ['arun', 'bala', 'gopi', 'kumaran']
let num = [100, 40, 2000, -800, 500, 700, -100, 0, -20];
// sort num array to get wrong values
console.log(num.sort()); //  [-100, -20, -800, 0, 100, 2000, 40, 500, 700]
console.log(num.sort((a, b) => a - b)); // [-800, -100, -20, 0, 40, 100, 500, 700, 2000]
console.log(num[0]); // -800  lowest value
console.log(num[num.length - 1]); // 2000 Greatest value

// FIND 
arr.find(val=>arr.name==='adam);  // return 1st element(matched) only 
// FIND INDEX 
arr.findIndex(val=>arr.name==='adam);  // return 1st element(matched) only 

/////////////////
// FILL
let x = new Array(7);
// console.log(x.length); //7
x.fill(1);
console.log(x); // [1, 1, 1, 1, 1, 1, 1]
console.log(x.fill(55, 3, 5)); //  [1, 1, 1, 55, 55, 1, 1]   fill(value,positiion,end);
// FROM
let y = Array.from({ length: 5 }, () => 1); //[1, 1, 1, 1, 1]
let z = Array.from({ length: 10 }, (_, i) => i + 1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
///////////////////////////////
let arr = [100, 40, 2000, -800, 500, 700, -100, 0, -20];
// arr.reduce((a,b)=>a+b,0)
let newArr = arr.reduce(
  (sum, cur) => {
    sum[cur > 0 ? "deposit" : "withdraw"] += cur;
    return sum;
  },
  { deposit: 0, withdraw: 0 }
);
// console.log(newArr); //deposit: 3340, withdraw: -920}

// console.log(z);
*/
//////////////////////////////////////////////////////
////////////////////////////////////////////////////

// OBJECT

// let obj = new Object();
// let obj = {};

// obj.make = "Ford";
// obj.model = "mustang";
// obj.year = 1969;

// obj["make"] = "Ford";
// obj["model"] = "mustang";
// obj["year"] = 1969;
// console.log(obj);

// let obj = { make: "ford", model: "mustang", year: 1969 };
// obj.model = "brand";
// console.log(obj);

// console.log(obj.make); //ford
// console.log(obj.brand); //undefined  //not assigned values get undefined

// let property = "value";
// obj[property] = "val";
// console.log(obj); //{value: 'val'}
// property = "make";
// obj[property] = "newValue";
// console.log(obj); // {value: 'val', make: 'newValue'}
