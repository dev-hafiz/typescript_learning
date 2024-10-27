//* Basic Syntax:

interface PersonInter {
    name: string;
    age: number;
}

class Student implements PersonInter {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

//* Interface Inheritance:

interface Teacher extends PersonInter {
    subject: string;
}

//* Optional Properties and readonly:

interface UserInterface {
    name: string;
    age?: number; // Optional property
    readonly  isAdming: boolean; // Read only property
}