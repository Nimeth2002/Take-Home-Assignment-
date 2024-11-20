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