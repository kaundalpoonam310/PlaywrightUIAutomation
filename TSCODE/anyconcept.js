//any
var num = 100;
var something = "Hello, World!";
something = 42;
something = "test";
something = true;
var lang = ["JavaScript", "TypeScript", 42, true]; // Array with mixed types
lang.push("Python");
lang.push(100); // Adding a number to the array
console.log(lang); // Output: ["JavaScript", "TypeScript", 42, true, "Python", 100]
function info(a, b) {
    if (a > b) {
        return "testing";
    }
    else if (a < b) {
        return 100;
    }
    else {
        return true;
    }
}
console.log(info(20, 10));
