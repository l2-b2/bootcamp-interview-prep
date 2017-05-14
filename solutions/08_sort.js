/*
    Sorting is one of the most common algorithms practiced
    Given an array of numbers in random order, return the array in sorted order from smallest to largest
    Example: sort([5,3,1,4,2]) should return ([1, 2, 3, 4, 5]);
*/

/*
    This particular solution is called a bubble sort.  Although it maybe one of the slowest algorithms to sort an array, it is easiest to understand
    If you are interested in other sorting algorithms, look up merge sort, and quicksort.
*/

function sort(array) {
    // Makes a copy of the array for us to perform our sorting on
    var sortedArray = array.slice(0);
    var sorted = false;
    var temp;

    // Shortcut to write sorted === false
    while (!sorted) {
        // Before each iteration through our array, we first set its sorted status to true
        sorted = true;

        for (var i = 0; i < array.length - 1; i += 1) {
            if (sortedArray[i] > sortedArray[i + 1]) {
                // If we catch any element in the array that is greater than the element in its next index, we swap them
                // by using a temporary variable temp
                sorted = false;
                temp = sortedArray[i];
                sortedArray[i] = sortedArray[i + 1];
                sortedArray[i + 1] = temp;
            }
        }
    }

    return sortedArray;
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