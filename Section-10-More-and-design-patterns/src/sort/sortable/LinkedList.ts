import {Sortable} from "./Sortable";
import {Node} from "./Node";
import {Sorter} from "../Sorter";

export class LinkedList extends Sorter{

    private _head: Node | null = null;

    constructor(head: Node | null) {
        super();
        this._head = head;
    }

    get head(): Node | null {
        return this._head;
    }

    set head(value: Node | null) {
        this._head = value;
    }

    add(data: number): void {
        if(!this.head) {
            this.head = new Node(data);
            return;
        }

        let tail = this.head;
        while(tail.next) {
            tail = tail.next;
        }
        tail.next = new Node(data);
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if(!this.head) {
            throw new Error('List is empty!');
        }

        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    getLength(): number {

        if(!this.head) {
            return 0;
        }

        let length: number = 1;
        let node = this.head;

        while(node.next) {
            node = node.next;
            length ++;
        }
        return length;
    }

    at(index: number):  Node {

        if(!this.head) {
            throw new Error('Index out of bounds!');
        }

        let internalIndex = 0;
        let node: Node | null = this.head;

        while(node) {
            if(index === internalIndex) {
                return node;
            }
            node = node.next;
            internalIndex ++;
        }
        throw new Error('Index out of bounds!');
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftNode: Node = this.at(leftIndex);
        const rightNode: Node = this.at(rightIndex);

        const leftHand: number = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }

    print(): void {
        if(!this.head) {
            console.log(this);
            return;
        }

        let node: Node | null = this.head;
        while(node) {
            console.log(node.data);
            node = node.next;
        }
    }

}