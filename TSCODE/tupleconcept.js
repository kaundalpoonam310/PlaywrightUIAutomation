//Tupe : fixed sized, order matters
//tupe vs array
//array : dynamic : rntime more values can be added
var person = ["Naveen", 30]; // Tuple with string and number
var user = ["John", 25, true]; // Tuple with string, number, and boolean
console.log(person[0]);
console.log(person[1]);
var data = [["Naveen", 30], ["John", 25]]; // Array of tuples
console.log(data[0][0]);
console.log(data[1]);
var customer = ["Alice", 1001];
customer.push("Ravi", 200);
console.log(customer); // Output: ["Alice", 1001, "Ravi", 200]
