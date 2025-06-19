//ifelse
let flag: boolean = true; // boolean variable


if(flag){
    console.log("This is true block");
} else {
    console.log("This is false block");
}

let x: number = 10, y:number = 20;
if(x > y){
    console.log("x is greater than y");
} else {
    console.log("x is not greater than y");
}

let a:number = 100;
let b:number = 200;
let c:number = 300;
if(a>b && a>c){
    console.log("a is the greatest number");
} else if(b>c){
    console.log("b is the greatest number");
} else {
    console.log("c is the greatest number");
}

//Ternary operator
let i:number=100;
let j:number=20;
let result = (i > j) ? "i is greater than j" : "j is greater than i";
console.log(result); // Output: "i is greater than j"


let browser : string = "Chrome";
(browser === "Chrome") ? console.log("You are using Chrome browser") : (browser === "firefox") ? console.log("You are not using Chrome browser"): console.log("You are using some other browser");
