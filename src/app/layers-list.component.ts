import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LayersService } from './layers.service';

import * as L from "leaflet";
import { Layer } from './layer';

@Component({
    selector: 'layers-list',
    templateUrl: './layers-list.component.html',
    providers: [LayersService]
  })

export class LayersListComponent implements OnInit {

    layers: Layer[] = [];
    
    constructor(private http: Http, private layersService: LayersService) { }
    
    getLayers(): void {
        this.layersService.getJson()
            .then(layers => {
                this.layers = layers;
                this.layersService.layers = this.layers;
            });
    }

    ngOnInit() {
        this.getLayers();
    }
    
    public delete(index): void {
        this.layers.splice(index,1);
        this.layersService.layers = this.layers;
    }
}