/*
    Largest Sum
    Given an array of numbers, return the largest sum by any two numbers
    Example: largestSum([8, 2, 4, 6]) should return 14
*/

function largestSum(array) {

}






/*  Do not edit below this line */

var line = '***********************************************************************';
var passed = 0;
var failed = 0;

console.log(line);
console.log('largestSum UNIT TESTS');
console.log(line);

if (largestSum([8, 2, 4, 6]) === 14) {
    console.log('Test 1 pass, largestSum([8, 2, 4, 6]) returns 14');
    passed += 1;
} else {
    console.log('Test 1 failed, largestSum([8, 2, 4, 6]) should return 14');
    failed += 1;
}

if (largestSum([-8, 2, 0, 6]) === 8) {
    console.log('Test 2 pass, largestSum([-8, 2, 0, 6]) returns 8');
    passed += 1;
} else {
    console.log('Test 2 failed, largestSum([-8, 2, 0, 6]) should return 8');
    failed += 1;
}

console.log(line);
console.log('TOTAL TESTS PASSED: ' + passed );
console.log('TOTAL TESTS FAILED: ' + failed );
console.log(line);