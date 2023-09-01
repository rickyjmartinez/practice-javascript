// # 1. Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

var person = {first:"ricky",last:"martinez",email:"ricky@ricky.com"}; 
console.log(person.first); 
console.log(person.last); 
console.log(person.email); 

// # 2. Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

var people = [{first:"Ricky", last:"martinez"},{first:"hanna", last:"wilson"}, {first:"reilly", last:"wilson"}]; 

console.log(people[0]); 

// # 3. Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

var store = {pen: 2, book:5, ink:3}; 
store.bookmark = 5; 
console.log(store);

// # 4. Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.
var book = {title:"the hobbit", author:"jrr tolkien",pages:500}; 
console.log(book.title);
console.log(book.author);
console.log(book.pages);

// # 5. Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.

var books = [{title:"the hobbit", author:"jrr tolkien"}, {title:"the jungle", author:"upton sinclair"}, {title:"the game of thrones", author:"grr martin" }]; 

console.log(books[2].author); 

// # 6. Make a hash to store 3 different states and their captitals. Then add a new state and capital and print the hash to see the result.

var states = {illinois:"springfield", indiana:"indianpolis", new_york:"albany"}; 
states.missouri = "jefferson city"; 
console.log(states); 

// # 7. Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.

var laptop = {brand:"apple", model:"macbook air", year:2020}; 
console.log(laptop.brand); 
console.log(laptop.model);
console.log(laptop.year);

// # 8. Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.
var laptops = [{brand:"mac", model:"macbook air"}, {brand:"dell", model:"laptop"}, {brand:"acer", model:"chromebook"}]; 

console.log(laptops[1].model); 

// # 9. Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.
var definitions = {apple:"a fruit", water:"a liquid"}; 
definitions.chair = "something you sit on"; 
console.log(definitions); 

// # 10. Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.

var shirt = {brand:"hanes", color:"black", size:"large"}; 
console.log(shirt.brand); 
console.log(shirt.color);
console.log(shirt.size); 

