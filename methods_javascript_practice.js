// # 1. Write a program that asks the user to enter a word, then prints that word with all capital letters.

var inputWord = "word"; 
console.log(inputWord.toUpperCase());

// # 2. Write a program that asks the user to enter a number, then prints "That's a big number" if the number is greater than 100.

var inputNumber = 240;
if (inputNumber > 100 ) {
  console.log("that's a big number");
}

// # 3. Write a program that asks the user to enter two numbers, then prints the numbers added together.

var numberOne = 37; 
var numberTwo = 73; 

console.log(numberOne + numberTwo); 

// # 4. Write a program that asks the user to enter a word, then prints that word in reverse order.

var inputWord2 = "break"; 
console.log(inputWord2.split("").reverse().join(""));


// # 5. Write a program that asks the user to enter a number, then prints the number times 10.

var inputNumber2 = 10; 
console.log(inputNumber2 * 10);

// # 6. Write a program that asks the user to enter two words, then prints both words on the same line in all capital letters.
var inputWord3 = window.prompt("enter a word: "); 
var inputWord4 = window.prompt("enter another word: "); 
console.log(inputWord3.toUpperCase() + " " + inputWord4.toUpperCase()); 

// # 7. Write a program that asks the user to enter a word, then prints the number of letters in the word.

var inputWord5 = window.prompt("please enter a word");
console.log(inputWord5.length);

// # 8. Write a program that asks the user to enter a number, then prints "That's a negative number" if the number is less than 0.
var inputNumber3 = window.prompt("enter a number"); 
if (parseInt(inputNumber3) < 0 ) {
  console.log("that's a negative number"); 
}

// # 9. Write a program that asks the user to enter two numbers, then prints the two numbers multiplied together.
var inputNumber4 = window.prompt("enter a number");
var inputNumber5 = window.prompt("enter a number"); 
console.log(parseInt(inputNumber4) * parseInt(inputNumber5)); 

// # 10. Write a program that asks the user to enter a word, then prints "That's a long word" if the word has more than 5 letters.

var inputWord6 = window.prompt("enter a word"); 
if (inputWord6.length > 5) {
  console.log("that's a long word"); 
}
