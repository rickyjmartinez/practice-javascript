// #  1. Start with an array of numbers and compute the sum of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 26.

var num = [5, 10, 8, 3]; 
var sum = 0;

num.forEach(function (n) {
  sum += n;
});

console.log(sum); 

// #  2. Start with an array of strings and combine them all into a single string.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

var sports = ["volleyball", "basketball", "badminton"]; 
var singleSport = ""; 

sports.forEach(function (sport) {
  singleSport += sport;
});

console.log(singleSport); 


// #  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

var items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]; 
var cost = 0; 
items.forEach(function (item) {
  cost += item.price;
});

console.log(cost);


// #  4. Start with an array of numbers and compute the the minumum number.
// #     For example, [5, 10, 8, 3, 9] becomes 3.

var num2 = [5, 10, 8, 3, 9]; 
var minNum = num2[0];

num2.forEach(function (num) {
  if (minNum > num) {
    minNum = num;
  }
});

console.log(minNum); 

// #  5. Start with an array of strings and compute the total length of all the strings.
// #     For example, ["volleyball", "basketball", "badminton"] becomes 29.

var sports2 = ["volleyball", "basketball", "badminton"]; 
var sportLength = 0;
sports2.forEach(function (sport) {
  sportLength += sport.length;
}); 
console.log(sportLength); 

// #  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

var items2 = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]; 

var minItem = items2[0].price; 

items2.forEach(function (item) {
  if(minItem > item.price) {
    minItem = item; 
  }
});

console.log(minItem); 
// #  7. Start with an array of numbers and compute product of all the numbers.
// #     For example, [5, 10, 8, 3] becomes 1200.

// #  8. Start with an array of strings and combine them all into a single string, separated by dashes.
// #     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

// #  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
// #     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

// # 10. Start with an array of numbers and compute the maximum number.
// #     For example, [5, 10, 8, 3] becomes 10.