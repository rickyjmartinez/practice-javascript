
// // #  1. Start with an array of numbers and create a new array with each number times 3.
// // #     For example, [1, 2, 3] becomes [3, 6, 9].
// var array = [1,2,3]; 
// var newArray = array.map(timesThree); 

// function timesThree(array) {
//   return array * 3; 
// }
// console.log(newArray); 

// // #  2. Start with an array of strings and create a new array with each string upcased.
// // #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

// var words = ["hello", "goodbye"];
// console.log(words.map(a => a.toUpperCase()));


// // #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// // #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

// var people = [
//   { name: "Alice", age: 27 },
//   { name: "Blane", age: 16 },
// ];
// var names = [];
// people.forEach(function (person) {
//   names.push(person.name);
// });
// console.log(names);


// // #  4. Start with an array of numbers and create a new array with each number plus 7.
// // #     For example, [1, 2, 3] becomes [8, 9, 10].

// var a = [1, 2, 3];
// var b = []; 
// a.forEach(function (num) {
//   b.push(num + 7); 
// }); 
// console.log(b); 

// // #  5. Start with an array of strings and create a new array with each string's length.
// // #     For example, ["hello", "goodbye"] becomes [5, 7].

// var c = ["hello", "goodbye"]; 
// var d = []; 
// c.forEach(function (word) {
//   d.push(word.length); 
// }); 
// console.log(d); 


// // #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// // #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

// var e = [{name: "Alice", age: 27}, {name: "Blane", age: 16}]; 
// var ages = []; 

// e.forEach(function (person) { 
//   ages.push(person.age); 
// }); 
// console.log(ages); 

// // #  7. Start with an array of numbers and create a new array with each number divided by 2.
// // #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

// var f = [1, 2, 3]; 
// var half = []; 

// f.forEach(function (num) {
//   half.push(num / 2); 
// });
// console.log(half); 

// // #  8. Start with an array of strings and create a new array with each string's first letter only.
// // #     For example, ["hello", "goodbye"] becomes ["h", "g"].

// var g = ["hello", "goodbye"] ; 
// var first = []; 

// g.forEach(function (word) {
//   first.push(word[0]); 
// });

// console.log(first);


// // # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// // #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// var humans = [
//   { name: "Alice", age: 27 },
//   { name: "Blane", age: 16 },
// ];
// var agesDoubled = [];
// humans.forEach(function (person) {
//   agesDoubled.push(person.age * 2);
// });
// console.log(agesDoubled);


// // # 10. Start with an array of numbers and create a new array with each number converted into a string.
// // #     For example, [1, 2, 3] becomes ["1", "2", "3"].

// var numbers2 = [1,2,3] ; 
// var stringNum = []; 

// numbers2.forEach(function (num) {
//   stringNum.push(num.toString()); 
// }); 
// console.log(stringNum); 

// #  1. Start with an array of numbers and create a new array with each number times 3.
// #     For example, [1, 2, 3] becomes [3, 6, 9].

var a = [1, 2, 3]; 
var times3 = [];
a.forEach(function(num) {
  times3.push(num * 3); 
});
console.log(times3); 


// #  2. Start with an array of strings and create a new array with each string upcased.
// #     For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

var b = ["hello", "goodbye"]; 
var cap = []; 

b.forEach(function (word) {
  cap.push(word.toUpperCase()); 
});
console.log(cap); 

// #  3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].



// #  4. Start with an array of numbers and create a new array with each number plus 7.
// #     For example, [1, 2, 3] becomes [8, 9, 10].

// #  5. Start with an array of strings and create a new array with each string's length.
// #     For example, ["hello", "goodbye"] becomes [5, 7].

// #  6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

// #  7. Start with an array of numbers and create a new array with each number divided by 2.
// #     For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

// #  8. Start with an array of strings and create a new array with each string's first letter only.
// #     For example, ["hello", "goodbye"] becomes ["h", "g"].

// # 9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
// #     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// # 10. Start with an array of numbers and create a new array with each number converted into a string.
// #     For example, [1, 2, 3] becomes ["1", "2", "3"].