import {NumbersCollection} from "./sortable/NumbersCollection";
import {Sortable} from "./sortable/Sortable";

export abstract class Sorter implements Sortable {

    public sort() : void {
        // vytiahne length automaticky
        const lengthOfArray = this.getLength();

        for (let i = 0; i < lengthOfArray; i++) {
            for(let j = 0; j < lengthOfArray - i - 1; j++) {
                if(this.compare(j, j+1)) {
                    this.swap(j, j +1);
                }
            }
        }
    }

    abstract compare(leftIndex: number, rightIndex: number): boolean;

    abstract getLength(): number;

    abstract swap(leftIndex: number, rightIndex: number): void;


}