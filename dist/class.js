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
console.log(alice.courseCount);
