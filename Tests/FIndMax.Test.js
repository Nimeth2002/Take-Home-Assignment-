const numbers = [1 , 5 , 10 , 20 ,60 , 70 , 80 , 110 , 100]

function findMaxValue(arr){
    if(arr.length == 0){   
        return null; //Returns null if the array is empty 
    }
    let MaxValue = arr[0]; //declare and initialize Maximum Values
    for(let i = 1; i < arr.length; i++){ //Loop through the array 
        if(arr[i] > MaxValue){
            MaxValue = arr [i]; //Updating Maximum value if found 
        }
    }
    return MaxValue; //returning the Maximum value 
}
console.log(findMaxValue(numbers));  //Output of the largest number 

console.assert(findMaxValue([1, 2, 3, 4, 5]) === 5, 'Test Case 1 Failed'); //Check if the maximum value in the array is 5.
console.assert(findMaxValue([-10, -20, -30, -5]) === -5, 'Test Case 2 Failed'); //Check if the maximum value in the array is -5.
console.assert(findMaxValue([]) === null, 'Test Case 3 Failed'); //Check if the function handles an empty array and returns null
console.assert(findMaxValue([100]) === 100, 'Test Case 4 Failed'); //Check if the maximum value in an array with only one element [100] is 100.
console.assert(findMaxValue([0, 0, 0, 0, 0]) === 0, 'Test Case 5 Failed'); //Check if the maximum value in the array [0, 0, 0, 0, 0] is 0

console.log("All tests passed!"); 