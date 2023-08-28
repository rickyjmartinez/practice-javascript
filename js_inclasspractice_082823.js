// # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

// def select_even_items(strings)
//   result = []
//   index = 0
//   strings.each do |string|
//     if index % 2 == 0
//       result << string
//     end
//     index = index + 1
//   end
//   result
// end
// p select_even_items(["a", "b", "c", "d", "e", "f"])

// function evenLetters(array) { 
//   var newArray = []; 
//   var i = 0; 
//   while (i < array.length) {
//     if (i % 2 === 0) {
//       newArray.push(array[i]);
//     }
//     i++;
//   }
//   return newArray;
// }
// console.log(evenLetters(["a", "b", "c", "d", "e", "f"])); 

// # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// def max(numbers)
//   current_max = numbers[0]
//   numbers.each do |number|
//     if number > current_max
//       current_max = number
//     end
//   end
//   current_max
// end
// p max([5, 4, 8, 1, 2])

// function max(array) {
//   var currentMax = array[0]; 
//   var i = 0;
//   while (i < array.length) {
//     if (array[i] > currentMax) {
//       currentMax = array[i]; 
//     }
//     i++;
//   }
//   return currentMax;
// }

// console.log(max([5, 4, 8, 1, 2]));

// # Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// def factorial(number)
//   result = 1
//   current_number = number
//   number.times do
//     result = result * current_number
//     current_number = current_number - 1
//   end
//   result
// end
// p factorial(5)

// function factorial(number) {
//   var result = 1; 
//   var currentNumber = number; // cur = 5, number = 5 
//   while (currentNumber <= number) { // 5 =< 5 
//     result = result * currentNumber;
//     currentNumber = currentNumber - 1;    
//   }
//   return result; 
// }
// console.log(factorial(5)); 


// 1) Write a function that takes in an array of numbers and returns its sum.

function sum (numbers) {
  var sum = 0; 
  numbers.forEach(function (number) { 
    sum += number; 
  }); 
  return sum;
}

console.log(sum([1,2,3]));

// 2) Write a function that takes in an array of strings and returns the smallest string.

function smallestString(words) {
  var smallest = words[0]; 
  words.forEach(function(word) {
    if (smallest.length > word.length) { 
      smallest = word;
    }
  });
  return smallest;
}

console.log(smallestString(["five", "one", "seven"])); 


// # 3) Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.

function reverse(numbers) {
  var backwards = []; 
  var i = numbers.length - 1; 
  while (i >= 0) { 
    backwards.push(numbers[i]); 
    i --; 
  }
  return backwards; 
}

console.log(reverse([0,1,2,3])); 

// # 4) Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.

function aWords(words) {
  var filteredWords = []; 
  words.forEach(function(word) {
    if (word[0] === "a") { 
      filteredWords.push(word);
    }
  });
  return filteredWords;
}

console.log(aWords(["apple","ball","avalanche"])); 
