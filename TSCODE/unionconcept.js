//union
var userId;
userId = "10001";
userId = "naveenautomation";
function getUserInformation(customerId) {
    if (typeof (customerId) === "string") {
        return "_naveen";
    }
    else if (typeof (customerId) === "number") {
        return customerId + "_naveen";
    }
}
console.log(getUserInformation(9001));
console.log(getUserInformation("automation"));
