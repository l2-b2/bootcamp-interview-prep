/*
    Fibonacci Sequence is characterized by the fact that every number after the first two is the sum of the two preceding ones
    Except the first two numbers in the sequence
    The Fibonacci Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
    Given input number n, return the nth fibonacci number in the sequence
    Examples:
        nthFibonacci(5) should return 3
        nthFibonacci(22) should return 10946
*/

function nthFibonacci(n) {

}






/*  Do not edit below this line */

var line = '****************************************************************';
var passed = 0;
var failed = 0;

console.log(line);
console.log('nthFibonacci UNIT TESTS');
console.log(line);

if (nthFibonacci(5) === 3) {
    console.log("Test 1 pass, nthFibonacci(5) returns 3");
    passed += 1;
} else {
    console.log("Test 1 failed, nthFibonacci(5) should return 3");
    failed += 1;
}

if (nthFibonacci(22) === 10946) {
    console.log("Test 2 pass, nthFibonacci(22) returns 10946");
    passed += 1;
} else {
    console.log("Test 2 failed, nthFibonacci(22) should return 10946");
    failed += 1;
}

if (nthFibonacci(1) === 0) {
    console.log("Test 3 pass, nthFibonacci(1) returns 0");
    passed += 1;
} else {
    console.log("Test 3 failed, nthFibonacci(1) should return 0");
    failed += 1;
}

console.log(line);
console.log('TOTAL TESTS PASSED: ' + passed );
console.log('TOTAL TESTS FAILED: ' + failed );
console.log(line);