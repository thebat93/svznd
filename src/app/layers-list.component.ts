import { Component, OnInit, OnChanges } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LayersService } from './layers.service';

import * as L from "leaflet";
import { Layer } from './layer';

@Component({
    selector: 'layers-list',
    templateUrl: './layers-list.component.html',
    //providers: [LayersService]
  })

export class LayersListComponent implements OnInit {
    
    constructor(private http: Http, private layersService: LayersService) { }

    layers: L.tileLayer[] = [];

    ngOnInit(): void {
        this.layers = this.layersService.layers;
    }

    clickLayer(index): void {
        this.layersService.changeOpacity(index);
    }

    delete(index): void {
        this.layersService.delete(index);
    }
}