//switch case

let day: string = "Saturday";

let dayOfWeek: string;
if(day === "Sunday") {
    dayOfWeek = "Sunday";
}
else if(day === "Saturday") {
    dayOfWeek = "Saturday";
} else if(day === "Monday") {
    dayOfWeek = "Monday";
}
else if(day === "Tuesday") {
    dayOfWeek = "Tuesday";
}
else if(day === "Wednesday") {
    dayOfWeek = "Wednesday";
}
else if(day === "Thursday") {
    dayOfWeek = "Thursday";
}
else if(day === "Friday") {
    dayOfWeek = "Friday";
}
else {
    dayOfWeek = "Invalid day";
}
console.log(dayOfWeek); // Output: Saturday

//using switch case
switch(day) {
    case "Sunday":
        dayOfWeek = "Sunday";
        break;
    case "Saturday":
        dayOfWeek = "Saturday";
        break;
    case "Monday":
        dayOfWeek = "Monday";
        break;
    case "Tuesday":
        dayOfWeek = "Tuesday";
        break;
    case "Wednesday":
        dayOfWeek = "Wednesday";
        break;
    case "Thursday":
        dayOfWeek = "Thursday";
        break;
    case "Friday":
        dayOfWeek = "Friday";
        break;
    default:
        dayOfWeek = "Invalid day";
}
console.log(dayOfWeek); // Output: Saturday

enum Browser1 {
    Firefox = "firefox",
    Safari = "safari",
    Edge = "edge",
    Chrome = "chrome"
}

let browserName: string = Browser1.Chrome;
switch(browserName){
    case Browser1.Firefox:
        console.log("You are using Firefox browser");
        break;
    case Browser1.Safari:
        console.log("You are using Safari browser");
        break;
    case Browser1.Edge:
        console.log("You are using Edge browser");
        break;
    case Browser1.Chrome:
        console.log("You are using Chrome browser");
        break;
    default:
        console.log("You are using an unknown browser");
        break;          
}

//RBAC : admin, seller, partner, vendor, manager
//2. multi envs : DEV< QA, STAGE, PROD
//3. cross browser logic
