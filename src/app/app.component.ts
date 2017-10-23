import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <my-map></my-map>
  <my-auth></my-auth>
  <layers-list></layers-list>
  <new-layer></new-layer>
  `
})
export class AppComponent { }
