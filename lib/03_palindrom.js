/*
    A palindrom is a word, phrase, or sequence that reads the same backward as forward
    Given an input string, return true if it is a palindrom, false if it isn't
    Examples:
        isPalindrom('Never odd or even') should return true
        isPalindrom('You are a special snowflake') should return false 
*/

function isPalindrom (string) {

}






/*  Do not edit below this line */

var line = '***********************************************************************';
var passed = 0;
var failed = 0;

console.log(line);
console.log('isPalindrom UNIT TESTS');
console.log(line);

if (isPalindrom('rotator') === true) {
    console.log("Test 1 pass, isPalindrom('rotator') returns true");
    passed += 1;
} else {
    console.log("Test 1 failed, isPalindrom('rotator') should return true");
    failed += 1;
}

if (isPalindrom('You are a special snowflake') === false) {
    console.log("Test 2 pass, isPalindrom('You are a special snowflake') returns false");
    passed += 1;
} else {
    console.log("Test 2 failed, isPalindrom('You are a special snowflake') should return false");
    failed += 1;
}

if (isPalindrom('Never odd or even') === true) {
    console.log("Test 3 pass, isPalindrom('Never odd or even') returns true");
    passed += 1;
} else {
    console.log("Test 3 failed, isPalindrom('Never odd or even') should return true");
    failed += 1;
}

console.log(line);
console.log('TOTAL TESTS PASSED: ' + passed );
console.log('TOTAL TESTS FAILED: ' + failed );
console.log(line);
