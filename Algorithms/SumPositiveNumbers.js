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