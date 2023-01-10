class Bank {
  constructor(bankName, location, accountNo, ifsc, interestRate) {
    this.bankName = bankName;
    this.location =location;
    this.accountNo=accountNo;
    this.ifsc =ifsc;
    this.interestRate=interestRate;
  }
}
// create object with bank name
const axisBank = new Bank ("Axis bank","kolhapur",33897022111, "AXIS2255", "5.5%")
const sbiBank = new Bank ("sbi bank","mumbai",7788994455, "SBIN05055", "5.4%")
const iciciBank = new Bank ("icici bank","sangli",22113344551, "ICICI2011", "5.9%")
const kotakBank = new Bank ("kotak bank","pune",3355889977, "KOT22558", "5.5%")
const hdfcBank = new Bank ("hdfc bank","kagal",4455668751, "HDFC445566", "5.8%")
const panjabBank = new Bank ("panjab bank","satara",55445781125, "PAN448877", "5.7%")

// create s new map with key is account number and value is object name
const mapOfBank = new Map ();
mapOfBank.set(33897022111, axisBank);
mapOfBank.set(7788994455, sbiBank);
mapOfBank.set(22113344551, iciciBank);
mapOfBank.set(3355889977, kotakBank);
mapOfBank.set(4455668751, hdfcBank);
mapOfBank.set(55445781125, panjabBank);
const keyOfMap = mapOfBank.keys();
// console.log(keyOfMap);

// traverse map with bank name, account number ,interest rate
console.log(`Traverse the map with bankname, accountNo, Interest rate`);
for (const key of keyOfMap) {
    const bank = mapOfBank.get(key);
    console.log(`${bank.bankName}, ${bank.accountNo}, ${bank.interestRate}`);
}