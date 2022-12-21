console.log(`=======Male Marriage Eligibility======`);
function maleMarrigeEligiblity(gender, age, boyName) {
  var marriage = (gender =
    "Male" && age >= 21
      ? `Hey "${boyName}" you are eligibal for marriage`
      : `Hey "${boyName}" you are not eligibal for marriage`);
  console.log(marriage);
}
maleMarrigeEligiblity("Male", 25, "Billgates");
maleMarrigeEligiblity("Male", 17, "Stew Jobs");

console.log(`\n======Female Marriage Eligibility======`);
function femaleMarrigeEligiblity(gender, age, girlName) {
  var marriage = (gender =
    "Female" && age >= 18
      ? `Hey "${girlName}" you are eligibal for marriage`
      : `Hey "${girlName}" you are not eligibal for marriage`);
  console.log(marriage);
}
femaleMarrigeEligiblity("Female", 16, "Jenifer");
femaleMarrigeEligiblity("female", 27, "Malinda Gates");
