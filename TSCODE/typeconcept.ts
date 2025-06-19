//Typescript is a statically typed language, which means that types are checked at compile time.
//type inference --> no datatye for variable is given, but typescript infers the type based on the value assigned to it
//type annotation --> num : number ... name:string
let fName : string = "John";
fName = "Doe"; // This is allowed, as fName is a string variable

let num:number;
num = 42;

let test = "typesciprt"; //type=string -- CT --> Type inference
let billAmount = 1000; //type=number -- CT --> Type inference
let isActive: boolean = true; //type=boolean -- CT --> Type annotation

let city : null = null;
let country : undefined = undefined;

let value: any = "Hello"; // any type can hold any value
value = 42; // Now value is a number
value = true; // Now value is a boolean

//void : function deos not return any value
function printHello(): void{
    console.log("Hello, World!");
    //return 123; --> Not allowed
    return; // This is allowed, it just exits the function without returning a value

}

function getNumber(): number {// return type : number --> CT
    return 42;
}

function getAnyValue(): any {
    //return "This can be anything"; // This function can return any type of value
    return "testing";
}

function addition(a,b) {
    return a + b;
}

addition(5, 10); // This will return 15


function add(a: number ,b: number): number {
    return a + b;
}

add(10,20);
