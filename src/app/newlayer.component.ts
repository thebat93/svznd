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
    newLayer: Layer;
    myForm: FormGroup;
    
    ngOnInit(): void {
        this.myForm = new FormGroup({
            'title': new FormControl('', Validators.required),
            'type': new FormControl('WMS', Validators.required),
            'url': new FormControl('', Validators.required),
            'layers': new FormControl('', Validators.required),
            'visibility': new FormControl(true),
        });
    }

    register (myForm: NgForm) {
        console.log('Successful registration');
        //if(this.myForm!=null)
        console.log(myForm.value);
      }
}