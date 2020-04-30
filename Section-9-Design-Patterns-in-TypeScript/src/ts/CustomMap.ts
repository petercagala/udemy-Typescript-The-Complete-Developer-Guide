import {User} from './User';
import {Company} from "./Company";
import LatLng = google.maps.LatLng;
import {Mappable} from "./Mappable";
import InfoWindow = google.maps.InfoWindow;
import MapCanvasProjection = google.maps.MapCanvasProjection;

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

    addMarker(mappable: Mappable): void {
        // Ak mappable moze byt aj User aj Company, bude ponukat iba spolocne atributy a metody
        // mappable.

        const marker: google.maps.Marker = new google.maps.Marker({
                map: this.googleMap,
                position: {
                    lat: mappable.location.latitude,
                    lng: mappable.location.longitude,
                }
            }
        );

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });
            infoWindow.open(
                this.googleMap, // in this map
                marker // on this actual marker
            )
        });
    }
}