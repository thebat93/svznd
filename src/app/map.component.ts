import { Component, OnInit } from '@angular/core';
import { LayersService } from './layers.service';
import * as L from 'leaflet';
import { Layer } from './layer';

@Component({
  selector: 'my-map',
  template: `<div id="map"></div>`,
  styles: [
    `  
    #map {
        position:relative;
        margin-top:10px;
        margin-bottom:10px;
        height: 500px;
        width:100%;
    }
    `
  ],
})
export class MapComponent implements OnInit {
  
    constructor(private layersService: LayersService) { }

    ngOnInit(): void {
        this.layersService.initMap('map');
    }
}
