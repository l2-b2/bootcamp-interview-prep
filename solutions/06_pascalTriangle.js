/*
    Pascal's Triangle is a triangular array of the binomial coefficients.  Each row n contain n number of numbers.
    Each number except for the first and last number of each row is the sum of the two numbers directly above it.
    If that confused you do not worry.  It looks like this.
        1
       1 1
      1 2 1
     1 3 3 1
    1 4 6 4 1

    Given input number n, return the nth row of the pascal's triangle
    Example: pascalsTriangle(7) should return [1, 6, 15, 20, 15, 6, 1]
*/

function pascalsTriangle (n) {
    var currentRow = [];
    var previousRow = [];

    for (var row = 1; row <= n; row += 1) {
        // The currentRow of last iteration becomes previous row as we being a new iteration
        // We then reset currentRow to an empty array as we begin a new iteration
        previousRow = currentRow;
        currentRow = [];

        for (var i = 0; i < row; i += 1) {
            if (i === 0 || i === row - 1 ) {
                // We first take care of the edge cases, the first and last index of each row is 1
                currentRow.push(1);
            }else{
                // Otherwise the number at the current index is the sum of the two numbers above it
                // The index of the numbers above the current index are current index and current index - 1
                currentRow.push(previousRow[i] + previousRow[i-1]);
            }
        }
    }

    return currentRow;
}






/*  Do not edit below this line */

var line = '****************************************************************';
var passed = 0;
var failed = 0;

console.log(line);
console.log('pascalsTriangle UNIT TESTS');
console.log(line);

if (JSON.stringify(pascalsTriangle(7)) === JSON.stringify([1, 6, 15, 20, 15, 6, 1])) {
    console.log("Test 1 pass, pascalsTriangle(7)returns [1, 6, 15, 20, 15, 6, 1]");
    passed += 1;
} else {
    console.log("Test 1 failed, pascalsTriangle(7) should return [1, 6, 15, 20, 15, 6, 1]");
    failed += 1;
}

if (JSON.stringify(pascalsTriangle(2)) === JSON.stringify([1, 1])) {
    console.log("Test 2 pass, pascalsTriangle(2)returns [1, 1]");
    passed += 1;
} else {
    console.log("Test 2 failed, pascalsTriangle(2) should return [1, 1]");
    failed += 1;
}

if (JSON.stringify(pascalsTriangle(1)) === JSON.stringify([1])) {
    console.log("Test 3 pass, pascalsTriangle(1)returns [1]");
    passed += 1;
} else {
    console.log("Test 3 failed, pascalsTriangle(1) should return [1]");
    failed += 1;
}

if (JSON.stringify(pascalsTriangle(0)) === JSON.stringify([])) {
    console.log("Test 4 pass, pascalsTriangle(0) returns []");
    passed += 1;
} else {
    console.log("Test 4 failed, pascalsTriangle(0) should return []");
    failed += 1;
}

console.log(line);
console.log('TOTAL TESTS PASSED: ' + passed );
console.log('TOTAL TESTS FAILED: ' + failed );
console.log(line);