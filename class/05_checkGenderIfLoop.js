function marriage (gender, age) {
    if (gender!=="male" && gender!=="female") {
        console.log(`Gender is invalid`);
    }
    else{
        if (gender=="male"&&age>=21 || gender=="female"&&age>=18) {
            console.log(`${gender} is eligible to marriage`);}
        else{`you are not eligible for marriage`}
    }   
}
marriage("male", 25);
marriage("other", 15);
marriage("female", 20);
marriage("others", 28);
