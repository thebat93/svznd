import { Component, OnInit } from '@angular/core';
import { LayersService } from './layers.service';

import * as L from "leaflet";
import { Layer } from './layer';

@Component({
    selector: 'layers-list',
    templateUrl: './layers-list.component.html',
    styles: [`
        .clicked { color: grey }
    `]
    //providers: [LayersService]
  })

export class LayersListComponent implements OnInit {
    
    constructor(private layersService: LayersService) { }

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