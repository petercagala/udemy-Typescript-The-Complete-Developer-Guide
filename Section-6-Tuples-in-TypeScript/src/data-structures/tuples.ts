const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
};

// tuples usage -->  pepsi: [string, boolean, number] this is order of types definition for the tuple
// the order inside the tuple is very important
const pepsi1: [string, boolean, number] = ['brown', true, 40];

// create type definition like:  type Drink
type Drink = [string, boolean, number];
const pepsi2: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

pepsi1.push( 'yellow', false,  50);
pepsi2.push( 'yellow', false,  50);

console.log(pepsi1);
console.log(pepsi2);

// with tuples
const carSpecs1: [number, number] = [400, 54356];

// with object it is significantly better
const carSpecs2 = {
    horsePower: 400,
    weight: 54356,
};