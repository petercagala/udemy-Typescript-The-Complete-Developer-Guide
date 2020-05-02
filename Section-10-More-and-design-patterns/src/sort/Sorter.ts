import {NumbersCollection} from "./NumbersCollection";

export class Sorter {
    private _sortCollection: NumbersCollection;


    constructor(sortCollection: NumbersCollection) {
        this._sortCollection = sortCollection;
    }

    get sortCollection(): NumbersCollection {
        return this._sortCollection;
    }

    set sortCollection(value: NumbersCollection) {
        this._sortCollection = value;
    }

    public sort() : void {
        // vytiahne length automaticky
        const lengthOfArray = this.sortCollection.length;

        for (let i = 0; i < lengthOfArray; i++) {
            for(let j = 0; j < lengthOfArray - i - 1; j++) {
                if(this.sortCollection.compare(j)) {
                    this.sortCollection.swap(j);
                }
            }
        }








    }
}