// Problem - Palindromic Numbers
//
// The number 47 has an interesting characteristic.
//
// If you take the number, plus its reverse (47 => 74) and then add them together to a number (47+74=121) the resulting sum is a palindrome
//
// Starting at 0, find the first 25 numbers that have this same characteristic as 47, but limit it to where the palindrome is greater than 1000.
//
// Collect the results in an array. Be sure that you're collecting the interesting numbers like 47, not the palindromic sums.
//
// Bonus points if you can do this without converting numbers to strings/arrays.
//
// Limit your online searches to core language documentation only.



// declare a result array, result
// declare a starting number to check, numberToCheck
// check that number
//  Assign the sum of the numberToCheck and the reverse of the numberToCheck to a variable, sumToCheck
//  Check if sumToCheck is a palidrome:
//    The first digit and the last digit must match
//    The second digit and the second to last digit must match
//    etc.
//  If the sumToCheck is a palidrome and over 1000, push it into result
// add 1 to the numberToCheck and check it again
// keep checking the numberToCheck until the length of result is 25

// Looked up https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration for this:
// do {
//   statement
// } while (condition);


// First iteration:
const result = [];
let numberToCheck = 0;

getPalindromicNumbers = () => {
  do {
    result.push(numberToCheck)
    numberToCheck++
  } while (result.length < 25)
  return result
}

console.log(getPalindromicNumbers(numberToCheck))