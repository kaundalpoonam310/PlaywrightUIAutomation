console.log("Arrays in TypeScript");
//      * Generic method to click an element
//      * @param selector Element selector
//      */
var names = ["Alice", "Bob", "Charlie"]; // Array of strings 
console.log(names[0]); // Output: Alice
var empName = ["John", "Doe", "Jane"]; // Array of strings using Array type
console.log(empName[1]); // Output: Doe
var empId = [101, 102, 103]; // Array of numbers
console.log(empId[2]); // Output: 103
var empInfo = ["John", 101, true]; // Array of mixed types
console.log(empInfo[0]); // Output: John
var values = ["Alice", 42, "Bob"]; // Array with union types
console.log(values[1]); // Output: 42
var val = ["Alice", 42, "Bob"]; // Array with union types
console.log(val[2]); // Output: Bob
var users;
users = ["Alice", "Bob", "Charlie"]; // Initializing an empty array of strings
console.log(users[0]); // Output: Alice
var employees = ["tom", "peter", "naveen", "ravi"]; // Empty array of strings
// for(let i=0;i<employees.length;i++){
//     console.log(employees[i]); // Output: tom, peter, naveen, ravi
// }
for (var e in employees) {
    console.log(employees[e]); // Output: tom, peter, naveen, ravi
}
