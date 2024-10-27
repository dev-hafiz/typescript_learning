//* Syntax ( type AliasName = Type )

//* Without alias
let person : {
    name: string,
    age : number,
    isAdult : boolean
} = {
    name : "Alica",
    age : 19,
    isAdult : true
}

//* With alias

type Person = {
    name : string,
    age : number,
    isAdult : boolean
}

let person1 : Person =  {
    name : "Alica",
    age : 24,
    isAdult : true
}


//* Simplifying Complex Types:
type ComplexObject = {
    property1: string;
    property2: number[];
    property3: { a: boolean, b: string };
};

// let obj: ComplexObject = { ... };


//* Creating Custom Type Names:
type UserId = string;
type ProductId = number;

let userId: UserId = "user123";
let productId: ProductId = 456;


//* Making Code More Readable:
type Address = {
    street: string;
    city: string;
    zipCode: string;
};

function printAddress(address: Address) {
    // ...
}

