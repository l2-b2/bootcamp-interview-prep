/*
    The overlapping Rectangles practices your ability to represent a grid using nested arrays
    Given input of 2 array of arrays represeting two rectangles on a x-y grid, find the overlapping area of the two rectangles
    The first element of each array represent the indices of the lower left corner of a rectangle, 
    and the 2nd element represent the indices, upper right corner of the rectangle
    On a x-y grid, a square retangle that has edge length of 2 starting from [0,0] would be represented as such: [[0,0], [2,2]]
    Example: overlappingRectangles([[0,0], [2,2]], [[1,1], [3,3]]) should return 1;
*/

function overlappingRectangles(rectangle1, rectangle2) {
    var lowerLeft1 = rectangle1[0];
    var upperRight1 = rectangle1[1];
    var lowerLeft2 = rectangle2[0];
    var upperRight2 = rectangle2[1];
    var maxLowerLeftX = Math.max(lowerLeft1[0], lowerLeft2[0]);
    var maxLowerLeftY = Math.max(lowerLeft1[1], lowerLeft2[1]);
    var minUpperRightX = Math.min(upperRight1[0], upperRight2[0]);
    var minUpperRightY = Math.min(upperRight1[1], upperRight2[1]);

    if ((minUpperRightX > maxLowerLeftX && minUpperRightY > maxLowerLeftY) === true) {
        var width = minUpperRightX - maxLowerLeftX;
        var height = minUpperRightY - maxLowerLeftY;

        return width * height;
    } else {
        return 0;
    }
}






/*  Do not edit below this line */

var line = '****************************************************************';
var passed = 0;
var failed = 0;

console.log(line);
console.log('overlappingRectangles UNIT TESTS');
console.log(line);

var rectangle1 = [[0, 0], [2, 2]];
var rectangle2 = [[1, 1], [3, 3]];
var rectangle3 = [[3, 3], [4, 4]];
var rectangle4 = [[0, 0], [4, 4]];

if (overlappingRectangles(rectangle1, rectangle2) === 1) {
    console.log("Test 1 pass, overlappingRectangles([[0, 0], [2, 2]], [[1, 1], [3, 3]]) returns 1");
    passed += 1;
} else {
    console.log("Test 1 failed, overlappingRectangles([[0, 0], [2, 2]], [[1, 1], [3, 3]]) should return 1");
    failed += 1;
}

if (overlappingRectangles(rectangle1, rectangle3) === 0) {
    console.log("Test 2 pass, overlappingRectangles([[0, 0], [2, 2]], [[3, 3], [4, 4]]) returns 0");
    passed += 1;
} else {
    console.log("Test 2 failed, overlappingRectangles([[0, 0], [2, 2]], [[3, 3], [4, 4]]) should return 0");
    failed += 1;
}

if (overlappingRectangles(rectangle2, rectangle4) === 4) {
    console.log("Test 3 pass, overlappingRectangles([[1, 1], [3, 3]], [[0, 0], [4, 4]]) returns 4");
    passed += 1;
} else {
    console.log("Test 3 failed, overlappingRectangles([[1, 1], [3, 3]], [[0, 0], [4, 4]]) should return 4");
    failed += 1;
}

console.log(line);
console.log('TOTAL TESTS PASSED: ' + passed );
console.log('TOTAL TESTS FAILED: ' + failed );
console.log(line);