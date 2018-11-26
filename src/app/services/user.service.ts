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
}