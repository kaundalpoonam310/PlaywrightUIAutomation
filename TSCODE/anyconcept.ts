
//any
let num: any = 100;
let something: any = "Hello, World!";

something = 42;
something = "test";
something = true;

let lang: any[] = ["JavaScript", "TypeScript", 42, true]; // Array with mixed types
lang.push("Python");
lang.push(100); // Adding a number to the array
console.log(lang); // Output: ["JavaScript", "TypeScript", 42, true, "Python", 100]

function info(a: number, b: number) : any{
    if(a>   b){
        return "testing";
    } else
    if(a < b){
        return 100;
    } else {
        return true;
    }
}

console.log(info(20,10));
