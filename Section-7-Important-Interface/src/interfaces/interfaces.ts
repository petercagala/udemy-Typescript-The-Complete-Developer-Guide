interface Vehicle {
    name: string,
    year: Date,
    broken: boolean,
    summary(): string, // sem musis dat normalnu funkciu a nie arrow function, aby si mohol pouzivat this
}

const oldCivic: Vehicle = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary():string {
        return  `Name: ${this.name}, 
                       Year: ${this.year},
                       Broken: ${this.broken}`;
    }
};

const printVehicle = (vehicle: Vehicle): void => {
    // console.log(`Name: ${vehicle.name}`);
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`Broken: ${vehicle.broken}`);
    console.log(vehicle.summary());
};

printVehicle(oldCivic);