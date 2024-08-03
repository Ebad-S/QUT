/* 
2.7 Activity: Module 2 workshop
Purpose
For this workshop, you will be writing code related to the following example: 
The small Guava Computer Store keeps track of its employees and the sales their employees make. The data is exported by their system into JSON format. An example of each is below. 

Employee: 
{"id":1,"firstName":"John", "lastName":"Smith", "gender":"Male", "age":23, "position":"Manager"} 

Sale: 
{"staffId":1, "item":"Wi-Fi Adapter", "price":40.00, "date":"01-09-2022"}

Task: do the following: 

Step 1: Create constructor functions
As described above, the Guava Computer Store system tracks employees and sales. Create two constructor functions for employees and sales. The parameters for these functions should match the example objects shown.*/

// Constructor function for Employee
function Employee(id, firstName, lastName, gender, age, position) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.position = position;

    // Method to log the full name
    this.logFullName = function() {
        console.log(`${this.firstName} ${this.lastName}`);
    };
}

// Constructor function for Sale
function Sale(staffId, item, price, date) {
    this.staffId = staffId;
    this.item = item;
    this.price = price;
    this.date = date;
}

/*Step 2: Create employee and sale objects
Use the Employee constructor function that you created in Step 1 to create an employee object for the following employee:

Employee ID: 30
First name: Joanna
Last name: Bates
Gender: Female
Age: 42
Position: Salesperson
Assign the instance of the employee to a new variable named joannaBates. Remember to use the new keyword.

Joanna sold a gaming PC on 1st November 2023. Use the Sale constructor function to create a sale object for this sale. The details of the sale were as follows:

Staff ID: 30
Item sold: Gaming PC
Price of item: 1700
Date: 01-11-2023
Assign the instance of this sale to a new variable named gamingPCSale.*/

// Create an employee object
let joannaBates = new Employee(30, "Joanna", "Bates", "Female", 42, "Salesperson");

// Create a sale object for the gaming PC
let gamingPCSale = new Sale(30, "Gaming PC", 1700, "01-11-2023");



/*Step 3: Display employee and sale details
Using console.log statements with relevant mesages and the variables that you created in Step 2, display specific details about the employee and sale. Remember that you can access the values of an object using dot notation.

Log the following details about Joanna Bates:
Age
Position
Full name (concatenate the first name and last name).

Log the following details about the gaming PC sale:
Item sold
Price of item.*/
// Log details about Joanna Bates
console.log("Joanna Bates Details:");
console.log(`Age: ${joannaBates.age}`);
console.log(`Position: ${joannaBates.position}`);
console.log(`Full Name: ${joannaBates.firstName} ${joannaBates.lastName}`);

// Log details about the gaming PC sale
console.log("Gaming PC Sale Details:");
console.log(`Item Sold: ${gamingPCSale.item}`);
console.log(`Price of Item: $${gamingPCSale.price}`);



/*Step 4: Create an array of sales
Joanna made another big sale on 10th November 2023. This time she sold a 4K monitor to a customer for $1100.

Create a new object using the Sale constructor for this sale and assign it to a new variable monitorSale.
Then, store both the sale objects in an array called sales.
Finally, console log out the price of the monitor sale.

Step 5: Create a method to log an employee's full name
Create a new method named logFullName within the Employee function. Inside this new method, concatenate the first name and last name properties to form the full name of the employee. Utilise console.log to output the full name to the console.

Test that your newly created method works by trying to call it for Joanna.*/
// Create a new sale object for the 4K monitor
let monitorSale = new Sale(30, "4K Monitor", 1100, "10-11-2023");

// Store both sale objects in an array
let sales = [gamingPCSale, monitorSale];

// Log the price of the monitor sale
console.log(`Price of the Monitor Sale: $${monitorSale.price}`);


/*Step 5: Create a Method to Log an Employee's Full Name
(Note: This step was addressed in the constructor function for Employee, but here’s how to use it): */
// Test the logFullName method for Joanna
console.log("Full Name of the Employee:");
joannaBates.logFullName();  // Output: Joanna Bates

