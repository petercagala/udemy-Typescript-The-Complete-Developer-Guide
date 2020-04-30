export class CustomMap {
    private _googleMap: google.maps.Map;


    constructor(divId: string) {
        this._googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement,
            {
                zoom: 2.2,
                center: {
                    lat: 0,
                    lng: 0,
                },
            });
    }

    get googleMap(): google.maps.Map {
        return this._googleMap;
    }
}