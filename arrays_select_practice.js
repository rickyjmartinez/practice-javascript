// #  1. Start with an array of numbers and create a new array with only the numbers less than 20.
// #     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

var num = [2, 32, 80, 18, 12, 3]; 
var lessTwenty = []; 
num.forEach(function (num) {
  if (num < 20) {
    lessTwenty.push(num);
  }
});

console.log(lessTwenty); 

// #  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
// #     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

var word = ["winner", "winner", "chicken", "dinner"]; 
var winner = []; 

word.forEach(function (w) {
  if (w[0] === "w") {
    winner.push(w);
  }
});
console.log(winner);
// #  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

var items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]; 
var moreFive = []; 

items.forEach(function (item) {
  if (item.price > 5) {
    moreFive.push(item); 
  }
});
console.log(moreFive); 

// #  4. Start with an array of numbers and create a new array with only the even numbers.
// #     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

var num2 = [2, 4, 5, 1, 8, 9, 7]; 
var evens = []; 
num2.forEach(function (num) {
  if (num % 2 === 0) {
    evens.push(num);
  }
});
console.log(evens); 

// #  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
// #     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

var words2 = ["a", "man", "a", "plan", "a", "canal", "panama"]; 
var lessFour = []; 

words2.forEach(function (word) {
  if (word.length < 4) { 
    lessFour.push(word);
  }
});

console.log(lessFour); 

// #  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

var items2 = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]; 
var lessSix = []; 

items2.forEach(function (item) {
  if (item.name.length < 6) {
    lessSix.push(item); 
  }
});

console.log(lessSix); 

// #  7. Start with an array of numbers and create a new array with only the numbers less than 10.
// #     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

var num3 = [8, 23, 0, 44, 1980, 3]; 
var lessTen = []; 

num3.forEach(function (num) {
  if (num < 10) {
    lessTen.push(num);
  }
});

console.log(lessTen); 

// #  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
// #     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

var word3 = ["big", "little", "good", "bad"]; 
var notB = []; 
word3.forEach(function (word) {
  if (word[0] !== "b") {
    notB.push(word);
  }
});
console.log(notB); 

// #  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

var items3 = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]; 
var lessTen$ = [] ; 

items3.forEach(function (item) {
  if (item.price < 10 ) {
    lessTen$.push(item);
  }
});

console.log(lessTen$); 

// # 10. Start with an array of numbers and create a new array with only the odd numbers.
// #     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

var num4 = [2, 4, 5, 1, 8, 9, 7];
var odds = []; 
num4.forEach(function (num) {
  if (num % 2 === 1) {
    odds.push(num);
  } 
});

console.log(odds); 