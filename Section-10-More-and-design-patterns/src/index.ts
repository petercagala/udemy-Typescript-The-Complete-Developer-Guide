import {Sorter} from './sort/Sorter';
import {NumbersCollection} from "./sort/sortable/NumbersCollection";
import {CharactersCollection} from "./sort/sortable/CharactersCollection";

const sorterNumberArray: Sorter = new Sorter(new NumbersCollection([300,150, 10, 3, -5, 0]));
const sorterString: Sorter = new Sorter(new CharactersCollection('Cagala'));

sorterNumberArray.sort();
sorterString.sort();

console.log(sorterNumberArray.sortCollection);
console.log(sorterString.sortCollection);