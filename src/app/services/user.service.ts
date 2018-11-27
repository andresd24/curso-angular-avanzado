import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService{
    public url: String;
    public identity;
    public token;

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

    get_identity() {
        let identity = JSON.parse(localStorage.getItem('identity'))

        if (identity != "undefined") {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }

        return this.identity;
    }

    get_token() {
        let token = localStorage.getItem('token');

        if (token != "undefined") {
            this.token = token;
        }
        else {
            this.token = null;
        }

        return this.token;
    }

    update_user(user_to_update) {
        delete user_to_update.password;
        let params = JSON.stringify(user_to_update);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.get_token()
        });

        return this._http.put(this.url + 'update-user/' + user_to_update._id, params, {headers: headers}).pipe(
            map(res => res.json())
        )
    }

}