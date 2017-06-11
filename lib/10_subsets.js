/*
    A subset is a set of which all the elements are contained in another set, it also tests your understanding of arrays
    Given an array, return the array containing all unique subsets
    Example: subsets(['a', 'b', 'c']) should return [[], ['a'], ['b'], ['a', 'b'], ['c'], ['a', 'c'], ['b', 'c'], ['a', 'b', 'c']]
*/

function subsets(array) {

}






/*  Do not edit below this line */

var line = '****************************************************************';
var passed = 0;
var failed = 0;

console.log(line);
console.log('subsets UNIT TESTS');
console.log(line);

if (JSON.stringify(subsets([])) === JSON.stringify([[]])) {
    console.log("Test 1 pass, subsets([]) returns [[]]");
    passed += 1;
} else {
    console.log("Test 1 failed, subsets([]) should return [[]]");
    console.log(subsets([]));
    failed += 1;
}

var subsetsResult = subsets(['a', 'b', 'c']);
if (JSON.stringify(subsetsResult.sort()) === JSON.stringify([[], ['a'], ['b'], ['a', 'b'], ['c'], ['a', 'c'], ['b', 'c'], ['a', 'b', 'c']].sort())) {
    console.log("Test 2 pass, subsets(['a', 'b', 'c']) returns all the elements in [[], ['a'], ['b'], ['a', 'b'], ['c'], ['a', 'c'], ['b', 'c'], ['a', 'b', 'c']]");
    passed += 1;
} else {
    console.log("Test 2 failed, subsets(['a', 'b', 'c']) should return all the elements in [[], ['a'], ['b'], ['a', 'b'], ['c'], ['a', 'c'], ['b', 'c'], ['a', 'b', 'c']]");
    failed += 1;
}

subsetsResult = subsets(['a', 'b', 'c', 'd']);
if (JSON.stringify(subsetsResult.sort()) === JSON.stringify([[], ['a'], ['b'], ['a', 'b'], ['c'], ['a', 'c'], ['b', 'c'], ['a', 'b', 'c'], ['d'], ['a', 'd'], ['b', 'd'], ['a', 'b', 'd'], ['c', 'd'], ['a', 'c', 'd'], ['b', 'c', 'd'], ['a', 'b', 'c', 'd']].sort())) {
    console.log("Test 3 pass, subsets(['a', 'b', 'c', 'd']) returns [[], ['a'], ['b'], ['a', 'b'], ['c'], ['a', 'c'], ['b', 'c'], ['a', 'b', 'c'], ['d'], ['a', 'd'], ['b', 'd'], ['a', 'b', 'd'], ['c', 'd'], ['a', 'c', 'd'], ['b', 'c', 'd'], ['a', 'b', 'c', 'd']");
    passed += 1;
} else {
    console.log("Test 3 failed, subsets(['a', 'b', 'c', 'd']) should return [[], ['a'], ['b'], ['a', 'b'], ['c'], ['a', 'c'], ['b', 'c'], ['a', 'b', 'c'], ['d'], ['a', 'd'], ['b', 'd'], ['a', 'b', 'd'], ['c', 'd'], ['a', 'c', 'd'], ['b', 'c', 'd'], ['a', 'b', 'c', 'd']");
    failed += 1;
}

console.log(line);
console.log('TOTAL TESTS PASSED: ' + passed );
console.log('TOTAL TESTS FAILED: ' + failed );
console.log(line);