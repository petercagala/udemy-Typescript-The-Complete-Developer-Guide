import {Sortable} from "./Sortable";

export class CharactersCollection implements Sortable {

    private _data: string;

    constructor(data: string) {
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