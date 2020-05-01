

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

        for (let i = 0; i < lengthOfArray; i++) {
            for(let j = 0; j < lengthOfArray - i - 1; j++) {

                // if collection is type of array numbers
                // Type guard: this.sortCollection instanceof Array
                if(this.sortCollection instanceof Array) {
                    if(this.sortCollection[j] > this.sortCollection[j + 1]) {
                        const leftHand: number = this.sortCollection[j];
                        this.sortCollection[j] = this.sortCollection[j+1];
                        this.sortCollection[j+1] = leftHand;
                    }
                }

                // if collection is type of string
                // Type guard: typeof this.sortCollection === 'string'
                if(typeof this.sortCollection === 'string') {

                }


            }
        }








    }
}