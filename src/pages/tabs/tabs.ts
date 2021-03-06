import { Component } from '@angular/core';
import { WeatherPage } from '../weather/weather';
import { LocationPage } from '../location/location';
import { MapsPage } from '../maps/maps';
import { FavsPage } from '../favs/favs';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = WeatherPage;
  tab3Root = LocationPage;
  tab4Root = MapsPage;
  tab5Root = FavsPage;

  constructor() {

  }
}
