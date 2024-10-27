"use strict";
// Primitive Types
let num = 42;
let str = "Hello, TypeScript!";
let bool = true;
let nul = null;
let und = undefined;
let sym = Symbol("unique");
let big = 1234567890123456789n;
// Complex Types
let arr = [1, 2, 3];
let tup = ["hello", 42];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let obj = { name: "Alice", age: 30 };
let func = (x) => x * 2;
;
// Special Types
let anyVal = "flexible";
let unkVal = "unknown type";
let nev = (() => { throw new Error("Never"); })();
let voi = undefined;
// Type Guards
function isNumber(x) {
    return typeof x === "number";
}
// Type Assertions
let len = document.getElementById("myDiv").clientWidth;
// Generic Types
function identity(arg) {
    return arg;
}
