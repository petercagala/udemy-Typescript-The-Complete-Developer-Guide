import {Vehicle} from "./Vehicle";

export class Car extends Vehicle {

    private _wheels: number;


    constructor(color: string, wheels: number) {
        super(color);
        this._wheels = wheels;
    }


    get wheels(): number {
        return this._wheels;
    }

    set wheels(value: number) {
        this._wheels = value;
    }

    public drive(): void {
        console.log("Hello Car");

        // setter
        // this.color = 'green';

        // getter
        console.log(`Vehicle has colour: ${this.color}`);
        console.log(`Vehicle has wheels: ${this.wheels}`);
    }

}