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
