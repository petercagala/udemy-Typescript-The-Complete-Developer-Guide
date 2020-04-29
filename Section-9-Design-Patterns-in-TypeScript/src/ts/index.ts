import {User, redColour} from './User';
import {Company} from "./Company";

// if we import some variable withou {}, it should be default export variable, the name could be whatever
import greenDefaultVariable from './User';

const user: User = new User();

const company: Company = new Company();

console.log(`Default variable is: ${greenDefaultVariable}`);
console.log(`variable User is: ${user}`);
console.log(user);
console.log(`variable redColour is: ${redColour}`);

console.log(company);

// we have to help typeScript understand, that 'google' is an global variable
// npm install @types/googlemaps

google