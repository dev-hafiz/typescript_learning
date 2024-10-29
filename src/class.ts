
//class Teacher {
//    name : string
//     email : string
//     readonly city : string = "New York"
//     constructor(name : string, email: string){
//         this.name = name,
//         this.email = email
//     }
// }

// const alice = new Teacher("Alice", "alice@touch.com")
// console.log(alice.city)



class Teacher {
   
    private _courseCount : number = 1
    constructor(
       public name : string, 
       private email: string, 
       private teacherId: number, 
       public subject : string, 
       readonly city: string
    ){
    }

    get getAppleEmail() : string {
        return `Apple ${this.email}`
    }

    get courseCount() : number{
        return this._courseCount
    }

    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

const alice = new Teacher("Alice", "alice@touch.com", 23423424, "English", "New York")





//!* class for RoyalEnfield Bike 
class RoyalEnfield {
    
    
    constructor(
        public _model : string, // Fully accessable
        readonly _engine: string, // Read data only
        private _cc: number, // Accessable for parent class
        protected fuelTank : number // Protected are accessable for inherit class
    ){
    }

    get model(): string {
        return this._model
    }

    get engine(): string {
        return this.engine
    }

    get cc() : string {
        return this.cc
    }

    set cc( newCc : number){
        this._cc = newCc;
        if(newCc >= 300){
            console.log("I will buy this bike!");
        }
    }

    startEngine() : void {
        console.log("Royal Enfield engine started. Thump, thump, thump...");
    }

    brake() : void {
        console.log("Royal Enfield braking smoothly.");
    }

}

class SubRoyalEnfield extends RoyalEnfield {
    isSameBrand : boolean = true;
    changeFueltank(){
        this.fuelTank = 500
    }
}

// Create a Royal Enfield object
const myRoyalEnfield = new RoyalEnfield("Classic 350", "Single-cylinder", 350, 400);
// Set the cc to 400
myRoyalEnfield.cc = 400; 

// Access properties and methods
console.log("Start the Bike:", myRoyalEnfield.startEngine());

