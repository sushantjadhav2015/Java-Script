class Vehicle {
  constructor(company, VehicleType, model, engine, tyre) {
    this.company = company;
    this.VehicleType = VehicleType;
    this.model = model;
    this.engine = engine;
  }
}
let velHonda = new Vehicle("Honda", "Two-Wheeler", "shine SP", "125CC");
console.log(`1)`, velHonda);

let velKTM = new Vehicle("KTM", "Two-Wheeler", "Duke", "200CC");
console.log(`2)`,velKTM );

let  velYamaha = new Vehicle("Yamaha", "Two-Wheeler", "FZ 2.0", "150CC");
console.log(`3)`,velYamaha );

let velHero = new Vehicle("Hero", "Two-Wheeler", "Xtreme", "150CC");
console.log(`4)`,velHero );

let velTvs = new Vehicle("TVS", "Two-Wheeler", "iCube", "Electric");
console.log(`5)`,velTvs );

console.log(`=======Define class for college========`);
class College{
  constructor(Name, Location,Department,){
    this.Name=Name;
    this.Location=Location;
    this.Department=Department;
  }
  details(){
    console.log(this.Name, this.Location, this.Department);
  }
}

let colDYP = new College("DYPTC", "Kolhapur","Mechanical, civil, IT")
colDYP.details()

let colKIT = new College("KIT","kolhapur","mechanical, IT,Automobile")
colKIT.details()

let colDKT = new College("DKTE","Ichalkarnji","Mechanical,Textile, civil, IT")
colDKT.details()

let colTKTI = new College("Tatya saheb Kore","Warnanagar", "mechanical,ENTC,civil")
colTKTI.details()

let colSGU =new College("Sanjay Ghodavt unv.", "Aatigre", "mechanical, electrical, civil, ENTC")
colSGU.details()

















