let incomingData = '{"brand":"Mazda","model":"MX-5","year":1989}'; 
let car2 = JSON.parse(incomingData); 
console.table(car2);
console.log('\n------ car2 Parsed ------');
console.log(`Brand: ${car2.brand}`);
console.log(`Model: ${car2.model}`);
console.log(`Year: ${car2.year}`);

let outgoingData = JSON.stringify(car2); 
console.log(`\n------ car2 stringified ------`);
console.log(car2);

// BOOk Obj
// Define a JSON-style string representing information about a book
let bookIncomingData = '{"title":"DeFi and the Future of Finance","author":"Campbell R. Harvey, Ashwin Ramachandran, and Joey Santoro","year":2021}';

// Use JSON.parse() to convert the JSON string into a JavaScript object
let bookObj = JSON.parse(bookIncomingData);

// Display the book object in a tabular format
console.table(bookObj);

console.log('\n------ Book Object Parsed ------');
console.log(`Title: ${bookObj.title}`);
console.log(`Author: ${bookObj.author}`);
console.log(`Year: ${bookObj.year}`);

// Convert the book object back into a JSON string using JSON.stringify()
let bookOutgoingData = JSON.stringify(bookObj);

console.log(`\n------ Book Object Stringified ------`);
console.log(bookOutgoingData);


// Working with Arrays
let listOfNumbers = [1,2,3,4,5]
console.log('Original array:' + listOfNumbers);
console.log(listOfNumbers[3]);
listOfNumbers[2]++;
console.log('Modified array:' + listOfNumbers);
