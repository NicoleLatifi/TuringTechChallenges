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


// break number up
//  iterate through the object and if the number minus the roman numberal number equals a positive integer, add it to an array
// concat together the roman numberal letters
//  iterate through the numberArray

// iteration 3: use broken up input number to concat the roman Numeral output
let numberArray = []
let result = ""
let rNNumbers = Object.keys(romanNumerals)

function toRoman(inputNum) {
  breakUpNumber(inputNum, rNNumbers)
  numberArray.forEach(number => {
    result += romanNumerals[parseInt(number)]
    console.log(result)
  })
  return result
}

function breakUpNumber(inputNum, rNNumbers) {
  if (rNNumbers.length === 0) {
    return ""
  } else {
    const remainingNum = inputNum - rNNumbers[rNNumbers.length - 1]
    // if the remaining number is positive, push the roman numeral number into numberArray and call the function again with the remaining number
    // if the remaining number is negative, call the function again with the original inputNum
    if (remainingNum >= 0) {
      numberArray.push(rNNumbers[rNNumbers.length - 1])
      console.log(numberArray)
      rNNumbers.pop()
      return breakUpNumber(remainingNum, rNNumbers)
    } else {
      rNNumbers.pop()
      return breakUpNumber(inputNum, rNNumbers)
    }
  }
}

// iteration 2: break up the input number into rommanNumeral numbers that add up to it
// let numberArray = []
// let result = ""
// let rNNumbers = Object.keys(romanNumerals)
//
// function toRoman(inputNum) {
//   breakUpNumber(inputNum, rNNumbers)
//   return result
// }
//
// function breakUpNumber(inputNum, rNNumbers) {
//   if (rNNumbers.length === 0) {
//     return ""
//   } else {
//     const remainingNum = inputNum - rNNumbers[rNNumbers.length - 1]
//     // if the remaining number is positive, push the roman numeral number into numberArray and call the function again with the remaining number
//     // if the remaining number is negative, call the function again with the original inputNum
//     if (remainingNum >= 0) {
//       numberArray.push(rNNumbers[rNNumbers.length - 1])
//       console.log(numberArray)
//       rNNumbers.pop()
//       return breakUpNumber(remainingNum, rNNumbers)
//     } else {
//       rNNumbers.pop()
//       return breakUpNumber(inputNum, rNNumbers)
//     }
//   }
// }

// iteration 1: find all romanNumeral numbers that are less than or equal to the input number
// let numberArray = []
// let result = ""
// const rNNumbers = Object.keys(romanNumerals)
// console.log(rNNumbers)
//
// function toRoman(inputNum) {
//   for (let i = 12; i >= 0; i--) {
//     const remainingNum = inputNum - rNNumbers[i]
//     if (remainingNum >= 0 && Number.isInteger(remainingNum)) {
//       numberArray.push(rNNumbers[i])
//     }
//     console.log(rNNumbers[i])
//     console.log(numberArray)
//   }
// }


console.log(toRoman(116));  // should return "CXVI" [100, 10, 5, 1,]
// console.log(toRoman(128)) // should return "CXXVIII" [100, 10, 10, 5, 1, 1, 1]
// console.log(toRoman(2000)); // should return "MM" [1000, 1000]
// console.log(toRoman(2017)); // should return "MMXVII" [1000, 1000, 10, 5, 1, 1]
// console.log(toRoman(1999)); // should return "MCMXCIX" [1000, 900, 90, ]
// ```
//
// Can this be solved another way?
// function toRoman(num) {
//   let resultArray = [];
//   let numbers = num.toString().split('')
//   // let onesNumber = numbers[numbers.length - 1]
//   // let tensNumber = numbers[numbers.length - 2]
//   // let hundredsNumber = numbers[numbers.length - 3]
//   // let thousandsNumber = numbers[numbers.length - 4]
//   let amountOfNumbers = numbers.length - 1
//   let numberToAdd = numbers[amountOfNumbers]
//   numbers = numbers.splice(numbers.length[0], amountOfNumbers)
//   console.log(numberToAdd)
//   resultArray.push(romanNumerals[numberToAdd])
//   console.log(resultArray)
//   console.log(numbers)
// }

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
