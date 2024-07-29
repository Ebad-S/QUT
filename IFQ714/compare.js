// Function for checking if two values are the same
function checkValuesEqual(first, second) {
    // Check if the values are the same, including their types
    if (first === second) {
        console.log(` ✅ The values of ${first} and ${second} are equal.`);
    } else {
        console.log(` ❌ The values of ${first} and ${second} are not equal.`);
    }
}

// See if these pairs of values are the same.
checkValuesEqual("hello", "goodbye");
checkValuesEqual("hello", "hello");
checkValuesEqual(5, 5);
checkValuesEqual(5, "5");
