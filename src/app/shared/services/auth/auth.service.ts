import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserRegister} from '../../dto/userRegister.interface';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {error} from 'protractor';

// const AuthUrl = 'http://localhost:3000/auth/';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;
  constructor(private http: HttpClient) { }
register(data: UserRegister) {
     return this.http.post<any>(environment.API_BASE + 'auth/signup'  , data);
    this.isLogin = true;
}
whomai() {
      return this.http.get(environment.API_BASE + 'auth/whoami')
}
isLogged(): void {
this.whomai().subscribe(
    data => {
        console.log(data);
    },
     err => {console.log(err);

    })
}
}
