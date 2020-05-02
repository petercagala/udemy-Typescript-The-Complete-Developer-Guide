import {Sorter} from './sort/Sorter';
import {NumbersCollection} from "./sort/NumbersCollection";

const sorterNumberArray: Sorter = new Sorter(new NumbersCollection([300,150, 10, 3, -5, 0]));
sorterNumberArray.sort();

console.log(sorterNumberArray.sortCollection);