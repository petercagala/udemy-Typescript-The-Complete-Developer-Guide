// import {User, redColour} from './User';
// import {Company} from "./Company";





// we have to help typeScript understand, that 'google' is an global variable
// npm install @types/googlemaps
// nemusime to importovat
const mapDiv = document.getElementById('map') as HTMLElement;

new google.maps.Map(mapDiv,
    {
        zoom: 10,
        center: {
            lat: 0,
            lng: 0,
            // new google.maps.LatLng(1, 1);
        },
    });