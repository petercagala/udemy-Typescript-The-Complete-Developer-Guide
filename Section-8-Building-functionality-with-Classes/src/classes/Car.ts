import {Vehicle} from "./Vehicle";

export class Car extends Vehicle {

    public drive(): void {
        console.log("Hello Car");

        // setter
        // this.color = 'green';

        // getter
        console.log(`Vehicle has colour: ${this.color}`)
    }

}