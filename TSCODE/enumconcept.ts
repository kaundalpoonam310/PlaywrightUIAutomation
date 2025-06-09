
//Enum : Enumeration : data types : hold the set of constants
//numberic
//string
//heterogeneous

//numeric :
enum Browser {
    Chrome,
    Firefox,
    Safari,
    Edge
}
console.log(Browser.Chrome);
console.log(Browser);

//numeric :
enum Browser1 {
    Firefox,
    Safari,
    Edge = getVersion("chrome")*5,
    Chrome = getVersion("chrome")
}

function getVersion(browserName: string): number{
    if (browserName === "chrome"){
        return 115;
    }
    return -1;
}

console.log(Browser1);

//String enum:
enum environment {
    DEV="dev",
    QA="qa",
    STAGE="stage",
    PROD="prod"
}

console.log(environment);

//heterogeneous enum:
enum Status {
    Active = "active",
    Inactive = "inactive",
    Pending = 1,
    Deleted = 2
}
console.log(Status);
console.log(Status.Active);