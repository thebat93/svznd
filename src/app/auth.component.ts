import { Component } from '@angular/core';

@Component({
    selector: 'my-auth',
    templateUrl: './auth.component.html',
    //providers: [LayersService]
  })

export class AuthComponent {
    showForm: boolean = false;
}