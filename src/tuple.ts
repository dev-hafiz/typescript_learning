//* Basic Syntax:

let personArr : [string, number, boolean] = ["Alice", 23, true];

console.log(personArr[0])
console.log(personArr[1])
console.log(personArr[2])

let [namePerson, age, isAdult] = personArr;
console.log(namePerson)
console.log(age)
console.log(isAdult)


//* Function Return Values:

function getUserInfo(): [string, number] {
    return ["Alice", 30];
}

// let [name, age] = getUserInfo();


//* Representing Fixed-Size Data Structures:
type Point = [number, number];
let point: Point = [10, 20];

