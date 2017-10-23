import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'my-auth',
    templateUrl: './auth.component.html',
    //providers: [LayersService]
  })

export class AuthComponent {

    constructor(private authService: AuthService) { }
    
    showForm: boolean = false;
    login: string = '';
    pass: string = '';
    authorized: boolean = false;
    
    authenticate() {
        this.authorized = this.authService.authorize(this.login, this.pass);
        if(this.authorized){
            this.showForm = false;
        }
        else { alert("Неправильно введен логин или пароль"); }
    }

    logout(){
        this.authService.authorized = false;
        this.authorized = false;
    }
}