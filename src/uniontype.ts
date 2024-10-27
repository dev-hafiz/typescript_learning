// Basic Example:
let val : string | number;
val = 20;
val = "twenty";


//* Real-world Use Cases: (Function Parameters:)

const greetings  = (name : string | number) : void => {
    if (typeof name === 'string') {
        console.log(`Hello, ${name}!`);
    } else {
        console.log(`Welcome, user ${name}`);
    }
}
greetings("Alice");
greetings(12);


//*  Complex Type Unions:
type User = {
    name: string;
    email: string;
};

type Admin = {
    name: string;
    role: 'admin';
};

type UserOrAdmin = User | Admin;

let user: UserOrAdmin = { name: 'Alice', email: 'alice@example.com' };

