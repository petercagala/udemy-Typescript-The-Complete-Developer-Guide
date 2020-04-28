export  class Vehicle {
    public drive(): void {
        console.log("Hello Vehicle");
    }

    private honk(): void {
        console.log("Hello honk");
    }

    protected startDrivingProcess(): void {
        this.honk();
    }
}