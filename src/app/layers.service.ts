import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

import * as L from "leaflet";
import { Layer } from './layer';

@Injectable()
export class LayersService {

    public map: L.map;
    public layers: Layer[] = [];
    
    
    constructor(private http: Http) { }

    getJson(): Promise<Layer[]> {
        return this.http.get("../assets/layers.json")
            .toPromise()
            .then(response => {
                return response.json() as Layer[];
            });

    }

    addToMap(layer: Layer): void {
        if(layer.type == 'wms'){
            L.tileLayer.wms(layer.url, {
                layers: layer.layers,
                transparent: true,
                format: 'image/png'
            }).addTo(this.map);
        }
        else {
            L.tileLayer(layer.url, {
                transparent:true
            }).addTo(this.map);
        }
    }

    public delete(index){
        this.layers.splice(index,1);
    }

}