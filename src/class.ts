
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
console.log(alice.courseCount)
