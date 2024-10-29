"use strict";
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
    constructor(name, email, teacherId, subject, city) {
        this.name = name;
        this.email = email;
        this.teacherId = teacherId;
        this.subject = subject;
        this.city = city;
        this._courseCount = 1;
    }
    get getAppleEmail() {
        return `Apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const alice = new Teacher("Alice", "alice@touch.com", 23423424, "English", "New York");
//!* class for RoyalEnfield Bike 
class RoyalEnfield {
    constructor(_model, // Fully accessable
    _engine, // Read data only
    _cc, // Accessable for parent class
    fuelTank // Protected are accessable for inherit class
    ) {
        this._model = _model;
        this._engine = _engine;
        this._cc = _cc;
        this.fuelTank = fuelTank;
    }
    get model() {
        return this._model;
    }
    get engine() {
        return this.engine;
    }
    get cc() {
        return this.cc;
    }
    set cc(newCc) {
        this._cc = newCc;
        if (newCc >= 300) {
            console.log("I will buy this bike!");
        }
    }
    startEngine() {
        console.log("Royal Enfield engine started. Thump, thump, thump...");
    }
    brake() {
        console.log("Royal Enfield braking smoothly.");
    }
}
class SubRoyalEnfield extends RoyalEnfield {
    constructor() {
        super(...arguments);
        this.isSameBrand = true;
    }
    changeFueltank() {
        this.fuelTank = 500;
    }
}
// Create a Royal Enfield object
const myRoyalEnfield = new RoyalEnfield("Classic 350", "Single-cylinder", 350, 400);
// Set the cc to 400
myRoyalEnfield.cc = 400;
// Access properties and methods
console.log("Start the Bike:", myRoyalEnfield.startEngine());
