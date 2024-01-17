/*const name = 'Alex';
const age = '27';
const city = 'Guadalajara';

console.log(name, age, city);



const string = 'string';
const number = 25;
const boolean = true;
const array = ['string', 25, true];

console.log(typeof string)
console.log(typeof number)
console.log(typeof boolean)
console.log(typeof array)


let variable = 25;

function scope() {
  let variable = 25
  console.log(variable);
}

variable = 666;
console.log(variable)
scope();



const num1 = 10;
const num2 = 5;
let updatable = 31;

const num3 = num1 + num2;
console.log(num3);

const num4 = num1 + '' + num2;
console.log(num4);

updatable = 45;
console.log(updatable);
const firstName = 'Alex';
const lastName = 'Band';
const dateOfBirth = '07.17.1996';

const num1 = 5;
const num2 = 10;

const addition = num1 + num2;
const subtraction = num1 - num2;
const division = num1 / num2;
const multiplication = num1 * num2;

console.log(addition);
console.log(subtraction);
console.log(division);
console.log(multiplication);


const toThePower = (base, exponent) => {
  console.log(Math.pow(base, exponent))
}

toThePower(7, 3);


const squareRoot = (num) => {
  console.log(Math.sqrt(num))
}

squareRoot(64);


const randomNumber = () => {
  console.log(Math.floor(Math.random() * 10) + 1);
}

randomNumber();


const decimal = 7.44;
const result = Math.round(decimal);
console.log(result);

let negativeNumber = -9.5;

const result2 = Math.abs(negativeNumber);
console.log(result2);


const string = "I said \"i'm not hungry\"";
console.log(string)


const string2 = '\tHe was a hapy puppy.\nWe all loved him very much. \"He was\" Dad said'
console.log(string2)

const string3 = ''

const htmlString = '<script src="variables.js"></script>';
console.log(htmlString);

const noLiterals = `How are you doing?
Fine
Me too!`;
console.log(noLiterals);

const answer = 'How are you?'
const response = 'Great! What about you?'

const string = `${answer}
${response}`;
console.log(string);

const htmlString2 = '<p>This is just a string</p>';
console.log(htmlString2);


const string1 = 'New line\n';
const string2 = '\tTab line';

const result = `${string1}${string2}`;
console.log(result);


const backlashString = '10 \\ 5 = 2\\ 2 \\ 2 = 1';
console.log(backlashString);*/

/*const result = `${string1}${string2}`;
console.log(result);
console.log(result.length);
const upperCaseString = result.toUpperCase();
console.log(upperCaseString);
const lowerCaseString = upperCaseString.toLowerCase();
console.log(lowerCaseString);

const string1 = 'I am Alex, ';
const string2 = 'I am Alex, ';

const checkEquality = (string1, string2) => {
  if (string1 === string2) {
    console.log('They\'re equal')
  } else {
    console.log('They\'re not equal')
  }
}

checkEquality(string1, string2);


const combineArrays = (arr1, arr2) => {
  const newArray = [...arr1, ...arr2];
  return newArray;
}

console.log(combineArrays([1, 'milk', 4, 6], ['shrooms', 6, 8, 1]));


function quickCheck(arr, elem) {
  // Only change code below this line
  return arr.indexOf(elem) >= 0 ? true : false;
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'shrooms'));

let arr = [1, 2, 3, 4, 5 ,6]
let newArr = []
newArr = arr.splice(0, 2);
console.log(newArr)


function sentensify(str) {
  // Only change code below this line
  let arr = [];
  let nonLetterCounter = 0;
  let words = '';
  const regexMatcher = /[^a-zA-Z0-9]/g;
  for (let i = 0; i < str.length; i++) {
    if () {

    }
  }
  //arr = arr.join();
  console.log(arr)
  // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));
*/

//This converts a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  const regex2 = /[A-Z]/
  const regex3 = /[^A-Za-z0-9-]/g;
  const regex4 = /--/g;
  let word1 = '';
  let word2 = [];
  word1 = word1 + str[0];
  for (let i = 1; i < str.length; i++) {
    if (!str[i].match(regex2) && !str[i].match(regex3)) {
      word1 = word1 + str[i];
    } else if (str[i].match(regex2)) {
      word2 = word2 + word1 + '-';
      word1 = '';
      word1 = word1 + str[i];
    } else if (str[i].match(regex3)) {
      word1 = word1 + '-';
    }
  }
  if (regex4.test(word2)) {
    word2 = word2.replace(regex4, '-');
  }
  word2 = word2 + word1;
  word2 = word2.toLowerCase();
  return word2;
}

console.log(spinalCase('AllThe-small Things'));


//Pig Latin

function translatePigLatin(str) {
  const consRegex = /^[BCDFGHJKLMNPQRSTVWXYZ]+/i;
  const vowelRegex = /^[aeiou]+/i;
  let wordSegment = '';
  let result;
  if (consRegex.test(str)) {
    wordSegment += str.match(consRegex);
   str = str.replace(consRegex, '');
   str = str + wordSegment + 'ay';
   result = str;
  } else if (vowelRegex.test(str)) {
    str = str + 'way';
    result = str;
  }
  return result;
}
console.log(translatePigLatin("schwartz"));

//Search and Replace

function myReplace(str, before, after) {
  after = after.toLowerCase();
  const regex = new RegExp('\\b' + before + '\\b', 'i');
  const capRegex = /^[A-Z]/
  const matchedWord = str.match(regex);
  if (capRegex.test(matchedWord[0])) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  str = str.replace(regex, after);
  return str;
}

console.log(myReplace("His name is Tom", "Tom", "john"));

//DNA

function pairElement(str) {
  const arrayDNA = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'A') {
      const arr = [];
      arr.push(str[i]);
      arr.push('T');
      arrayDNA.push(arr);
    }

    if (str[i] === 'T') {
      const arr = [];
      arr.push(str[i]);
      arr.push('A');
      arrayDNA.push(arr);
    }

    if (str[i] === 'C') {
      const arr = [];
      arr.push(str[i]);
      arr.push('G');
      arrayDNA.push(arr);
    }

    if (str[i] === 'G') {
      const arr = [];
      arr.push(str[i]);
      arr.push('C');
      arrayDNA.push(arr);
    }
  }
  console.log(arrayDNA)
}

pairElement("CTC");


//Missing letters

function fearNotLetter(str) {
  let missingLetter = '';
  let alphabet = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for (let i = 0; i < alphabet.length; i++) {
    if (str[0] === alphabet[i]) {
      alphabet = alphabet.slice(i);
      for (let j = 0; j < str.length; j++) {
        if (str[j] !== alphabet[j]) {
          missingLetter = alphabet[j];
          break;
        }
      }
    }
  }
  if (missingLetter === '') {
    missingLetter = undefined;
  }
  return missingLetter;
}

console.log(fearNotLetter("abce"));

//Sum All Odd Fibonacci Numbers

function sumFibs(num) {
  const fibonacciNumbers = [0, 1]
  let nextNumber = 0;
  let i = 2;
  while (nextNumber < num) {
    nextNumber = fibonacciNumbers[i - 2] + fibonacciNumbers[i - 1];
    if (nextNumber > num) {
      break;
    }
    fibonacciNumbers.push(nextNumber);
    i++
  }
  let sum = 0;
  for (let i = 0; i < fibonacciNumbers.length; i++) {
    if (fibonacciNumbers[i] % 2 !== 0) {
      sum += fibonacciNumbers[i];
    }
  }

  return sum
}

console.log(sumFibs(75025));

//Sum All Primes

function sumPrimes(num) {
  const primes = [2]
  let nextNumber = 3;
  let sum = 0;
  for (let i = 3; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j < nextNumber; j++) {
      if (nextNumber % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(nextNumber);
    }
    nextNumber++
  }

  for (let i = 0; i < primes.length; i++) {
    sum += primes[i];
  }
  return sum;
}

console.log(sumPrimes(977));


//hell


function compute(a, b) {
  const num1 = Math.min(a, b);
  const num2 = Math.max(a, b);

  for (let m = num2; m <= num1 * num2; m += num2) {
    if (m % num1 === 0) {
      return m;
    }
  }
}

function smallestCommons(arr) {
  let x = Math.min(...arr);
  let y = Math.max(...arr);
  let scm = 1;

  for (let i = x; i <= y; i++) {
    scm = compute(scm, i);
  }
  return scm;
}

console.log(smallestCommons([2, 10]));

console.log(compute(2, 3));


//flaten an array

/*function isArray(arr2, newArr) {
    newArr.push(arr2);
    return newArr;
}
*/
//isArray(arr + [], newArr);
function steamrollArray(arr) {
  let newArr = [];
  let middleArr = [];
  const result = [];
  newArr.push(arr + [])
  for (let i = 0; i < newArr.length; i++) {
    middleArr = newArr[i].split(',');
  }
  
  for (let i = 0; i < middleArr.length; i++) {
    let convertedValue = Number(middleArr[i])
    
    if (!isNaN(convertedValue)) {
      result.push(convertedValue)
    } else {
      result.push(middleArr[i])
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] === 0) {
      result.splice(i, 1);
    } else if (result[i] === '[object Object]') {
      result[i] = {};
    }
  }
  return result;
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));


/*

01001001 00100000 01101100 01101111 01110110 01100101 00100000 01001110 01100001 01101100 01101100 01100101 01111001 00100000 01001100 01110101 01111010 00100000 01001000 01100101 01110010 00001010 01110010 01100101 01110010 01100001 00100000 01000100 01100101 00100000 01001100 01100001 00100000 01001101 01101111 01110010 01100001




01001001 00100000 01101100 01101111 01110110 01100101 00100000 01111001 01101111 01110101

01010111 01101000 01100001 01110100 00100000 01110111 01101111 01110101 01101100 01100100 00100000 01111001 01101111 01110101 00100000 01101100 01101001 01101011 01100101 00100000 01110100 01101111 00100000 01100001 01101000 01110110 01100101 00100000 01100110 01101111 01110010 00100000 01101100 01110101 01101110 01100011 01101000 00111111

01001001 00100000 01110111 01100001 01101110 01110100 00100000 01110100 01101111 00100000 01100101 01100001 01110100 00100000 01110011 01101111 01101101 01100101 00100000 01110011 01101000 01100001 01110111 01100001 01110010 01101101 01100001 00100001 00100000 01010111 01101000 01100001 01110100 00100000 01100001 01100010 01101111 01110101 01110100 00100000 01111001 01101111 01110101 00111111


01001000 01101001 00101100 00100000 01100010 01100101 01100001 01110101 01110100 01101001 01100110 01110101 01101100 00101100 00100000 01101000 01101111 01110111 00100000 01110111 01100001 01110011 00100000 01111001 01101111 01110101 01110010 00100000 01100100 01100001 01111001 00111111


*/


const binaryAlphabet = {
  'A': '01000001',
  'B': '01000010',
  'C': '01000011',
  'D': '01000100',
  'E': '01000101',
  'F': '01000110',
  'G': '01000111',
  'H': '01001000',
  'I': '01001001',
  'J': '01001010',
  'K': '01001011',
  'L': '01001100',
  'M': '01001101',
  'N': '01001110',
  'O': '01001111',
  'P': '01010000',
  'Q': '01010001',
  'R': '01010010',
  'S': '01010011',
  'T': '01010100',
  'U': '01010101',
  'V': '01010110',
  'W': '01010111',
  'X': '01011000',
  'Y': '01011001',
  'Z': '01011010',
  'a': '01100001',
  'b': '01100010',
  'c': '01100011',
  'd': '01100100',
  'e': '01100101',
  'f': '01100110',
  'g': '01100111',
  'h': '01101000',
  'i': '01101001',
  'j': '01101010',
  'k': '01101011',
  'l': '01101100',
  'm': '01101101',
  'n': '01101110',
  'o': '01101111',
  'p': '01110000',
  'q': '01110001',
  'r': '01110010',
  's': '01110011',
  't': '01110100',
  'u': '01110101',
  'v': '01110110',
  'w': '01110111',
  'x': '01111000',
  'y': '01111001',
  'z': '01111010',
  ' ': '00100000',
  '!': '00100001',
  '"': '00100010',
  '#': '00100011',
  '$': '00100100',
  '%': '00100101',
  '&': '00100110',
  "'": '00100111',
  '(': '00101000',
  ')': '00101001',
  '*': '00101010',
  '+': '00101011',
  ',': '00101100',
  '-': '00101101',
  '.': '00101110',
  '/': '00101111',
  '0': '00110000',
  '1': '00110001',
  '2': '00110010',
  '3': '00110011',
  '4': '00110100',
  '5': '00110101',
  '6': '00110110',
  '7': '00110111',
  '8': '00111000',
  '9': '00111001',
  ':': '00111010',
  ';': '00111011',
  '<': '00111100',
  '=': '00111101',
  '>': '00111110',
  '?': '00111111',
  '@': '01000000',
  '[': '01011011',
  '\\': '01011100',
  ']': '01011101',
  '^': '01011110',
  '_': '01011111',
  '`': '01100000',
  '{': '01111011',
  '|': '01111100',
  '}': '01111101',
  '~': '01111110'
};


function binaryAgent(str) {
  const regex = /\s/;
  let word1 = '';
  const word2 = [];
  const convertedWords = [];
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      word2.push(word1)
      word1 = '';
    } else {
      word1 += str[i];
    }
  }
  word2.push(word1)
  const binaryWords = word2.slice(0);

  for (let i = 0; i < binaryWords.length; i++) {
    for (const key in binaryAlphabet) {
      if (binaryWords[i] === binaryAlphabet[key]) {
        convertedWords.push(key)
      }
    }
  }
  result = convertedWords.join('');
  return result;
}

console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));