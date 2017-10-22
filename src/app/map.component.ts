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
        position:absolute;
        top:100px;
        bottom:0;
        width:100%;
    }
    `
  ],
  //providers: [LayersService]
})
export class MapComponent implements OnInit {
  
    constructor(private layersService: LayersService) { }

    ngOnInit() {
        //const mymap = L.map('map', {layers: this.layersService.layers}).setView([51.505, -0.09], 1);
        this.layersService.initMap('map');
        console.log(this.layersService.map);
        // this.layersService.getJson()
        //     .then(/*layers*/() => {
        //         console.log(this.layersService.layers);
        //         const mymap = L.map('map',{layers: [this.layersService.layers]}).setView([51.505, -0.09], 1);
        //         this.layersService.map = mymap;
        //         // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { 
        //         //     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        //         // }).addTo(mymap);
        //         //layers.map((layer: Layer) => this.layersService.addToMap(layer));
        //         //console.log(this.layersService.layers['Здания']);
        //     });
    }

    // ngOnInit() {
    //     this.initMap();
    // }
}