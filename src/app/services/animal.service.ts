import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
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

    get_animals() {
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});

        return this._http.get(this.url + 'animals', options)
            .pipe(
                map(res => res.json())
            )
    }

    get_animal(id) {
        return this._http.get(this.url + 'animal/' + id).pipe(
            map(res => res.json())
        );
    }

    edit_animal(token, id, animal) {
        let params = JSON.stringify(animal);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });

        return this._http.put(this.url + 'animal/' + id, params, {headers:headers}).pipe(
            map(res => res.json())
        );  
    }

    delete_animal(token, id) {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });

        let options = new RequestOptions({headers:headers});

        return this._http.delete(this.url + 'animal/' + id, options).pipe(
            map(res => res.json())
        );
    }

}