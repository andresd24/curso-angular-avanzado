import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../models/animal';
import { GLOBAL } from '../../services/global';


@Component({
  selector: 'animals',
  templateUrl: './animals.component.html',
  providers: [ AnimalService ]
})

export class AnimalsComponent implements OnInit {
  title = 'Animales';
  public animals: Animal[];
  public url: string;

  constructor(
    private _animalService: AnimalService
  ) {
      this.title = "Animales";
      this.url = GLOBAL.url;
  }
  ngOnInit() {
    console.log("AnimalsComponent OnInit");
    this.getAnimals();
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
}
