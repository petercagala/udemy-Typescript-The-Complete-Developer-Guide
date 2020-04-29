import * as faker from 'faker';
import {Location} from './Location';

export class Company {
    private _companyName: string;

    private _catchPhrase: string;

    private _location: Location;

    constructor() {
        this.companyName = faker.company.companyName();
        this._companyName = faker.company.catchPhrase();
        this.location = new Location(
            parseFloat(faker.address.latitude()),
            parseFloat(faker.address.longitude())
        )
    }


    get companyName(): string {
        return this._companyName;
    }

    set companyName(value: string) {
        this._companyName = value;
    }

    get catchPhrase(): string {
        return this._catchPhrase;
    }

    set catchPhrase(value: string) {
        this._catchPhrase = value;
    }

    get location(): Location {
        return this._location;
    }

    set location(value: Location) {
        this._location = value;
    }
}