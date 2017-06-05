/*
    Make change is a classic problem
    Given an input number representing value and an input array representing available coin denomenations, 
    return all possible ways to make change for the given amount.
    You may assume the coins are ordered in value from smallest to largest.
    Example: makeChange(25, [5, 10, 25]) should return [[5,5,5,5,5], [5,5,5,10], [5, 10, 10], [25]]
*/

// A helper function to ensure we do not have contain duplicate results
function resultsInclude(results, result) {
    for (var i = 0; i < results.length; i += 1) {
        var currentResult = results[i];

        if (currentResult.length == result.length) {
            var isMatch = true;

            for (var j = 0; j < result.length; j += 1) {
                if (result[j] !== currentResult[j]) isMatch = false;
            }

            if (isMatch) return true;
        }
    }

    return false;
}

function makeChange (value, coins) {
    var results = [];
    var coinCombos = [[]];
    var values = [value];
    

    while (values.length > 0) {
        var currentCombo = coinCombos.pop();
        var currentValue = values.pop();
 
        for (var i = 0; i < coins.length; i += 1) {
            var newCombo = (currentCombo.concat([coins[i]])).sort();
            
            if (currentValue > coins[i]) {
                values.push(currentValue - coins[i]);
                coinCombos.push(newCombo);
            } else if (currentValue === coins[i]) {
                if (resultsInclude(results, newCombo) === false) results.push(newCombo);
            }
        }
    }

    return results;
}






/*  Do not edit below this line */

var line = '****************************************************************';
var passed = 0;
var failed = 0;

console.log(line);
console.log('makeChange UNIT TESTS');
console.log(line);

if (JSON.stringify(makeChange(23, [5, 10, 25])) === JSON.stringify([])) {
    console.log("Test 1 pass, makeChange(23, [5, 10, 25]) returns []");
    passed += 1;
} else {
    console.log("Test 1 failed, makeChange(23, [5, 10, 25]) should return []");
    failed += 1;
}

var changes = makeChange(25, [5, 10, 25]);
var acceptedResult = JSON.stringify([[5, 5, 5, 5, 5], [10, 5, 5, 5], [10, 10, 5], [25]].sort());
var acceptedResult2 = JSON.stringify([[5, 5, 5, 5, 5], [5, 5, 5, 10], [5, 10, 10], [25]].sort());

if (JSON.stringify(changes.sort()) === acceptedResult) {
    console.log("Test 2 pass, makeChange(25, [5, 10, 25]) returns all the elements in [[5,5,5,5,5], [5,5,5,10], [5, 10, 10], [25]]");
    passed += 1;
} else {
    console.log("Test 2 failed, makeChange(25, [5, 10, 25]) should returns all the elements in [[5,5,5,5,5], [5,5,5,10], [5, 10, 10], [25]]");
    failed += 1;
}

console.log(line);
console.log('TOTAL TESTS PASSED: ' + passed );
console.log('TOTAL TESTS FAILED: ' + failed );
console.log(line);