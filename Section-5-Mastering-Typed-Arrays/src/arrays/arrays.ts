let carMakes: string[] = ['BMW'];

// ...carMakes: rozlej to ako yablko
carMakes= [...carMakes, 'Ford', 'Toyota', 'Skoda'];

const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [
    ['car1'],
    ['car2'],
    ['car3']
];

// Help with inference when extracting values
console.log(carMakes);
const car1: string = carMakes[0];
const car2lastCar: string = carMakes.pop();

// Prevent incompatible values
// carMakes.push(12);

// Help with map
carMakes.map((car: string): string => {
    return car;
});

// Flexible Types
const importantDates: (string | Date)[] = [new Date(), '2020-10-2'];
importantDates.push('2023-12-02');
importantDates.push(new Date());
// importantDates.push(20);

// 1. Vytvor novu vetvu feature/releaseXXX
// 2. vo vetve feature/releaseXXX urob nejake commity
// 3. z vetvy feature/releaseXXX sprav novu vetvu feature/releaseXXXwithCommits, kde chces, aby bolo vsetky commity v buducnosti vidiet
// 4. vo vetve feature/releaseXXX: git rebase --interactive HEAD~nejakeCislo  (fukni tam pocet commitov
// ktore chces spojit plus este jeden navyse, do ktoreho sa to vsetko spoji)
// 5. v interaktivnom okne nastav commity, ktore chces do najblizsieho spojit
// 6. zadaj comment
// 7. skus tento spojeny commit mergnut do master vetvy, co to spravi, ci budem mat v konecnom dosledku v master
// jeden commit so vsetkymi urobenymi zmenami a zaroven mi ostne vo feature/cagalpte moje ciastkove commity

// change1
// change2
// change3
// change4 - uz len v release2