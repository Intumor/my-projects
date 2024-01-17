const a = 7;
const b = a;

const c = 9;

//Declare String Variables

const myFirstName = 'Alex';
const myLastName = 'Band';

//Understanding Uninitialized Variables

let d = 5;
let e = 10;
let f = 'I am a';

d = d + 1;
e = e + 5;
f = f + 'String';

let studlyCapVar = 1;
let properCamelCase = '2';
let titleCaseOver = 2;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//Explore Differences Between the var and let Keywords

let catName = "Oliver";
let catSound = "Meow!";

//Declare a Read-Only Variable with the const Keyword
//Add Two Numbers with JavaScript
//Create Decimal Numbers with JavaScript
//Finding a Remainder in JavaScript
const remainder = 11 % 3;
console.log(remainder);

//Escaping Literal Quotes in Strings

const myStr = "I am a \"double quated\" string inside \"double quates\"";
console.log(myStr);

//Quoting Strings with Single Quotes

const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
console.log(goodStr);

//Manipulate Arrays With pop Method
//Manipulate Arrays With shift Method
//Local Scope and Functions
function fun1() {
  const oopsGlobal = 2;
  console.log(oopsGlobal);
}

fun1();

function testEqual(val) {
  if (val === 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(12));