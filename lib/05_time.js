//  Time String Manipulation

/*
    Convert Standard Time to Military Time
    Given input string represeting time in standard format, return the military time equivalent
    Example: toMilitaryTime('11:43 am') should return '23:43'
    Hints:
        you may use Number(string) to convert a string to a number
        you may also use .toString() to convert a number to a string
*/

function toMilitaryTime(standardTime) {

}


/*
    Convert Military Time to Standard Time
    Given input string repsenting time in military format, return the standard time equivalent
    Example: toStandardTime('13:22') should return '01:22 pm'
*/

function toStandardTime(militaryTime) {

}


/*
    Time Addition
    Given input of 2 strings each representing time in standard format, return the sum of the two time in standard format
    Examples:
        timeAddition('01:30 am', '04:30 pm') should return '06:00 pm'
        timeAddition('11:22 am', '11:22 pm') should return '10:44 am'
*/
function timeAddition(time1, time2) {

}






/*  Do not edit below this line */

var line = '****************************************************************';
var passed = 0;
var failed = 0;

console.log(line);
console.log('toMilitaryTime UNIT TESTS');
console.log(line);

if ( toMilitaryTime('11:43 pm') === '23:43') {
    console.log("Test 1 pass, toMilitaryTime('11:43 pm') returns '23:43'");
    passed += 1;
} else {
    console.log("Test 1 failed, toMilitaryTime('11:43 pm') should return '23:43'");
    failed += 1;
}

if ( toMilitaryTime('04:22 am') === '04:22') {
    console.log("Test 2 pass, toMilitaryTime('04:22 am') returns '04:22'");
    passed += 1;
} else {
    console.log("Test 2 failed, toMilitaryTime('04:22 am') should return '04:22'");
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
console.log('toStandardTime UNIT TESTS');
console.log(line);

if ( toStandardTime('03:16') === '03:16 am') {
    console.log("Test 1 pass, toStandardTime('03:16') returns '03:16 am'");
    passed += 1;
} else {
    console.log("Test 1 failed, toStandardTime('03:16') should return '03:16 am'");
    failed += 1;
}

if ( toStandardTime('13:22') === '01:22 pm') {
    console.log("Test 2 pass, toStandardTime('13:22') returns '01:22 pm'");
    passed += 1;
} else {
    console.log("Test 2 failed, toStandardTime('13:22') should return '01:22 pm'");
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
console.log('timeAddition UNIT TESTS');
console.log(line);

if ( timeAddition('01:30 am', '04:30 pm') === '06:00 pm') {
    console.log("Test 1 pass, timeAddition('01:30 am', '04:30 pm') returns '06:00 pm'");
    passed += 1;
} else {
    console.log("Test 1 failed, timeAddition('01:30 am', '04:30 pm') should return '06:00 pm'");
    failed += 1;
}

if ( timeAddition('11:22 am', '11:22 pm') === '10:44 am') {
    console.log("Test 2 pass,  timeAddition('11:22 am', '11:22 pm') returns '10:44 am'");
    passed += 1;
} else {
    console.log("Test 2 failed, timeAddition('11:22 am', '11:22 pm') should return '10:44 am'");
    failed += 1;
}

console.log(line);
console.log('TOTAL TESTS PASSED: ' + passed );
console.log('TOTAL TESTS FAILED: ' + failed );
console.log(line);