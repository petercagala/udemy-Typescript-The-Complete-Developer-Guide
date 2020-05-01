

export class Sorter {
    private _sortCollection: number[] | string;


    constructor(sortCollection: number[] | string) {
        this._sortCollection = sortCollection;
    }

    get sortCollection(): number[] | string {
        return this._sortCollection;
    }

    set sortCollection(value: number[] | string) {
        this._sortCollection = value;
    }

    public sort() : void {
        // vytiahne length automaticky
        const {length: lengthOfArray} = this.sortCollection;


        // if collection is type of array numbers
        for (let i = 0; i < lengthOfArray; i++) {
            for(let j = 0; j < lengthOfArray - i - 1; j++) {
                if(this.sortCollection[j] > this.sortCollection[j + 1]) {
                    const leftHand: number = this.sortCollection[j];
                    this.sortCollection[j] = this.sortCollection[j+1];
                    this.sortCollection[j+1] = leftHand;
                }
            }
        }

        //if collection is type of string, we will provide this logic instead


    }
}