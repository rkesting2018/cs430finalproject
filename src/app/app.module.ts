import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Geolocation } from '@ionic-native/geolocation';
import { WeatherPage } from '../pages/weather/weather';
import { LocationPage } from '../pages/location/location';
import { HomePage } from '../pages/home/home';
import { MapsPage } from '../pages/maps/maps';
import { FavsPage } from '../pages/favs/favs';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from '../providers/firebase-service/firebase-service';

const firebaseConfig = {
    apiKey: "AIzaSyBQ1atonjxFxRtNAeF6Y5HUcVrF27E6DGc",
    authDomain: "cs430finalproject.firebaseapp.com",
    databaseURL: "https://cs430finalproject.firebaseio.com",
    projectId: "cs430finalproject",
    storageBucket: "cs430finalproject.appspot.com",
    messagingSenderId: "337207410306"
  };

@NgModule({
  declarations: [
    MyApp,
    WeatherPage,
    LocationPage,
    HomePage,
	MapsPage,
	FavsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
	HttpModule,
	AngularFireDatabaseModule,
	AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)	
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WeatherPage,
    LocationPage,
    HomePage,
	MapsPage,
	FavsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	FirebaseService,
	Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
