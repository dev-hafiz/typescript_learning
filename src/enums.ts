//* Basic Syntax:
// enum Color {
//     Red,
//     Green,
//     Blue
// }

// let myColor: Color = Color.Green;



//* Number Enums: ( By default, enum members are assigned numeric values starting from 0. )
// enum Color {
//     Red = 1,
//     Green,
//     Blue
// }

// let myColor: Color = Color.Green; // Value of Green is 2

//* String Enums:


// enum Color {
//     Red = "RED",
//     Green = "GREEN",
//     Blue = "BLUE"
// }

//* Using Enums: ( Switch Statements: )
function getColorName(color: Color): string {
    switch (color) {
        case Color.Red:
            return "Red";
        case Color.Green:
            return "Green";
        case Color.Blue:
            return "Blue";
        default:
            return  "Unknown";   

    }
}

// Object Properties:
interface Car {
    color: Color;
}

let myCar: Car = {
    color: Color.Red
};