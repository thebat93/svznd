import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LayersService } from './layers.service';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'

import "leaflet";

import { AppComponent } from './app.component';
import { MapComponent } from './map.component';
import { AuthComponent } from './auth.component';
import { LayersListComponent } from './layers-list.component';
import { AuthService } from './auth.service';
import { NewLayerComponent } from './newlayer.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LayersListComponent,
    AuthComponent,
    NewLayerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LayersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
