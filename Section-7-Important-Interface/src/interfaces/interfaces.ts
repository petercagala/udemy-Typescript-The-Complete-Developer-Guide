// interface Vehicle {
//     name: string;
//     year: Date;
//     broken: boolean;
//     summary(): string; // sem musis dat normalnu funkciu a nie arrow function, aby si mohol pouzivat this
// }

// const oldCivic: Vehicle = {
//     name: 'civic',
//     year: new Date(),
//     broken: true,
//     summary():string {
//         return  `Name: ${this.name},
//                        Year: ${this.year},
//                        Broken: ${this.broken}`;
//     }
// };

// Nezadefinujem interface-u atributy
interface Reportable {
    // name: string;
    // year: Date;
    // broken: boolean;
    summary(): string; // sem musis dat normalnu funkciu a nie arrow function, aby si mohol pouzivat this
}

/**
 * Ak mu nedam typovu definuciu oldCivic: Vehicle
 */
const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary():string {
        return  `Name: ${this.name}, 
                       Year: ${this.year},
                       Broken: ${this.broken}`;
    }
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary():string {
        return `My dring contains ${this.sugar} grams of shugar`;
    },
};

/**
 * vehicle ma mat vsetky atributy a metody z interface Vehicle. Teda ak do neho vstupuje objekt,
 * ktory nieje priamo zadefinovany ako Vehicle, podstatne je, ci ma vsetky vlastnosti, co ma mat
 * Vehicle. Ak ma, vsetko je ok a to co ma nzvyse oproti tomuto interfaceu je len jeho bonus
 * a vobec to neprekaza
 * @param vehicle
 */
const printSummary = (reportable: Reportable): void => {
    // console.log(`Name: ${vehicle.name}`);
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`Broken: ${vehicle.broken}`);
    console.log(reportable.summary());
};

printSummary(oldCivic);
printSummary(drink);