import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})

export class LocationPage {
	lat: any;
	lng: any;

  constructor(public navCtrl: NavController, public geo: Geolocation){
	
  }
	IonViewDidLoad(){
		this.geo.getCurrentPosition().then( pos => {
			this.lat = pos.coords.latitude;
			this.lng = pos.coords.longitude;
		}).catch( err => console.log(err));
	}
}
