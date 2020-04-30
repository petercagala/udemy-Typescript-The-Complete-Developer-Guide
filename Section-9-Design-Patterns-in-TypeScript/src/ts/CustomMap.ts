import {User} from './User';
import {Company} from "./Company";
import LatLng = google.maps.LatLng;

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

    addMarker(mappable: User | Company): void {
        // Ak mappable moze byt aj User aj Company, bude ponukat iba spolocne atributy a metody
        // mappable.

        new google.maps.Marker({
                map: this.googleMap,
                position: {
                    lat: mappable.location.latitude,
                    lng: mappable.location.longitude,
                }
            }
        );
    }

    // addCompanyMarker(company: Company): void {
    //     new google.maps.Marker({
    //             map: this.googleMap,
    //             position: {
    //                 lat: company.location.latitude,
    //                 lng: company.location.longitude,
    //             }
    //         }
    //     );
    // }
}