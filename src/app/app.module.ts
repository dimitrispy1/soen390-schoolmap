import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//services
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IndoorPathingService } from './services/indoorPathing/indoor-pathing.service';
import { ReadGridService } from './services/readGrid/read-grid.service' 
import { GpsGridMappingService } from './services/gps-grid-mapping/gps-grid-mapping.service' 
import { BuildingFactoryService } from './services/BuildingFactory/building-factory.service'



//Component imports
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { GoButtonComponent } from './components/go-button/go-button.component';
import { HomeSearchComponent } from './components/home-search/home-search.component';
import { MapComponent } from './components/map/map.component';
import { DirectionsComponent } from './components/directions/directions.component';
import { LocateMeComponent } from './components/locate-me/locate-me.component';
import { HomeComponent } from './components/home/home.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { NearbyPointsOfInterestComponent } from './components/nearby-points-of-interest/nearby-points-of-interest.component';
import { NewRouteComponent } from './components/new-route/new-route.component';
import { ReportIssuesComponent } from './components/report-issues/report-issues.component';
import { SafetyComponent } from './components/safety/safety.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ShuttleBusScheduleComponent } from './components/shuttle-bus-schedule/shuttle-bus-schedule.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import {IonicStorageModule} from '@ionic/storage';





@NgModule({

  declarations: [AppComponent, MapComponent, FavoritesComponent, GoButtonComponent, HomeComponent, HomeSearchComponent, MenubarComponent, 
                ToggleComponent, LocateMeComponent, NearbyPointsOfInterestComponent, NewRouteComponent, AboutUsComponent, 
                ReportIssuesComponent, SafetyComponent, ScheduleComponent, SettingsComponent, ShuttleBusScheduleComponent, DirectionsComponent],
  entryComponents: [],
  imports: [HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, FormsModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation,
    IndoorPathingService,
    ReadGridService,
    GpsGridMappingService,
    BuildingFactoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}