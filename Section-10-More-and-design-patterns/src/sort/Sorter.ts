

export class Sorter {
    private _sortCollection: number[];


    constructor(sortCollection: number[]) {
        this._sortCollection = sortCollection;
    }

    get sortCollection(): number[] {
        return this._sortCollection;
    }

    set sortCollection(value: number[]) {
        this._sortCollection = value;
    }

    public sort() : void {

    }
}