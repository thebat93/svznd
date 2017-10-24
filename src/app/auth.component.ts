import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'my-auth',
    templateUrl: './auth.component.html'
  })

export class AuthComponent {

    constructor(private authService: AuthService) { }
    
    showForm: boolean = false;
    login: string = '';
    pass: string = '';
    authorized: boolean = false;
    
    authenticate(): void {
        this.authorized = this.authService.authorize(this.login, this.pass);
        if(this.authorized){
            this.showForm = false;
        }
        else { alert("Неправильно введен логин или пароль"); }
    }

    logout(): void {
        this.authService.authorized = false;
        this.authorized = false;
    }
}