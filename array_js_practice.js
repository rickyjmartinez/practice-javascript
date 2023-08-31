// # 1. Create an array to store 3 words. Then add two more words to the array and print the array on one line.

var words = ["cat","dog","bird"]; 
words.push("cow","bug"); 
console.log(words);

// # 2. Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

// var letters = ["a","b","c","d"]; 
// letters[1] = 2; 
// console.log(letters);

// # 3. Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

var letters = [1,2,3,4,5]; 
for (var i = 0; i < letters.length; i++) {
  console.log(letters[i]); 
}

// # 4. Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

var numbers = [1];
numbers.push(2,3,4);
console.log(numbers);

// # 5. Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

var moreWords = ["cat", "dog", "cow"]; 
moreWords[2] = moreWords[2].toUpperCase(); 
console.log(moreWords); 

// # 6. Create an array to store 3 names. Then print out each name on separate lines with a while loop.

var names = ["bob","lob","rob"]; 
for (var n = 0; n < names.length; n++) {
  console.log(names[n]); 
}

// # 7. Create an array to store 2 strings. Then add one string to the array and print the array on one line.

var array = ["cat", "dog"]; 
array.push("bird"); 
console.log(array); 

// # 8. Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

var numbersArray = [1,2,3,4,5]; 

numbersArray[0] = numbersArray[0] * 10; 
console.log(numbersArray); 

// # 9. Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

var twoNumbers = [1,2]; 
for (var x = 0; x < twoNumbers.length; x++) {
  console.log(twoNumbers[x]); 
}

// # 10. Create an array to store names of 3 different countries. Then add one more country and print the array one line.

var countries = ["Germany", "Brazil", "Japan"]; 
countries.push("Chile"); 
console.log(countries); 