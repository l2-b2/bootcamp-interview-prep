/*
    A palindrom is a word, phrase, or sequence that reads the same backward as forward
    Given an input string, return true if it is a palindrom, false if it isn't
    Examples:
        isPalindrom('Never odd or even') should return true
        isPalindrom('You are a special snowflake') should return false 
*/

function isPalindrom(string) {
    /*
        Variables Description
        alphabet is a string containing all letters in the alphabet in lower case
        char is a string represeting the current character in the input string we are evaluating
        parsedString is a string containing all the letters in our original string in lower case in the same order
        reverseString is a string containing all the letters in our original string in reversed order
    */
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var char = '';
    var parsedString = '';
    var reverseString = '';

    for (var i = 0; i < string.length; i += 1) {
        // Palindroms are not case sensitive, so we make all letters lower case before we evaluate them
        char = string[i].toLowerCase();

        // We only want to add letters to our parsedString and reverseString
        if (alphabet.indexOf(char) > -1) {
            parsedString = parsedString + char;
            reverseString = char + reverseString;
        }
    }

    return parsedString === reverseString;
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
