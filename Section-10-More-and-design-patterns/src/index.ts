import {Sorter} from './sort/Sorter';
import {NumbersCollection} from "./sort/sortable/NumbersCollection";
import {CharactersCollection} from "./sort/sortable/CharactersCollection";
import {LinkedList} from './sort/sortable/LinkedList';

const sorterNumberArray: Sorter = new Sorter(new NumbersCollection([300,150, 10, 3, -5, 0]));
const sorterString: Sorter = new Sorter(new CharactersCollection('Cagala'));

let linkedList: LinkedList = new LinkedList();
linkedList.add(10);
linkedList.add(3);
linkedList.add(-5);
linkedList.add(0);
const sorterLinkedList: Sorter = new Sorter(linkedList);

sorterNumberArray.sort();
sorterString.sort();
sorterLinkedList.sort();

console.log(sorterNumberArray.sortCollection);
console.log(sorterString.sortCollection);

if(sorterLinkedList.sortCollection instanceof LinkedList) {
    console.log(sorterLinkedList.sortCollection.print());
}
