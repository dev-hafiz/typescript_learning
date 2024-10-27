
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
   
    constructor(
        public name : string, 
       private email: string, 
       private teacherId: number, 
       public subject : string, 
       readonly city: string
    ){
        
    }
}

const alice = new Teacher("Alice", "alice@touch.com", 23423424, "English", "New York")

