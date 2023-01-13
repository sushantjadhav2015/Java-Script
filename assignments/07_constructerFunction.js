console.log(`1) and 2)`);

function bank(bankName, location, ifscCode, branchCode) {
    (this.bankName = bankName),
    (this.location = location),
    (this.ifscCode = ifscCode),
    (this.branchCode = branchCode);
}

bank.prototype.openTime = "9 AM IST";
let yes = new bank("yesBank", "kolhapur", "YESB05547", "40125");
console.log(
    `Bank detalis : name: ${yes.bankName}, location: ${yes.location}, ifscCode: ${yes.ifsccode}, branchcode: ${yes.branchCode}`
);

let sbi = new bank("sbiBank", "pune", "SBIN02033", "05550");
console.log(
    `Bank detalis : name: ${sbi.bankName}, location: ${sbi.location}, ifscCode: ${sbi.ifsccode}, branchcode: ${sbi.branchCode}`
);

let axis = new bank("axisBank", "mumbai", "axis405560", "405560");
console.log(
    `Bank detalis : name: ${axis.bankName}, location: ${axis.location}, ifscCode: ${axis.ifsccode}, branchcode: ${axis.branchCode}`
);

let mah = new bank("mahBank", "nipani", "MHA558899", "558899");
console.log(
    `Bank detalis : name: ${mah.bankName}, location: ${mah.location}, ifscCode: ${mah.ifsccode}, branchcode: ${mah.branchCode}`
);

bank.prototype.openTime = "9 AM IST";
bank.prototype.closeTime = "6 PM IST";

console.log(
    `\n5) open and close time of sbi bank is : ${sbi.openTime} and ${sbi.closeTime}`
);
console.log(
    `\n6) open and close time of axis bank is : ${axis.openTime} and ${axis.closeTime}`
);

console.log(
    `\n7) The bank name is "${yes.bankName}", barnch code is "${yes.location}", open time "${yes.openTime}"`
);