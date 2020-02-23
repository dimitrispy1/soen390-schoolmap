import {Component, ViewChild} from '@angular/core';
declare var google;

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent{

  @ViewChild('googleMap', {static: false}) googleMap;

  map:any;
  constructor() { }

  ngOnInit() {
  this.LoyolaMap();
  this.SirGeorgeMap();
  }

  //define coordinates for loyola map
  LoyolaMap() {
    let mapOptions: { mapTypeId: any; center: { lng: number; lat: number }; zoom: number } = {
      zoom: 16,
      center: {lat: 45.458227, lng: -73.640460},
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.googleMap.nativeElement, mapOptions);
  }

  //define coordinates for sgw map
  SirGeorgeMap(){
    let mapOptions: { mapTypeId: any; center: { lng: number; lat: number }; zoom: number } = {
      zoom: 16,
      center: {lat: 45.494711, lng: -73.577871},
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.googleMap.nativeElement, mapOptions);
  }
}



