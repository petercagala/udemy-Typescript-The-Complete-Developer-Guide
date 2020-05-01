

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
        // vytiahne length automaticky
        const {length: lengthOfArray} = this.sortCollection;

        for (let i = 0; i < lengthOfArray; i++) {
            for(let j = 0; j < lengthOfArray - i - 1; j++) {
                if(this.sortCollection[j] > this.sortCollection[j + 1]) {
                    const leftHand: number = this.sortCollection[j];
                    this.sortCollection[j] = this.sortCollection[j+1];
                    this.sortCollection[j+1] = leftHand;
                }
            }
        }


    }
}