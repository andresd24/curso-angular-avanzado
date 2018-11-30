import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var jQuery: any;
declare var $:any;

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  providers: [ AnimalService, UserService, UploadService ]
})

export class ListComponent implements OnInit  {
    title = 'Listado';
    public animals: Animal[];
    public token: string;
    public searchTerm;

    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _animalService: AnimalService,
      private _userService: UserService
    ){
        this.title = 'Listado de Animales';
    }

    ngOnInit() {
        this.token = this._userService.get_token();
        this._animalService.get_animals().subscribe(
            response => {
                if (!response.animals) {

                }
                else {
                    this.animals = response.animals;
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    getAnimals() {
        this._animalService.get_animals().subscribe(
          response => {
              if (!response.animals) {

              }
              else {
                  this.animals = response.animals;
              }
          },
          error => {
              console.log(<any>error);
          }
      );
    }

    deleteAnimal(id) {
        $('#myModal-' + id).modal('hide');
        this._animalService.delete_animal(this.token, id).subscribe(
            response => {
                if (!response.animal) {
                    alert('Error en el servidor');
                }
                this.getAnimals();
            },
            error => {
                alert('Error en el servidor');
            }

        );

    }

}
