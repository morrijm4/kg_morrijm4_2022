const { processIntegers } = require('../src/helpers.js')

// Test 1: Single digit numbers
let test1 = (processIntegers(['1', '2', '3']) === "One,Two,Three")
console.log("Test 1: Single digit numbers... " + (test1 ? "PASSED" : "FAILED"))

// Test 2: Multiple digit numbers
let test2 = (processIntegers(['12', '287', '3098']) === "OneTwo,TwoEightSeven,ThreeZeroNineEight")
console.log("Test 2: Multiple digit numbers... " + (test2 ? "PASSED" : "FAILED"))

// Test 3: Negative numbers
let test3 = (processIntegers(['-12', '-287', '-3098']) === "NegativeOneTwo,NegativeTwoEightSeven,NegativeThreeZeroNineEight")
console.log("Test 3: Negative numbers... " + (test3 ? "PASSED" : "FAILED"))

// Test 4: Invalid input
let test4 = (processIntegers(['a', 'ab', '-30a8']) === "NaN,NaNNaN,NegativeThreeZeroNaNEight")
console.log("Test 4: Invalid input... " + (test4 ? "PASSED" : "FAILED"))

// Test 5: No arguments
let test5 = (processIntegers([]) === "")
console.log("Test 5: No arguments... " + (test5 ? "PASSED" : "FAILED"))