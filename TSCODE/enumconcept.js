//Enum : Enumeration : data types : hold the set of constants
//numberic
//string
//heterogeneous
//numeric :
var Browser;
(function (Browser) {
    Browser[Browser["Chrome"] = 0] = "Chrome";
    Browser[Browser["Firefox"] = 1] = "Firefox";
    Browser[Browser["Safari"] = 2] = "Safari";
    Browser[Browser["Edge"] = 3] = "Edge";
})(Browser || (Browser = {}));
console.log(Browser.Chrome);
console.log(Browser);
//numeric :
var Browser1;
(function (Browser1) {
    Browser1[Browser1["Firefox"] = 0] = "Firefox";
    Browser1[Browser1["Safari"] = 1] = "Safari";
    Browser1[Browser1["Edge"] = getVersion("chrome") * 5] = "Edge";
    Browser1[Browser1["Chrome"] = getVersion("chrome")] = "Chrome";
})(Browser1 || (Browser1 = {}));
function getVersion(browserName) {
    if (browserName === "chrome") {
        return 115;
    }
    return -1;
}
console.log(Browser1);
//String enum:
var environment;
(function (environment) {
    environment["DEV"] = "dev";
    environment["QA"] = "qa";
    environment["STAGE"] = "stage";
    environment["PROD"] = "prod";
})(environment || (environment = {}));
console.log(environment);
//heterogeneous enum:
var Status;
(function (Status) {
    Status["Active"] = "active";
    Status["Inactive"] = "inactive";
    Status[Status["Pending"] = 1] = "Pending";
    Status[Status["Deleted"] = 2] = "Deleted";
})(Status || (Status = {}));
console.log(Status);
console.log(Status.Active);
