import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

import * as L from 'leaflet';
import { Layer } from './layer';

@Injectable()
export class LayersService {

    public map: L.map;
    public layers: L.tileLayer[] = [];
    constructor(private http: Http) { }

    getJson(): Promise<Layer[]> {
        return this.http.get('../assets/layers.json')
            .toPromise()
            .then(response => {
                return response.json() as Layer[];
            });
    }

    addToMap(layer: Layer): void {
        let currentLayer: L.tileLayer, visibility = true;
        if (layer.hasOwnProperty('visibility')) {
            visibility = layer.visibility;
        }
        if (layer.type === 'wms') {
            currentLayer =  L.tileLayer.wms(layer.url, {
                layers: layer.layers,
                title: layer.title,
                transparent: true,
                visibility: visibility,
                format: 'image/png'
            });
        }
        else {
            currentLayer = L.tileLayer(layer.url, {
                transparent: true,
                title: layer.title,
                visibility: visibility,
            });
        }
        this.layers.push(currentLayer);
        if (currentLayer.visibility === true) {
            currentLayer.addTo(this.map);
        }
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