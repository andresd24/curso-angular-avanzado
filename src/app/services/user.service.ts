import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService{
    public url: String;

    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    register(user_to_register) {
        let params = JSON.stringify(user_to_register);
        let headers = new Headers({'Content-Type': 'application/json'});

        return this._http.post(this.url + 'register', params, {headers: headers})
            .pipe(
                map(res => res.json())
            )
    }

    sign_up(user_to_login, get_token = null) {

        if (get_token != null) {
            user_to_login.gettoken = get_token;
        }

        let params = JSON.stringify(user_to_login);
        let headers = new Headers({'Content-Type': 'application/json'});

        return this._http.post(this.url + 'login', params, {headers:headers}).pipe(
            map(res => res.json())
        )
    }
}