// by using switch case console month of year
function monthOfYear(monthNumber){
    switch (monthNumber) {
        case 1:
            console.log(`this month is Janavary`); 
        break;
        case 2:
            console.log(`this month is Feburvary`); 
        break;
        case 3:
            console.log(`this month is March`); 
        break;
        case 4:
            console.log(`this month is April`); 
        break;
        case 5:
            console.log(`this month is May`); 
        break;
        case 6:
            console.log(`this month is June`); 
        break;
        case 7:
            console.log(`this month is July`); 
        break;
        case 8:
            console.log(`this month is Augest`); 
        break;
        case 9:
            console.log(`this month is September`); 
        break;
        case 10:
            console.log(`this month is Octomber`); 
        break;
        case 11:
            console.log(`this month is Novenber`); 
        break;
        case 12:
            console.log(`this month is December`); 
        break;
        default:
            console.log(`Enter valid month`);
        break;
    }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);