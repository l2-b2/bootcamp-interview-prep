/*
    The digital root (also repeated digital sum) of a non-negative integer is the (single digit) value obtained by
    an iterative process of summing digits, on each iteration using the result from the previous iteration to compute a digit sum.
    The process continues until a single-digit number is reached.

    For example, the digital root of 65536 is 7, because 6 + 5 + 5 + 3 + 6 = 25 and 2 + 5 = 7.
*/

function digitalRoot(number) {
    var digitalSum = 0;

    while (number > 0) {
        // We extract the digits from the number 1 at a time and add it to digitalSum
        digitalSum += number % 10;
        number = Math.floor(number / 10);

        // When we have extracted all the digits and our sum is not single digit, we reset number with our digitalSum, and reset digitalSum back to 0
        if (number === 0 && digitalSum > 9) {
            number = digitalSum;
            digitalSum = 0;
        }
    }

    return digitalSum;
}

/*
    Math approach, because digital root of 10 = 1, and digital root of 10 to the nth power equals 1 to the nth power, which is still one
    We can simply mod the number by base - 1, the base in our case is 10.  Take the number 111 for example:
    100 % 9 === 1, 10 % 9 === 1, and 1 % 9 === 1
    100 % 9 + 10 % 9 + 1 % 9 === (100 + 10 + 1) % 9 === 3 same as 100 * 2 + 10 * 2 + 1 * 2 === (100 + 10 + 1) * 2
*/

function digitalRoot2(number) {
    if (number % 9 === 0) {
        return 9;
    } else {
        return number % 9;
    }
}






/*  Do not edit below this line */

var line = '****************************************************************';
var passed = 0;
var failed = 0;

console.log(line);
console.log('digitalRoot UNIT TESTS');
console.log(line);

if (digitalRoot(9) === 9) {
    console.log("Test 1 pass, digitalRoot(9) returns 9");
    passed += 1;
} else {
    console.log("Test 1 failed, digitalRoot(9) should return 9");
    failed += 1;
}

if (digitalRoot(22) === 4) {
    console.log("Test 2 pass, digitalRoot(22) returns 4");
    passed += 1;
} else {
    console.log("Test 2 failed, digitalRoot(22) should return 4");
    failed += 1;
}

if (digitalRoot(65536) === 7) {
    console.log("Test 3 pass, digitalRoot(65536) returns 7");
    passed += 1;
} else {
    console.log("Test 3 failed, digitalRoot(65536) should return 7");
    failed += 1;
}

console.log(line);
console.log('TOTAL TESTS PASSED: ' + passed );
console.log('TOTAL TESTS FAILED: ' + failed );
console.log(line);