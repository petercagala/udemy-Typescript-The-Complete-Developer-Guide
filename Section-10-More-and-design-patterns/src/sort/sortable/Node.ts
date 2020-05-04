import {Sortable} from "./Sortable";

export class Node {

    private _data: number;

    private _next: Node | null = null;


    constructor(data: number) {
        this._data = data;
    }

    get data(): number {
        return this._data;
    }

    set data(value: number) {
        this._data = value;
    }

    get next(): Node | null {
        return this._next;
    }

    set next(value: Node | null) {
        this._next = value;
    }
}