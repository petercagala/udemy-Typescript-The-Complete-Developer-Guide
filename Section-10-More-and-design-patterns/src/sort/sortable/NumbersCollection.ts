import {Sortable} from "./Sortable";
import {Sorter} from "../Sorter";

export class NumbersCollection extends Sorter {
    private _data: number[];

    constructor(data: number[]) {
        super();
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