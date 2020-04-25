interface Profile {
    name: string,
    age: number,
    coords: {
        lat: number,
        lng: number,
    },
    setAge: (age: number) => void,
}

/**
 * Teoreticky to moze byt aj s kompletnou definitiou typu objektu
 */
const profile: Profile = {
    name: "alex",
    age: 20,
    coords: {
        lat: 12,
        lng: 15,
    },
    setAge: (age: number): void => {
        this.age = age;
    }
}
//
// /**
//  * ES6
//  * Ak chcem vytiahnut iba niektore atributy z velkeho objektu, musim definovat typ celeho objektu
//  z ktoreho vytahujem a idealne premenne, do ktorych to budem vytahovat
//  */
const {
    age: myAge1,
    name: myName1
}: { age: number, name: string } = profile;

const {
    age: myAge2,
    name: myName2
}: { age: number, name: string } = profile;

console.log(`myAge1: ${myAge1}, myName1: ${myName1}, 
myAge2: ${myAge2}, myName2: ${myName2}`);
