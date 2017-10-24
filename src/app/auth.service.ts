import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    public authorized: boolean = false;
    public authorize(login, password): boolean {
        if (login === 'admin' && password === 'test') {
            this.authorized = true;
            return true;
        }
        else { return false; }
    }
}