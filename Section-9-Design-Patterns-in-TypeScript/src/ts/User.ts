import faker from 'faker';

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
        // this._name = name;
        // this._location = location;
    }
}