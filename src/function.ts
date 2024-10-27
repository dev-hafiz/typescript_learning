//* Basic Function Declaration:
function greet (name : string) : void {
        console.log(`Hello ${name} !`)
}
greet("Alice");

//* Function with Return Type:
function add (a : number, b: number) : number {
    return a + b
}
let result = add(5, 7)


//* Optional Parameters:
function greetingOptional (name: string, lastName?: string) : void {
    if(lastName){
        console.log(`Hello ${name} ${lastName} !`)
    } else { 
        console.log(`Hello ${name} !`)
    }
}
greetingOptional("Alice"); // Output: Hello, Alice!
greetingOptional("Bob", "Smith"); // Output: Hello, Bob Smith!


//* Default Parameters:
function greetDefault(name: string, lastName: string = "Doe"): void {
    console.log(`Hello ${name} ${lastName} !`);
}

greetDefault("Alice"); // Output: Hello, Alice Doe!
greetDefault("Bob", "Smith"); // Output: Hello, Bob Smith!


//* Rest Parameters:
function sumNumbers  (...numbers : number[]) : number {
    let total = 0
    for (let num of numbers) {
        total += num;
    }
    return total;
}
let resultOfSum = sumNumbers(1, 2, 3, 4, 5); // result will be 15
