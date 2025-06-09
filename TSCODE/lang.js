function getInfoTest(){
    console.log("About to check firstName");
    if(firstName.length>0){
        console.log("PASS")
    } else {
        console.log("FAIL");
    }
}

getInfoTest();