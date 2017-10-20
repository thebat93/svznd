import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import "leaflet";

import { AppComponent } from './app.component';
import { MapComponent } from './map.component';
import { LayersListComponent } from './layers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LayersListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
