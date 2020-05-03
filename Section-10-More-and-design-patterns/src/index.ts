import {NumbersCollection} from "./sort/sortable/NumbersCollection";
import {CharactersCollection} from "./sort/sortable/CharactersCollection";
import {LinkedList} from './sort/sortable/LinkedList';

const numbersCollection: NumbersCollection = new NumbersCollection([300,150, 10, 3, -5, 0])
const charactersCollection: CharactersCollection = new CharactersCollection('Cagala');

let linkedList: LinkedList = new LinkedList(null);
linkedList.add(10);
linkedList.add(3);
linkedList.add(-5);
linkedList.add(0);

numbersCollection.sort();
charactersCollection.sort();
linkedList.sort();

console.log(numbersCollection.data);
console.log(charactersCollection.data);

if(linkedList instanceof LinkedList) {
    console.log(`LinkedList ordered collection:`);
    linkedList.print();
}
