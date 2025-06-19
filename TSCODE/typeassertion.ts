//TSC
//1. using <>
//2. using as keyword
let totalBill: any = 123;
let finalBill = <number>totalBill + 200;
console.log(finalBill); // Output: 323

let someValue: any = "Hello typeScript with Naveen Automation";
let len = (someValue as string).length; // Using 'as' keyword for type assertion
console.log(len); // Output: 35

let flag: any = true;
if (flag as boolean){
    console.log("Flag is true");
}

