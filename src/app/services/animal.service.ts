import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { map } from 'rxjs/operators';

@Injectable()
export class AnimalService {
    public url: String;

    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    add_animal(token, animal) {
        let params = JSON.stringify(animal);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });

        return this._http.post(this.url + 'animal', params, {headers: headers})
            .pipe(
                 map(res => res.json())
            )

    }
}