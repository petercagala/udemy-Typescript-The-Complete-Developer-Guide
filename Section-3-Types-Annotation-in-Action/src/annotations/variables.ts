// : number -> this is a type annotation
let apples: number = 5;

apples= 45;

let speed: string = "fast speed";

let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

// Array
const colors: string[] = ['red', 'green', 'blue'];
const numbers: number[] = [1,2,3,4,5];
const truths: boolean[] = [true, false, true];

// Classes
class Car {

}

let car1: Car = new Car();



// Objects Literals: Ak nedefinujes aj pour Literal, tak potom do jeho atributov  mozes zadat co chces
// a to nechces
let point1: {x: number; y: number;} = {
    x: 10,
    y: 20
};

let point2 = {
    x: "fzdhzdfhzd", // sem mozem kludne dat bez definicie co chcem a to je na prd
    y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

// When to use annotations
//1.) Function, that return the 'any' type
const json = '{"x": 10, "y": 20}';

// JSON.parse() return 'any' type
// const coordinates: any = JSON.parse(json);
const coordinates: { x: number; y: number; } = JSON.parse(json);

// coordinates.ghdfgxfgzdgdz
console.log(coordinates);





