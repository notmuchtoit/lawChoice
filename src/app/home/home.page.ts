import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // Location coordinates
  latitude: number;
  longitude: number;
  accuracy: number;

  constructor(private geolocation: Geolocation) {}

  getGeolocation() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.accuracy = resp.coords.accuracy;
        console.log(
          'Latitude: ' +
            this.latitude +
            ' Longitude: ' +
            this.longitude +
            ' Accuracy: ' +
            this.accuracy
        );
      })
      .catch((error) => {
        alert('Error getting location' + JSON.stringify(error));
      });
  }

  ngOnInit() {
    this.getGeolocation();
  }
}
