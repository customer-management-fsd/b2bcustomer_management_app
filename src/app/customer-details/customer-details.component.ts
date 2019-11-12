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


ngOnInit() {
  }




}
