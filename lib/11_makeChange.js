/*
    Make change is a classic problem
    Given an input number representing value and an input array representing available coin denomenations, 
    return all possible ways to make change for the given amount.
    You may assume the coins are ordered in value from smallest to largest.
    Example: makeChange(25, [5, 10, 25]) should return [[5,5,5,5,5], [5,5,5,10], [5, 10, 10], [25]]
*/

function makeChange (value, coins) {

}






/*  Do not edit below this line */

var line = '****************************************************************';
var passed = 0;
var failed = 0;

console.log(line);
console.log('makeChange UNIT TESTS');
console.log(line);

if (JSON.stringify(makeChange(23, [5, 10, 25])) === JSON.stringify([])) {
    console.log("Test 1 pass, makeChange(23, [5, 10, 25]) returns []");
    passed += 1;
} else {
    console.log("Test 1 failed, makeChange(23, [5, 10, 25]) should return []");
    failed += 1;
}

var changes = makeChange(25, [5, 10, 25]);
var acceptedResult = JSON.stringify([[5, 5, 5, 5, 5], [10, 5, 5, 5], [10, 10, 5], [25]].sort());
var acceptedResult2 = JSON.stringify([[5, 5, 5, 5, 5], [5, 5, 5, 10], [5, 10, 10], [25]].sort());

if ((JSON.stringify(changes.sort()) === acceptedResult) || (JSON.stringify(changes.sort()) === acceptedResult2))  {
    console.log("Test 2 pass, makeChange(25, [5, 10, 25]) returns all the elements in [[5,5,5,5,5], [5,5,5,10], [5, 10, 10], [25]]");
    passed += 1;
} else {
    console.log("Test 2 failed, makeChange(25, [5, 10, 25]) should returns all the elements in [[5,5,5,5,5], [5,5,5,10], [5, 10, 10], [25]]");
    failed += 1;
}

console.log(line);
console.log('TOTAL TESTS PASSED: ' + passed );
console.log('TOTAL TESTS FAILED: ' + failed );
console.log(line);