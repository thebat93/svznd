import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

import * as L from 'leaflet';
import { Layer } from './layer';

@Injectable()
export class LayersService {

    public map: L.map;
    public layers: /*L.tileLayer{}*/ any = [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { 
            title: 'OSM',
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
        L.tileLayer('http://geoanalitika.com/cartoservice/tms/buildings/{z}/{x}/{y}.png', {
            title: 'Здания'
        }),
        L.tileLayer.wms('http://geoportal.sovzond.ru:8081/geoserver/wms', {
            layers: 'Adygeya:Adygeya_mosaic_260_1',
            transparent: true,
            opacity: 1,
            format: 'image/png',
            title: 'Adygeya_mosaic_260_1'
        }),
        L.tileLayer.wms('http://geoanalitika.com/cartoservice/wms/', {
            layers: 'oopt',
            transparent: true,
            opacity: 1,
            format: 'image/png',
            title: "ООПТ"
        })
    ];
    constructor(private http: Http) { }

    // getJson(): Promise<Layer[]> {
    //     return this.http.get("../assets/layers.json")
    //         .toPromise()
    //         .then(response => {
    //             response.json().map((layer) => this.addToMap(layer));
    //             return response.json() as Layer[];
    //         });
    // }

    // addToMap(layer: Layer): void {
    //     var currentLayer;
    //     if (layer.type === 'wms') {
    //         currentLayer =  L.tileLayer.wms(layer.url, {
    //             layers: layer.layers,
    //             transparent: true,
    //             opacity: 1,
    //             format: 'image/png'
    //         });
    //     }
    //     else {
    //         currentLayer = L.tileLayer(layer.url, {
    //             transparent: true,
    //             opacity: 1,
    //         });
    //     }
    //     this.layers[layer.title] = currentLayer;
    //     //currentLayer.addTo(this.map);
    // }
    public initMap(element) {
        this.map = L.map(element, {layers: this.layers}).setView([51.505, -0.09], 1);
    }

    public changeOpacity (index) {
        console.log(this.layers[index]);
        //this.layers[index].remove();
        this.map.removeLayer(this.layers[index]);
        //this.layers[index].setOpacity(0);
    }
    public delete(index) {
        //this.layers.splice(index, 1);
    }
}