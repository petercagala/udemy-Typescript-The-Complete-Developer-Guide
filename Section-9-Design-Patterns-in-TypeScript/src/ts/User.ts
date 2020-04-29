import * as faker from "faker";
import {Location} from './Location';

export const redColour: string = "red";

// in this case, I'm not going to create the name for tue item I'm goint to export
// there could be only one default export
export default "green";

export class User {
    private _firstName: string;

    private _lastName: string;

    private _location: Location;

    constructor() {
        this._firstName = faker.name.firstName();
        this._lastName = faker.name.lastName();
        this._location = new Location(
            parseFloat(faker.address.latitude()),
            parseFloat(faker.address.longitude())
        );
    }


    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get location(): Location {
        return this._location;
    }

    set location(value: Location) {
        this._location = value;
    }



}