// Primitive Types
let num: number = 42;
let str: string = "Hello, TypeScript!";
let bool: boolean = true;
let nul: null = null;
let und: undefined = undefined;
let sym: symbol = Symbol("unique");
let big: bigint = 1234567890123456789n;


// Complex Types
let arr: number[] = [1, 2, 3];
let tup: [string, number] = ["hello", 42];
enum Color { Red, Green, Blue };
let obj: { name: string, age: number } = { name: "Alice", age: 30 };
let func: (x: number) => number = (x) => x * 2;
class Person { name: string; age: number; };
interface Shape { area(): number; };


// Special Types
let anyVal: any = "flexible";
let unkVal: unknown = "unknown type";
let nev: never = (() => { throw new Error("Never"); })();
let voi: void = undefined;

// Type Guards
function isNumber(x: any): x is number {
  return typeof x === "number";
}

// Type Assertions
let len: number = (document.getElementById("myDiv") as HTMLElement).clientWidth;

// Generic Types
function identity<T>(arg: T): T {
  return arg;
}

// Intersection Types
type ColorfulShape = Shape & { color: string };

// Union Types
type NumberOrString = number | string;