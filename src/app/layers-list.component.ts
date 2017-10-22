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

    layers: /*Layer[]*/ L.tileLayer[] = this.layersService.layers;//[];
    
    // getLayers(): void {
    //     this.layersService.getJson()
    //         .then(layers => {
    //             this.layers = layers;
    //             //this.layersService.layers = this.layers;
    //         });
    // }

    ngOnInit(): void {
        //this.getLayers();
    }

    clickLayer(index): void {
        console.log(this.layersService.map);
        this.layersService.changeOpacity(index);
    }

    delete(index): void {
        //this.layers.splice(index,1);
        //this.layersService.layers = this.layers;
    }
}