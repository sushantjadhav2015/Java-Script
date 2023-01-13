// by using switch case console month of year
function monthOfYear(monthNumber){
    switch (monthNumber) {
        case 1:
            console.log(`This month is Janavary`); 
        break;
        case 2:
            console.log(`This month is Feburvary`); 
        break;
        case 3:
            console.log(`This month is March`); 
        break;
        case 4:
            console.log(`This month is April`); 
        break;
        case 5:
            console.log(`This month is May`); 
        break;
        case 6:
            console.log(`This month is June`); 
        break;
        case 7:
            console.log(`This month is July`); 
        break;
        case 8:
            console.log(`This month is Augest`); 
        break;
        case 9:
            console.log(`This month is September`); 
        break;
        case 10:
            console.log(`This month is Octomber`); 
        break;
        case 11:
            console.log(`This month is Novenber`); 
        break;
        case 12:
            console.log(`This month is December`); 
        break;
        default:
            console.log(`${monthNumber} : Enter valid month`);
        break;
    }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);