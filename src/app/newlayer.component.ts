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
        this.myForm = this.fb.group({
            'title': ['', Validators.required],
            'type': ['wms', Validators.required],
            'url': ['', Validators.required],
            'layers': ['', Validators.required],
            'visibility': [true],
        });
    }

    private typeChange(): void {
        if (this.layerType === 'tms') {
            this.myForm.controls['layers'].clearValidators();
            this.myForm.controls['layers'].updateValueAndValidity();
        }
        else {
            this.myForm.controls['layers'].setValidators(Validators.required);
            this.myForm.controls['layers'].updateValueAndValidity();
        }
    }

    register (myForm: NgForm): void {
        let sameName = false;
        if (this.myForm.status === 'VALID') {
            const formModel = this.myForm.value;
            this.layersService.layers.map(layer => {
                if (layer.options.title === formModel.title) {
                    sameName = true;
                    alert("Введите уникальное имя");
                }
            });
            if (sameName === false) {
                const saveLayer: Layer = {
                    title: formModel.title as string,
                    layers: formModel.layers as string,
                    type: formModel.type as string,
                    url: formModel.url as string,
                    visibility: formModel.visibility as boolean,
                    newlayer: true
                };
                this.layersService.addToMap(saveLayer);
            }
        }
        else {
            alert('Заполните все поля!');
        }
      }
}
