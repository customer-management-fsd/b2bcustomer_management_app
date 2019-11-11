import { Component, OnInit } from '@angular/core';
// import { google } from '@agm/core/services/google-maps-types';
// import { google } from '@agm/core/services/google-maps-types';
// import {google} from 'googlemaps';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor() {
    this.latitude = 13.047398399999999;
    this.longitude = 77.61919999999999;
   }

  latitude: number;
  longitude: number;

//  google: any;


 geocoder;
 map;


ngOnInit() {
  }

// initialize() {
//     this.geocoder = new google.maps.Geocoder();
//     const latlng = new google.maps.LatLng(-34.397, 150.644);
//     const mapOptions = {
//       zoom: 8,
//       center: latlng
//     };
//     this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
//   }

// codeAddress() {
//     const address = (document.getElementById('address') as HTMLInputElement).value;
//     // tslint:disable-next-line: only-arrow-functions
//     this.geocoder.geocode( { [address]: address}, function(results, status) {
//       if (status === 'OK') {
//         this.map.setCenter(results[0].geometry.location);
//         const marker = new google.maps.Marker({
//             map: this.map,
//             position: results[0].geometry.location
//         });
//       } else {
//         alert('Geocode was not successful for the following reason: ' + status);
//       }
//     });
//   }



// initMap() {
//   const map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 8,
//     center: {lat: -34.397, lng: 150.644}
//   });
//   const geocoder = new google.maps.Geocoder();

//   // tslint:disable-next-line: only-arrow-functions
//   document.getElementById('submit').addEventListener('click', () => {
//     this.geocodeAddress(geocoder, map);
//   });
// }

// geocodeAddress(geocoder, resultsMap) {
//   const address = (document.getElementById('address') as HTMLInputElement).value;
//   geocoder.geocode({address}, (results, status) => {
//     if (status === 'OK') {
//       resultsMap.setCenter(results[0].geometry.location);
//       const marker = new google.maps.Marker({
//         map: resultsMap,
//         position: results[0].geometry.location
//       });
//     } else {
//       alert('Geocode was not successful for the following reason: ' + status);
//     }
//   });
// }

}
