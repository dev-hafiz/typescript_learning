"use strict";
//* Basic Syntax:
let personArr = ["Alice", 23, true];
console.log(personArr[0]);
console.log(personArr[1]);
console.log(personArr[2]);
let [namePerson, age, isAdult] = personArr;
console.log(namePerson);
console.log(age);
console.log(isAdult);
//* Function Return Values:
function getUserInfo() {
    return ["Alice", 30];
}
// let [name, age] = getUserInfo();
