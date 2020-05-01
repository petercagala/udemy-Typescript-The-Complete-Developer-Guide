import {Sorter} from './sort/Sorter';

const sorter: Sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();

console.log(sorter.sortCollection);

// https://www.jetbrains.com/help/idea/running-and-debugging-typescript.html
// skus tonastavit len pre ts-node a hotovo