/*
    Caesar is considered to be one of the first persons to have ever employed encryption for the sake of securing messages.
    Caesar decided that shifting each letter in the message would be his standard algorithm.
    Given inputs a string, and a number shift, return a new encrypted string by shifting each letter of the sting by shift number of places
    Example: caesarCipher('RETURN TO ROME', 3) should return 'UHWXUQ WR URPH'

    To reduce complexity of the problem, you may assume every character in the string will be uppercase.
*/

function caesarCipher (string, shift) {
    /*
        Variables Description
        alphabet is a string contains the alphabet letters in upper case
        encrptedString is a string where we will store our result after shift has been made
        char is a string we use to store the current character being encrypted
        charPosition is a number representing the position of char in the alphabet
        encryptedPosition is a number representing the position of the encryptedCharacter after the shift
    */
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var encryptedString = '';
    var char = '';
    var charPosition;
    var encryptedPosition;

    for (var i = 0; i < string.length; i += 1) {
        // We first check if the charactre we are on is a letter
        char = string[i];
        charPosition = alphabet.indexOf(char);
        
        // If it is a letter, shift the character's position in the alphabet by shift number
        // We then mod it by 26 which is the number of letters in the alphabet to catch overflow situations
        if (charPosition > -1) {
            // 26 is added to allow shift in the opposit direction when shift is a negative number
            encryptedPosition = (charPosition + shift + 26) % 26;
            encryptedString = encryptedString + alphabet[encryptedPosition];
        }else{
            encryptedString = encryptedString + char;
        }
    }

    return encryptedString;
}






/*  Do not edit below this line */

var line = '****************************************************************';
var passed = 0;
var failed = 0;

console.log(line);
console.log('caesarCipher UNIT TESTS');
console.log(line);

if (caesarCipher('RETURN TO ROME', 3) === 'UHWXUQ WR URPH') {
    console.log("Test 1 pass, caesarCipher('RETURN TO ROME', 3) returns 'UHWXUQ WR URPH'");
    passed += 1;
} else {
    console.log("Test 1 failed, caesarCipher('RETURN TO ROME', 3) should return 'UHWXUQ WR URPH'");
    failed += 1;
}

if (caesarCipher('XYZ', 3) === 'ABC') {
    console.log("Test 2 pass, caesarCipher('XYZ', 3) returns 'ABC'");
    passed += 1;
} else {
    console.log("Test 2 failed, caesarCipher('XYZ', 3) should return 'ABC'");
    failed += 1;
}

if (caesarCipher('ABC', -3) === 'XYZ') {
    console.log("Test 3 pass, caesarCipher('ABC', -3) returns 'XYZ'");
    passed += 1;
} else {
    console.log("Test 3 failed, caesarCipher('ABC', -3) should return 'XYZ'");
    failed += 1;
}

console.log(line);
console.log('TOTAL TESTS PASSED: ' + passed );
console.log('TOTAL TESTS FAILED: ' + failed );
console.log(line);