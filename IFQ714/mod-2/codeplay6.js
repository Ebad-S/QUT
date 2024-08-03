// let greeting = function () {    
//     console.log("Hello Yaping, Happy 2024! \n :)");}

//     greeting();

// Using toString()
console.log(`Using inbuilt functions `);
let num = 42;
console.log(`Number ${num} as a string: ${num.toString()}`);

/* 
* Using inbuilt functions 
*/
// Using parseInt()
let numStr = "10";
console.log(`Parsing ${numStr} as an integer: ${Number.parseInt(numStr)}`);

// Using parseFloat()
let floatStr = "3.14";
console.log(`Parsing ${floatStr} as a float: ${Number.parseFloat(floatStr)}`);

// Using isNaN()
let notANumber = "555";
console.log(`Checking if ${notANumber} is NaN: ${Number.isNaN(notANumber)}`);
// console.log(Number.parseInt("5", "4"));


/* 
Function arguments
*/
console.log(`\nFunction Arguments`);
function sumAll(...numbers) {
    if (numbers.length === 0) {

        // Return 0 if no arguments are passed
        return 0;  
    }

    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;  // Return the sum
}

// Usage 
console.log(`The total sum is: ${sumAll(1, 2, 3, 4, 5)}`);
console.log(`The total sum is: ${sumAll(10, 20, 30)}`);
console.log(`The total sum is: ${sumAll(7)}`);
console.log(`The total sum is: ${sumAll()}`); // 0 (default argument value)


/*
* Function with Return Statement
*/

console.log(`\nFunction with Return Statement`);
// Function as declaration
function greeting(text = "Nothing specified!") {    
    console.log(`${text} : ${text.length}`);  
    
    // Return the length of the provided text  
    return text.length;  
}

// Call the function with various text values
let len1 = greeting("JavaScript"); 
let len2 = greeting(); 

console.log(`Returned Len of text 1: ${len1}`);
console.log(`Returned Len of text 2: ${len2}`);


/*
* Function scope / Using Constants
*/
console.log(`\nUsing Constants`);

const FIVE = 5;
const SIX = 6;

// Function to add a constant number (FIVE) multiple times
function addFive(initialNum) {
    let counter = 0;    
    let newNum = initialNum;    
    while (counter < FIVE) {        
        newNum = newNum + FIVE;        
        counter ++;    
    }    
    return newNum;
}

// Function to add a constant number (SIX) multiple times
function addSix(initialNum) {
    let counter = 0;    
    let newNum = initialNum;    
    while (counter < SIX) {        
        newNum = newNum + SIX;        
        counter ++;    
    }    
    return newNum;
}

// Calling the functions
console.log(`addFive(10): ${addFive(10)}`); 
console.log(`addSix(10): ${addSix(10)}`); 


/*
* Creating a Car Object with Missing Arguments
*/
console.log(`\nCreating a Car Object with Missing Arguments`);

function Car(brand, model, year) {    
    this.brand = brand;    
    this.model = model;    
    this.year = year;
}

// complete Car obj
let car1 = new Car("Bugatti", "Veyron", 2005);
console.log("\x1b[32mComplete Car:\x1b[0m"); 
console.log(`Brand: ${car1.brand}`);
console.log(`Model: ${car1.model}`);
console.log(`Year: ${car1.year}`);

// Car obj with missing args
let incompleteCar = new Car("Tesla", "Model S");
console.log("\x1b[32mInComplete Car:\x1b[0m"); 
console.log(`Brand: ${incompleteCar.brand}`);
console.log(`Model: ${incompleteCar.model}`);
console.log(`Year: ${incompleteCar.year}`);

// Car obj with no args
let emptyCar = new Car();
console.log("\x1b[32mEmpty Car:\x1b[0m"); 
console.log(`Brand: ${emptyCar.brand}`);
console.log(`Model: ${emptyCar.model}`);
console.log(`Year: ${emptyCar.year}`);



/*
* Creating Methods
*/
console.log(`\nCreating a Method for Car Objects`);

// Updated constructor for Car obj with getName() method
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    // get a string rep of the car obj
    this.getName = function() {
        return this.year.toString() + " " + this.brand + " " + this.model;
    };
}

// testing it
let myCar = new Car("Ferrari", "488 GTB", 2020);
console.log(`The car details are: ${myCar.getName()}`);
