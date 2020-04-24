// Function
let addFunction: (a: number , b: number)=> number;

// Ak inicializujeme funkciu mimo jej deklaracie, musime definovat tiez typ pri jej inicilaizacii
addFunction = (a: number , b: number): number => {
    return a +b;
};