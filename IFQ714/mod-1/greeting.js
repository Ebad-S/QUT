// test your changes by running the `node greeting.js` command.

function createGreeting(name) {
    // TODO: Create a new variable named "greeting"
    // Assign to it the string "Hi! It's great to meet you, "
    let greeting = "Hi! It's great to meet you, "

    return greeting + name;
}

    // TODO: Create a new variable called "name"
    // Assign to it the string "Eddie"
let name = "Eddie"

const message = createGreeting(name);

// Show the message in the console.
console.log("\x1b[34m" + message + "\x1b[0m");
