import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

import * as L from 'leaflet';
import { Layer } from './layer';

@Injectable()
export class LayersService {

    public map: L.map;
    public layers: L.tileLayer[] = [];/*L.tileLayer{} any = [
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
            title: 'ООПТ'
        })
    ];*/
    constructor(private http: Http) { }

    getJson(): Promise<Layer[]> {
        return this.http.get("../assets/layers.json")
            .toPromise()
            .then(response => {
                //response.json().map((layer) => this.addToMap(layer));
                return response.json() as Layer[];
            });
    }

    addToMap(layer: Layer): void {
        let currentLayer;
        if (layer.type === 'wms') {
            currentLayer =  L.tileLayer.wms(layer.url, {
                layers: layer.layers,
                title: layer.title,
                transparent: true,
                opacity: 1,
                format: 'image/png'
            });
        }
        else {
            currentLayer = L.tileLayer(layer.url, {
                transparent: true,
                title: layer.title,
                opacity: 1,
            });
        }
        this.layers.push(currentLayer);
        //currentLayer.addTo(this.map);
    }

    public initMap(element) {
        this.getJson()
            .then(layersArr => {
                this.layers.push(L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { 
                    title: 'OSM',
                    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }));
                layersArr.map((layer: Layer) => this.addToMap(layer));
                this.map = L.map(element, {layers: this.layers}).setView([51.505, -0.09], 1);
            });
        //this.map = L.map(element, {layers: this.layers}).setView([51.505, -0.09], 1);
    }

    public changeOpacity (index) {
        if (this.map.hasLayer(this.layers[index])){
            this.map.removeLayer(this.layers[index]);
        }
        else {
            this.map.addLayer(this.layers[index]);
        }
    }
    public delete(index) {
        this.map.removeLayer(this.layers[index]);
        this.layers.splice(index, 1);
    }
}