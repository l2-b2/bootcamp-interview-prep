/*
    Sorting is one of the most common algorithms practiced
    Given an array of numbers in random order, return the array in sorted order from smallest to largest
    Example: sort([5,3,1,4,2]) should return ([1, 2, 3, 4, 5]);
*/

function sort(array) {

}






/*  Do not edit below this line */

var line = '****************************************************************';
var passed = 0;
var failed = 0;

console.log(line);
console.log('sort UNIT TESTS');
console.log(line);

if (JSON.stringify(sort([5, 3, 1, 4, 2])) === JSON.stringify([1, 2, 3, 4, 5])) {
    console.log("Test 1 pass, sort([5, 3, 1, 4, 2] returns [1, 2, 3, 4, 5]");
    passed += 1;
} else {
    console.log("Test 1 failed, sort([5, 3, 1, 4, 2] should return [1, 2, 3, 4, 5]");
    failed += 1;
}

if (JSON.stringify(sort([5, 3, 1, -4, -2])) === JSON.stringify([-4, -2, 1, 3, 5])) {
    console.log("Test 2 pass, sort([5, 3, 1, -4, -2] returns [-4, -2, 1, 3, 5]");
    passed += 1;
} else {
    console.log("Test 2 failed, sort([5, 3, 1, -4, -2] should return [-4, -2, 1, 3, 5]");
    failed += 1;
}

console.log(line);
console.log('TOTAL TESTS PASSED: ' + passed );
console.log('TOTAL TESTS FAILED: ' + failed );
console.log(line);