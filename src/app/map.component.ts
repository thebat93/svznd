import { Component, OnInit } from '@angular/core';
import { LayersService } from './layers.service';
import * as L from 'leaflet';

@Component({
  selector: 'my-map',
  template: `<div id="map"></div>`,
  styles: [
    `  
    #map {
        position:absolute;
        top:100px;
        bottom:0;
        width:100%;
    }
    `
  ],
  providers: [LayersService]
})
export class MapComponent implements OnInit {
  
    constructor(private layersService: LayersService) { }

    ngOnInit() {
        let mymap = L.map('map').setView([51.505, -0.09], 1);
    
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { 
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap);
        this.layersService.map = mymap;
        console.log(this.layersService.layers);
    }
}