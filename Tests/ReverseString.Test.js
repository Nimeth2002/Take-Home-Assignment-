function reverseString(str) {
    return str.split('').reverse().join(''); // Split the string into an array,reverse it and join back to a string
}

console.log(reverseString("Hello Welcome !!!"));//output print Hello Welcome !! in backwards

//unit test for ReverseString 
console.assert(reverseString("Hello") === "olleH", 'Test Case 1 Failed');
//Check if the function reverseString correctly reverses the string "Hello" to "olleH".
console.assert(reverseString("Welcome") === "emocleW", 'Test Case 2 Failed');
//Check if the function reverseString correctly reverses the string "Welcome" to "emocleW".

console.log("All tests passed!");



