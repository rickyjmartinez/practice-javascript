// # 1. Write a function that takes in a number and returns the number times two. Then run the function and print the result.

function doubleNumber(number) {
  return number * 2; 
}

console.log(doubleNumber(2)); 

// # 2. Write a function that takes in a string and returns the string with all capital letters. Then run the function and print the result.

function capitalWord(word) { 
  return word.toUpperCase(); 
}
console.log(capitalWord("big")); 

// # 3. Write a function that takes in two numbers and returns the first number subtracted by the second. Then run the function and print the result.

function subtactNumbers(x,y) {
  return x - y; 
}
console.log(subtactNumbers(5,4)); 

// # 4. Write a function that takes in a number and returns the number times itself. Then run the function and print the result.

function square(number) { 
  return number * number; 
}

console.log(square(2)); 

// # 5. Write a function that takes in a string and returns the first letter of the string. Then run the function and print the result.

function firstLetter(string) {
  return string[0]; 
}
console.log(firstLetter("cat")); 

// # 6. Write a function that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the function and print the result.

function threeStrings(x,y,z) {
  return x + " " + y + " " + z; 
}

console.log(threeStrings("cat", "dog", "bird")); 

// # 7. Write a function that takes in a number and returns the number as a string. Then run the function and print the result.

function toString(x) {
  return x.toString();
} 
console.log(toString(5)); 

// # 8. Write a function that takes in a string and returns the string repeated 5 times. Then run the function and print the result.

function stringFiveTimes(x) {
  return x + x + x + x + x; 
}
console.log(stringFiveTimes("five")); 

// # 9. Write a function that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the function and print the result.

function average(x,y,z) { 
  return (x + y + z) / 3.0; 
}
console.log(average(2,2,3)); 

// # 10. Write a function that takes in a number and returns the number times 10 plus 30. Then run the function and print the result.

function timesTenPlusThirty(x) {
  return x * 10 + 30; 
}
console.log(timesTenPlusThirty(10)); 
