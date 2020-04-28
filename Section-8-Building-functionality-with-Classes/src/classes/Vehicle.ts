export  class Vehicle {
    // Toto sa inicializuje este pred zavolanim konstruktora
    private _color: string = 'red';



    constructor(color: string) {
        this.color = color;
    }


    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }



    public drive(): void {
        console.log("Hello Vehicle");
    }

    private honk(): void {
        console.log("Hello honk");
    }

    public startDrivingProcess(): void {
        this.honk();
    }
}