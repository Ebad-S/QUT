// Code-play 4: Objects 
let numberVar = 1.337;
let stringVar = "computers are cool";

console.log(numberVar.toString());
console.log(numberVar.toFixed(2));
console.log(stringVar.length);
console.log(`Slice:` + stringVar.slice(0,9));
console.log(`replace:` + stringVar.replace("cool", "uncool")+`\n`);

// objects
let car1 = {    
    brand: "Ferrari",    
    model: "F50",    
    year: 1995
}

console.log(`\n-------~ Favorite Car ~-------`);
console.table(car1);
console.log(`Car Brand: ${car1.brand}`);
console.log(`Model: ${car1.model}`);
console.log(`Year: ${car1.year}`+`\n`);

// Book Obj
let bookObj = {
    title: "The Infinite Machine: How an Army of Crypto-hackers Is Building the Next Internet with Ethereum",
    author: "Camila Russo",
    year: 2020
};

// console.table(bookObj);
console.log(`\n-------~ Favorite Book ~-------`);
console.log(`Title: ${bookObj.title}`);
console.log(`Author: ${bookObj.author}`);
console.log(`Year: ${bookObj.year}`);

bookObj.title = "DeFi and the Future of Finance";
bookObj.author= "Campbell R. Harvey, Ashwin Ramachandran, and Joey Santoro";
bookObj.year = 2021;

console.log(`\n-------~ Book Obj Updated ~-------`);
console.log(`Title: ${bookObj.title}`);
console.log(`Year: ${bookObj.year}`);
