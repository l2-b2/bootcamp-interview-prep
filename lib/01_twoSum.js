/* 
    Two Sum
    Given inputs of an array of sorted numbers, and a number (target)
    Return true if there are a pair of integers in the array that sum up to target, false otherwise
    Examples:
        twoSum([1, 3, 5, 7], 6) should return true
        twoSum([1, 3, 5, 7], 2) should return false
*/

function twoSum (array, target) {

}




/*  Do not edit below this line */

var line = '***********************************************************************';
var passed = 0;
var failed = 0;

console.log(line);
console.log('twoSum UNIT TESTS');
console.log(line);

if (twoSum([1, 3, 5, 7], 6) === true) {
    console.log('Test 1 pass, twoSum([1 ,3, 5, 7], 6) returns true');
    passed += 1;
} else {
    console.log('Test 1 failed, twoSum([1 ,3, 5, 7], 6) should return true');
    failed += 1;
}

if (twoSum([1, 3, 5, 7], 2) === false) {
    console.log('Test 2 pass, twoSum([1 ,3, 5, 7], 2) returns false');
    passed += 1;
} else {
    console.log('Test 2 failed, twoSum([1 ,3, 5, 7], 2) should return false');
    failed += 1;
}

if (twoSum([-3, 3, 5, 7], 4) === true) {
    console.log('Test 3 pass, twoSum([-3 ,3, 5, 7], 4) returns true');
    passed += 1;
} else {
    console.log('Test 3 failed, twoSum([-3 ,3, 5, 7], 4) should return true');
    failed += 1;
}

if (twoSum([-1, -3, 5, 7], 8) === false) {
    console.log('Test 4 pass, twoSum([-1 ,-3, 5, 7], 8) returns false');
    passed += 1;
} else {
    console.log('Test 4 failed, twoSum([-1 ,-3, 5, 7], 8) should return false');
    failed += 1;
}

console.log(line);
console.log('TOTAL TESTS PASSED: ' + passed );
console.log('TOTAL TESTS FAILED: ' + failed );
console.log(line);
