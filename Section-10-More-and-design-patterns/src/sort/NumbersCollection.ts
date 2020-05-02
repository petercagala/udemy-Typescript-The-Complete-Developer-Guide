
export class NumbersCollection {
    private _data: number[];

    constructor(data: number[]) {
        this._data = data;
    }

    get data(): number[] {
        return this._data;
    }

    set data(value: number[]) {
        this._data = value;
    }

    compare(leftIndex: number): boolean {
        return this.data[leftIndex] > this.data[leftIndex + 1];
    }

    swap(leftIndex: number): void {
        const leftHand: number = this.data[leftIndex];
        this.data[leftIndex] = this.data[leftIndex+1];
        this.data[leftIndex+1] = leftHand;
    }

    get length(): number {
       return this.data.length;
    }
}