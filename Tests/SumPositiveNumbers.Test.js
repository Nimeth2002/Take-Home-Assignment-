function sumPositiveNumbers(arr) {
    let sum = 0; // Initializing sum to 0 
    for (let i = 0; i < arr.length; i++) { // Loop through the array
        if (arr[i] > 0) { // Check if the number is positive
            sum += arr[i]; // Add positive number to sum
        }
    }
    return sum; // Return the total sum of positive numbers 
}

console.log(sumPositiveNumbers([-1, 4, -3, 5])); // Output is 9 
//if only negative numbers are only added it will return 0 

console.assert(sumPositiveNumbers([1, 2, 3, 4, 5]) === 15, 'Test Case 1 Failed'); //Check if the function sumPositiveNumbers correctly sums the positive numbers in the array [1, 2, 3, 4, 5], expecting a result of 15.
console.assert(sumPositiveNumbers([-1, -2, -3, -4, -5]) === 0, 'Test Case 2 Failed'); // Only negatives
console.assert(sumPositiveNumbers([0, -1, -2, 3, 4]) === 7, 'Test Case 3 Failed'); // Mix of positive, negative, and zero
console.assert(sumPositiveNumbers([100, -50, 25]) === 125, 'Test Case 4 Failed'); // Large positive and negative values
console.assert(sumPositiveNumbers([0, 0, 0]) === 0, 'Test Case 5 Failed'); // Array of zeros
console.assert(sumPositiveNumbers([]) === 0, 'Test Case 6 Failed'); // Empty array should return 0
console.assert(sumPositiveNumbers([5]) === 5, 'Test Case 7 Failed'); // Single positive number
console.assert(sumPositiveNumbers([-5]) === 0, 'Test Case 8 Failed'); // Single negative number

console.log("All tests passed!");