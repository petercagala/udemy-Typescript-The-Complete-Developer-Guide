import * as faker from 'faker';
import {Location} from './Location';
import {Mappable} from "./Mappable";

export class Company implements Mappable {
    private _companyName: string;

    private _catchPhrase: string;

    private _location: Location;

    constructor() {
        this._companyName = faker.company.companyName();
        this._catchPhrase = faker.company.catchPhrase();
        this._location = new Location(
            parseFloat(faker.address.latitude()),
            parseFloat(faker.address.longitude())
        )
    }

    markerContent(): string {
        return `
            <div>
                <h2>Company name: ${this.companyName} </h2>
                <h3>Catch phrase: ${this.catchPhrase}</h3>
            </div>
        `;
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