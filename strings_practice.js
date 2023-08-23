// # 1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

var first = "ricky";
var last = "martinez"; 
console.log(first + " " + last); 

// # 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

var first = "ricky"; 
var last = "martinez"; 
console.log(`${first} ${last}`);

// # 3. Write a program that asks the user to input a word. If the word is "marco", print "polo".

var input = "marco"; 
if (input === "marco") {
  console.log("polo");
}

// # 4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

var color1 = "purple"; 
var color2 = "red"; 
var color3 = "green"; 
console.log(color1 + ", " + color2 + ", " + "and " + color3 + " are pretty."); 

// # 5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

var color1 = "purple"; 
var color2 = "green"; 
var color3 = "blue"; 
console.log(`${color1}, ${color2}, and ${color3} are pretty.`); 

// # 6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

var nameInput = "ricky"; 
if (nameInput !== "santa") {
  console.log("you're not Santa."); 
}

// # 7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

var title = "the hobbit"; 
var author = "jrr tolkien"; 
console.log(title + " was written by " + author + "."); 

// # 8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).
 
var title = "the hobbit"; 
var author = "jrr tolkien"; 
console.log(`${title} was written by ${author}.`);

// # 9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

var inputPassword = "Joshua"; 
if (inputPassword === "Joshua") {
  console.log("Shall we play a game?"); 
} else {
  console.log("Access denied");
}

// # 10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

var city1 = "chicago"; 
var city2 = "indianapolis"; 
var city3 = "denver"; 
console.log(city1 + ", " + city2 + ", and " + city3 + " are in the US."); 



