import * as faker from "faker";

export const redColour: string = "red";

// in this case, I'm not going to create the name for tue item I'm goint to export
// there could be only one default export
export default "green";

export class User {
    private _name: string;

    private _location: {
        latitude: number;
        longitude: number;
    };


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get location(): { latitude: number; longitude: number } {
        return this._location;
    }

    set location(value: { latitude: number; longitude: number }) {
        this._location = value;
    }


    constructor() {
        this._name = faker.name.firstName();
        this._location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude()),
        };
    }
}