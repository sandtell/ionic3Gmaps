import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

declare var google;

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

//    private googleMap: GoogleMap;
    
    
    constructor(public navCtrl: NavController, private platform: Platform) {

    }
    
    ngAfterViewInit() {
        this.platform.ready().then(() => {
            this.loadMap();            
        })
    }
    
    loadMap() {
        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: {lat: 13.03, lng: 80.24}
        });
        directionsDisplay.setMap(map);
        directionsService.route({
                origin: new google.maps.LatLng(13.03, 80.24),
                destination:new google.maps.LatLng(13.07, 80.27),
                travelMode: 'DRIVING'
            }, function(response, status) {
            if (status == 'OK') {
                directionsDisplay.setDirections(response);
            }
        });
    }
}
