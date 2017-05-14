/*
    Largest Sum
    Given an array of numbers, return the largest sum by any two numbers
    Example: largestSum([8, 2, 4, 6]) should return 14
*/

function largestSum(array) {
    var largestNumber;
    var secondLargestNumber;

    // Determine our default values by comparing the first and second number
    if (array[0] > array[1]) {
        largestNumber = array[0];
        secondLargestNumber = array[1];
    }else{
        largestNumber = array[1];
        secondLargestNumber = array[0];
    }

    // Iterate through our array while keeping track of the two largest numbers
    for (var i = 2; i < array.length; i += 1) {
        if (array[i] > largestNumber) {
            secondLargestNumber = largestNumber;
            largestNumber = array[i];
        }else if (array[i] > secondLargestNumber) {
            secondLargestNumber = array[i];
        }
    };

    return largestNumber + secondLargestNumber;
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