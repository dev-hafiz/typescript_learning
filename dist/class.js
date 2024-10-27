"use strict";
// class Teacher {
//     name : string
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
    }
}
const alice = new Teacher("Alice", "alice@touch.com", 23423424, "English", "New York");
