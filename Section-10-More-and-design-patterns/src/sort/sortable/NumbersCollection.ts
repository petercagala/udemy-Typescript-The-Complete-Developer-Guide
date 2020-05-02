import {Sortable} from "./Sortable";

export class NumbersCollection implements Sortable {
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

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftHand: number = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }

    getLength(): number {
       return this.data.length;
    }
}