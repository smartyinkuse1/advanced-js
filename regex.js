//   /dahgdkadg(somecharacters)/igm(modifier is optional)

const testReLogger = (regex, sentence) => {
    console.log(regex.test(sentence));
}


let anyRe = /ae/



// carer ^ - represents the start of the string.
let caretRe = /^abec/
// testReLogger(caretRe, sentence)

// DOLLAR SIGN $ - represents the end of a string
let dollarRe = /ghxgood$/
// testReLogger(dollarRe, sentence)

let caretDollarRe = /^good$/
// testReLogger(caretDollarRe, sentence);

// . - represents any character
let dotRe = /a.t/
// testReLogger(dotRe, sentence)

// + - represents one or more of the preceding character 
let plusRe = /oa+/
// testReLogger(plusRe, sentence);

// ? - represents zero or one character (Optional)
let quesRe = /rc?d/
// testReLogger(quesRe, sentence);

// * - represents zero or more '' e ee eee eeeeeee eeeeeeeeee
let astRe = /ae*d/
// testReLogger(astRe, sentence)

// console.log(sentence.match(astRe))

// | - represent a substitution between one or more characters
let orRe = /g(a|e)t/
// testReLogger(orRe, sentence)


// Exercise -- Generate patterns that matches stings

// --> starts with "t"  has a vowel in between and ends with "g" e.g "teg or tag" (aeiou)
// --> have multiple "o's" and a "l" e.g "ooool ool ooool"
// --> starts with "good" and ends with "boy".

let test1Re = /^t(a|e|i|o|u)g$/
// testReLogger(test1Re, sentence)

let test2Re = /oo+l/ 
// testReLogger(test2Re, sentence)

let test3Re = /^goodboy$/
// testReLogger(test3Re, sentence)

// Character set. - class that helps us group/classify a set of characters be it digit, alphabet (lower, upper), 
// we use []


// digits character set
let digitsRe = /^[3-8]+/
// testReLogger(digitsRe, sentence);

let alphaRe =  /[a-zA-Z0-9]$/
// testReLogger(alphaRe, sentence)

lenRe = /^[a-z]{3}/
// testReLogger(lenRe, sentence)


// Write a Regular expression that validates a sentence that starts with 4Alphabets and ends with 5digits
let testRe = /^[a-zA-Z]{4}(.)+[0-9]{5}$/
// testReLogger(testRe, sentence);

// [^] - Represents a negation.
let negRe = /[^a-z]/
// testReLogger(negRe, sentence);

// \ - Escape special characters.
escRe = /^good\./
// testReLogger(escRe, sentence)


// Classes

// /[0-9]/ --> /\d/
digitsRe = /\d/
// testReLogger(digitsRe, sentence)

let alphaNumRe = /\w/ // [a-zA-Z0-9_]
// testReLogger(alphaNumRe, sentence)

negRe = /\D/ // [^0-9]
// testReLogger(negRe, sentence)

negAlphaNumRe = /\W/ // [^a-zA-Z0-9_]

// Build a regular expression that validates a valid email.

// olayinkafamutimi@gmail.com
// jan12@hotmail.ru

let email = 'olayinkafamutimi@gmail.com'
let emailRe = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/
// testReLogger(emailRe, email);

//Build a regular expression that validates an american phone number;
// (123) 123 1234

let phone = '(123) 123 1234'
let phoneRe = /^[\(][0-9]{3}[\)]\s[0-9]{3}\s[0-9]{4}$/
// testReLogger(phoneRe, phone)

// Build a regular expression that matches the string "(a 123)bbb 47.2022"
let value = "(a 123)bbb 47.2022"
testRe = /^[\()]a\s[0-9]{3}[\)][a-z]{3}\s[0-9]{2}\.[0-9]{4}$/
// testReLogger(testRe, value)

let sentence = 'Good good';
// - modifiers
//i -ignorecase
iRe = /o/ig
// testReLogger(iRe, sentence)

//global g-modifier
// console.log(sentence.match(iRe))


// Write a javascript function to count the number of vowels in a given string;
//es6
const vowelCount = (str) => {
    let re = /[aeiou]/ig
    let result = str.match(re)
    console.log(result);
    return result.length
}

// console.log(vowelCount("The day is bright and clear"));

// Write a javascript function to count the number of digits in a given string;
const numCount = (str) => {
    let re = /[0-9]/g
    let result = str.match(re);
    return result.length
}
// console.log(numCount("I have 0 digits in this 1 sentence"));


// .match() - returns the first match
// .matchAll() - returns all match.


// I i have an expression
// I want to compare two muners

let num1 = 5
let num2 = 10

let result = /^good/.test("good")

// boolean 

console.log(result);

if (!result) {
    console.log("Falsy result value")
} else {
    console.log("Truthy value")
}




















