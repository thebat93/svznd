import { Component, OnInit } from '@angular/core';
import { LayersService } from './layers.service';
import { AuthService } from './auth.service';
import { FormGroup, FormControl, FormArray, NgForm, FormBuilder, Validators } from '@angular/forms';

import * as L from "leaflet";
import { Layer } from './layer';

@Component({
    selector: 'new-layer',
    templateUrl: './newlayer.component.html',
  })

export class NewLayerComponent implements OnInit {
    
    constructor(private layersService: LayersService, private authService: AuthService, private fb: FormBuilder) { }
    showForm: boolean = false;
    myForm: FormGroup;
    layerType: string;

    ngOnInit(): void {
        this.myForm = new FormGroup({
            'title': new FormControl('', Validators.required),
            'type': new FormControl('wms', Validators.required),
            'url': new FormControl('', Validators.required),
            'layers': new FormControl('', Validators.required),//нужно убирать в зависимости от типа
            'visibility': new FormControl(true),
        });
    }

    register (myForm: NgForm) {
        console.log(myForm.value);
        let sameName = false;
        if(this.myForm.status=='VALID'){
            const formModel = this.myForm.value;
            this.layersService.layers.map(layer => {
                if(layer.options.title === formModel.title){
                    sameName = true;
                    alert("Введите уникальное имя");
                }
            });
            if(sameName === false){
                const saveLayer: Layer = {
                    title: formModel.title as string,
                    layers: formModel.layers as string,
                    type: formModel.type as string,
                    url: formModel.url as string,
                    visibility: formModel.visibility as boolean,
                    newlayer: true
                }
                console.log(saveLayer);
                this.layersService.addToMap(saveLayer);
            }
        }
        else {
            alert("заполните все поля!");
        }
      }
}