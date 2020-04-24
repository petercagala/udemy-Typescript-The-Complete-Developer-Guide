// Function
let addFunction: (a: number , b: number)=> number;

// Ak inicializujeme funkciu mimo jej deklaracie, musime definovat tiez typ pri jej inicilaizacii
addFunction = (a: number , b: number): number => {
    return a +b;
};

const subtractFunction = (a: number, b: number): number => {
    return a - b;
};

function divide(a: number, b:number): number {
    return a / b;
}

const multiplyFunction = function(a: number, b: number): number {
    return a * b;
};

// aj takto s typovanim deklaracie
// const multiplyFunction: (a: number, b: number) => number = function(a: number, b: number): number {
//     return a * b;
// };