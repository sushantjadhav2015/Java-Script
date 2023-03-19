class bank {
    constructor(bank_name, location, account_no,ifsc,interest_rate)
    {
        this.bank_name = bank_name;
        this.location=location;
        this.account_no= account_no;
        this.ifsc=ifsc;
        this.interest_rate=interest_rate
    }
}

const axisBank = new bank("Axis bank","kolhapur",33897022114,"Axis50478","5.8%");
const sbiBank = new bank("SBI Bank","Mumbai",33527841050,"SBIN123456","7%");
const iciciBnak = new bank("ICICI Bank","Pune",78945824157,"ICICI40125","6.6%");
const kotakBank = new bank("Kotak Bank","Sangli",45857912587,"KOT125471","5.8%");
const hdfcBank = new bank("HDFC Bank","ratnagiri",457821587200,"HDFC445588","7.8%");
const panjabbank = new bank("Panjab National Bank","panjab",5257811369,"Pan1122","8.0%");

console.log(`===create array and traverse this array by using for of loop===`);
const arrayOfBank = [axisBank,sbiBank,iciciBnak,kotakBank,hdfcBank,panjabbank];

for (const bank of arrayOfBank) {
    console.log(`Bank name and location :${bank.bank_name}, ${bank.location}`);
}

console.log(`\n===find the object kotak bank by using for loop ===`);
for (const bank of arrayOfBank) {
    if (bank.bank_name=="Kotak Bank") {
        console.log(`Bank details : ${bank.bank_name}, ${bank.location}, ${bank.account_no}, ${bank.ifsc}, ${bank.interest_rate}`);
    }
}

console.log(`\n===log the details using for loop===`);
for (const bank of arrayOfBank) {
    console.log(`Bank details : ${bank.bank_name}, ${bank.location}, ${bank.account_no}, ${bank.ifsc}, ${bank.interest_rate}`);
}