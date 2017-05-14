/* 
    Two Sum
    Given inputs of an array of sorted numbers, and a number (target)
    Return true if there are a pair of integers in the array that sum up to target, false otherwise
    Examples:
        twoSum([1, 3, 5, 7], 6) should return true
        twoSum([1, 3, 5, 7], 2) should return false
*/

function twoSum(array, target) {
    var sum;

    // Here we use a nested loop to iterate through all possible sums by 2 elements in the array
    for (var i = 0; i < array.length - 1; i += 1) {
        // The second index always start 1 bigger than index because we do not want the same number to be added with itself
        for (var j = i + 1; j < array.length; j += 1) {
            sum = array[i] + array[j];

            if (sum === target) {
                return true;
            }
        }
    }

    return false;
}

/*
    Since the input array is sorted, we know that the array always contain the smaller number in the lower index than the higher index
    Here we start our search from both ends of the array and adjust their position based on how their sum compare with our target
    If the sum of our small number and big number is greater than target, we reduce the right index to lower our sum
    If the sum of our small number and big number is lesser than the target, we advance our left index to increase our sum
    This will allow us to find the result in the least number of calculations possible
*/

function twoSum2(array, target) {
    var leftIndex = 0;
    var rightIndex = array.length - 1;
    var sum;

    while (leftIndex < rightIndex) {
        sum = array[leftIndex] + array[rightIndex];
        if (sum === target) {
            return true;
        }else if (sum > target) {
            rightIndex -= 1;
        }else{
            leftIndex += 1;
        }
    }

    return false;
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
    console.log('Test 3 pass, twoSum([-3 ,3, 5, 7], 4) should return true');
    failed += 0;
}

if (twoSum([-1, -3, 5, 7], 8) === false) {
    console.log('Test 4 pass, twoSum([-1 ,-3, 5, 7], 8) returns true');
    passed += 1;
} else {
    console.log('Test 4 pass, twoSum([-1 ,-3, 5, 7], 8) should return true');
    failed += 1;
}

console.log(line);
console.log('TOTAL TESTS PASSED: ' + passed );
console.log('TOTAL TESTS FAILED: ' + failed );
console.log(line);

// Reset Test
console.log();
console.log ();
passed = 0;
failed = 0;

console.log(line);
console.log('twoSum2 UNIT TESTS');
console.log(line);

if (twoSum2([1, 3, 5, 7], 6) === true) {
    console.log('Test 1 pass, twoSum2([1 ,3, 5, 7], 6) returns true');
    passed += 1;
} else {
    console.log('Test 1 failed, twoSum2([1 ,3, 5, 7], 6) should return true');
    failed += 1;
}

if (twoSum2([1, 3, 5, 7], 2) === false) {
    console.log('Test 2 pass, twoSum2([1 ,3, 5, 7], 2) returns false');
    passed += 1;
} else {
    console.log('Test 2 failed, twoSum2([1 ,3, 5, 7], 2) should return false');
    failed += 1;
}

if (twoSum2([-3, 3, 5, 7], 4) === true) {
    console.log('Test 3 pass, twoSum2([-3 ,3, 5, 7], 4) returns true');
    passed += 1;
} else {
    console.log('Test 3 pass, twoSum2([-3 ,3, 5, 7], 4) should return true');
    failed += 0;
}

if (twoSum2([-1, -3, 5, 7], 8) === false) {
    console.log('Test 4 pass, twoSum2([-1 ,-3, 5, 7], 8) returns false');
    passed += 1;
} else {
    console.log('Test 4 pass, twoSum2([-1 ,-3, 5, 7], 8) should return false');
    failed += 1;
}

console.log(line);
console.log('TOTAL TESTS PASSED: ' + passed );
console.log('TOTAL TESTS FAILED: ' + failed );
console.log(line);
