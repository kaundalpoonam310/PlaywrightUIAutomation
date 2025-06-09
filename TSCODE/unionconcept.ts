//union

let userId: (string | number);
userId = "10001";
userId = "naveenautomation";


function getUserInformation(customerId: (string | number)){
if(typeof(customerId) === "string"){
    return "_naveen";
} else 
if(typeof(customerId) === "number"){
return customerId+"_naveen"
}
}

console.log(getUserInformation(9001));
console.log(getUserInformation("automation"));