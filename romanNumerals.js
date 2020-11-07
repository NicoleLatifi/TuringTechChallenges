// # Problem - Roman Numerals
//
// Write a recursive function that converts an integer into a string such that the number is represented in Roman Numerals in the most efficient way.
//
// For example, the number `4` could be written as `IIII` but it's more efficient to use `IV`since that's a shorter string.
//
// Assume no number is greater than 4,000.
//
// Here are the Roman Numeral equivalents you'll need to know:
// - M=1000
// - CM=900
// - D=500
// - CD=400
// - C=100
// - XC=90
// - L=50
// - XL=40
// - X=10
// - IX=9
// - V=5
// - IV=4
// - I=1
//
// ## JS Starter Code
// ```js
const romanNumerals = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I'
}

function toRoman(num) {
  let resultArray = [];
  let numbers = num.toString().split('')
  // let onesNumber = numbers[numbers.length - 1]
  // let tensNumber = numbers[numbers.length - 2]
  // let hundredsNumber = numbers[numbers.length - 3]
  // let thousandsNumber = numbers[numbers.length - 4]
  let amountOfNumbers = numbers.length - 1
  let numberToAdd = numbers[amountOfNumbers]
  numbers = numbers.splice(numbers.length[0], amountOfNumbers)
  console.log(numberToAdd)
  resultArray.push(romanNumerals[numberToAdd])
  console.log(resultArray)
  console.log(numbers)
}

console.log(toRoman(1));
console.log(toRoman(128));  // should return "CXXVIII"
console.log(toRoman(2000)); // should return "MM"
console.log(toRoman(2017)); // should return "MMXVII"
console.log(toRoman(1999)); // should return "MCMXCIX"
// ```
//
// ## Ruby Starter Code
// ```rb
// def to_roman(num)
//   # your code goes here
// end
//
// puts to_roman(128)   # should return "CXXVIII"
// puts to_roman(2000)  # should return "MM"
// puts to_roman(2017)  # should return "MMXVII"
// puts to_roman(1999)  # should return "MCMXCIX"
// ```
//
// # Instructions
//
// 1. Copy this markdown and paste in your own, privte gist
// 2. In your private gist, fill out the questions below
// 4. Submit by the due time as instructed in Zoom
//
// Do not publish your code on a public repl.it or repo or other public means.
//
// ## Rewrite the question in your own words:
//
//
// ## What assumptions will you make about this problem if you cannot ask any more clarifying questions? What are your reasons for making those assumptions?
//
//
// ## What are your initial thoughts about this problem? (high level design, 2-3 sentences)
//
//
// ## How would you identify the elements of this problem?
//
// - [ ] Searching of Data
// - [ ] Sorting of Data
// - [ ] Pattern Recognition
// - [ ] Build/Navigate a Grid
// - [ ] Math
// - [ ] Language API knowledge
// - [ ] Optimization
//
//
// ## Which data structure(s) do you think you'll use? What pros/cons do you see with that choice?
//
//
// ## Write out a few lines of initial pseudocode: (mid-level design, NOT REAL CODE)
//
// ## Write out any implementation code OR link to repl
//
// ## What is the Big O complexity of your solution?
