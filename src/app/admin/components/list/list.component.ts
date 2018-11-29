import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  providers: [ AnimalService, UserService, UploadService ]
})

export class ListComponent implements OnInit  {
    title = 'Listado';
    public animals: Animal[];

    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _animalService: AnimalService,
    ){
        this.title = 'Listado de Animales';
    }

    ngOnInit() {
        this._animalService.get_animals().subscribe(
            response => {
                if (!response.animals) {

                }
                else {
                    this.animals = response.animals;
                }
                
            }
        );
    }

}
