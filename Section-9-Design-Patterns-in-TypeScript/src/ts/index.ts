import {User, redColour} from './User';

// if we import some variable withou {}, it should be default export variable, the name could be whatever
import greenDefaultVariable from './User';

const user: User = new User();

console.log(`Default variable is: ${greenDefaultVariable}`);
console.log(`variable User is: ${user}`);
console.log(user);
console.log(`variable redColour is: ${redColour}`);