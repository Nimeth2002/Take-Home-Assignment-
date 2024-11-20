function countOccurrent(arr, value) {
    let count = 0;  // Initializing the counter to 0
    for (let i = 0; i < arr.length; i++) {   // Loop 
        if (arr[i] === value) {  // Checking if the current element matches the value 
            count++;  // Incrementing the count if the value matches 
        }
    }
    return count;  // Return the count
}  
console.log(countOccurrent([1, 2, 3, 2, 4, 2], 4)); // Output is 1
console.log(countOccurrent([1, 2, 3, 2, 4, 2], 2)); // Output is 3

console.assert(countOccurrent([1, 2, 3, 2, 4, 2], 4) === 1, 'Test Case 1 Failed');  //Check if 4 appears 1 time in the array.
console.assert(countOccurrent([1, 2, 3, 2, 4, 2], 2) === 3, 'Test Case 2 Failed'); //Check if 2 appears in 3 times in an array.
console.assert(countOccurrent([5, 5, 5, 5, 5], 5) === 5, 'Test Case 3 Failed'); //Check if 5 appears 5 times in an array. 
console.assert(countOccurrent([], 3) === 0, 'Test Case 4 Failed');  // Testing an empty array
console.assert(countOccurrent([1, 2, 3, 4, 5], 6) === 0, 'Test Case 5 Failed'); // Value not in array
console.assert(countOccurrent([0, 0, 0, 0, 0], 0) === 5, 'Test Case 6 Failed'); // Array with repeated zeros

console.log("All tests passed!");