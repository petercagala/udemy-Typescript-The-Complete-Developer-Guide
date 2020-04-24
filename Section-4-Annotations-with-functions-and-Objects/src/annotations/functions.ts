// Function
let addFunction: (a: number , b: number)=> number;

// Ak inicializujeme funkciu mimo jej deklaracie, musime definovat tiez typ pri jej inicilaizacii
addFunction = (a: number , b: number): number => {
    return a +b;
};

const subtractFunction = (a: number, b: number): number => {
    return a - b;
};

function divide(a: number, b:number): number {
    return a / b;
}

const multiplyFunction = function(a: number, b: number): number {
    return a * b;
};

// aj takto s typovanim deklaracie
// const multiplyFunction: (a: number, b: number) => number = function(a: number, b: number): number {
//     return a * b;
// };

const logger = (message: string): void => {
    console.log(message);
};

const throwError = (message: string): void => {
    if(!message) {
        throw new Error(message);
    }
}

/**
 * If we don't have the reachable end point!
 * @param message
 */
const throwErrorNever = (message: string): never => {
    throw new Error(message);
    // return "dzfzbzd";
}

const todaysWeeather: {date: Date; weather: string} = {
    date: new Date(),
    weather: "fine weather"
};

const logWeather1 = (forecast: {date: Date; weather: string}): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};

/**
 * !!! Toto je fakt krasna funkcia !!!
 * So syntaxou ES6 / JS2015
 * Mozeme mat vstupny objekt velky ako prasa, ale v skutocnosti potrebujeme z neho vytiahnut len nieco
 * Do metody vstupi cely objekt, ale my potrebjeme len date
 * @param forecast
 */
const logWeather2 = ({date,
                         // weather
                     }: {date: Date; weather: string}): void => {
    console.log(date);
    // console.log(weather);
};

logWeather1(todaysWeeather);
logWeather2(todaysWeeather);