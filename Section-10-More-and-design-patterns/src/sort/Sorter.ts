import {NumbersCollection} from "./sortable/NumbersCollection";
import {Sortable} from "./sortable/Sortable";

export class Sorter {
    private _sortCollection: Sortable;


    constructor(sortCollection: Sortable) {
        this._sortCollection = sortCollection;
    }

    get sortCollection(): Sortable {
        return this._sortCollection;
    }

    set sortCollection(value: Sortable) {
        this._sortCollection = value;
    }

    public sort() : void {
        // vytiahne length automaticky
        const lengthOfArray = this.sortCollection.getLength();

        for (let i = 0; i < lengthOfArray; i++) {
            for(let j = 0; j < lengthOfArray - i - 1; j++) {
                if(this.sortCollection.compare(j, j+1)) {
                    this.sortCollection.swap(j, j +1);
                }
            }
        }








    }
}