import {Sortable} from "./Sortable";
import {Sorter} from "../Sorter";

export class CharactersCollection extends Sorter {

    private _data: string;

    constructor(data: string) {
        super();
        this._data = data;
    }

    get data(): string {
        return this._data;
    }

    set data(value: string) {
        this._data = value;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLowerCase()> this.data[rightIndex].toLowerCase();
    }

    getLength(): number {
        return this.data.length;
    }

    swap(leftIndex: number, rightIndex: number): void {
        const charactersArray: string[] = this.data.split('');
        const leftHandCharacter: string = charactersArray[leftIndex];

        charactersArray[leftIndex] = charactersArray[rightIndex];
        charactersArray[rightIndex] = leftHandCharacter;

        this.data = charactersArray.join('');
    }

}