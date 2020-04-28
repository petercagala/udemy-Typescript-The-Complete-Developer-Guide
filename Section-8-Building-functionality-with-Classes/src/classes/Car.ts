import {Vehicle} from "./Vehicle";

export class Car extends Vehicle {

    public drive(): void {
        console.log("Hello Car");
    }

    public start(): void {
        this.startDrivingProcess();
    }

}