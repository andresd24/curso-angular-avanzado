import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';



@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html',
  providers: [ AnimalService, UserService, UploadService ]
})
export class AddComponent implements OnInit {
    public title: string;
    public animal: Animal;
    public identity;
    public token;
    public url: string;
    public status: string;
    public filesToUpload: Array<File>;

    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _animalService: AnimalService,
      private _userService: UserService,
      private _uploadService: UploadService
    ){
        this.title = 'Añadir';
        this.animal = new Animal('','','', 2018, '', '');
        this.identity = this._userService.get_identity();
        this.token = this._userService.get_token();
        this.url = GLOBAL.url;

    }

    ngOnInit() {
        console.log('animal-add ha sido cargado');
    }

    onSubmit() {
  
        this._animalService.add_animal(this.token, this.animal).subscribe( 
            response => {
                if (!response.animal) {
                    this.status = 'error';
                }
                else {
                    this.status = "success";
                    this.animal = response.animal;

                    if (!this.filesToUpload) {
                       this._router.navigate(['/admin-panel/listado']);
                    }
                    else  {
                        this._uploadService.make_file_request(this.url + 'upload-image-animal/' + this.animal ._id, [], this.filesToUpload, this.token, 'image' )
                            .then((result: any) => {
                                this.animal.image = result.image;
                                this._router.navigate(['/admin-panel/listado']);
                            }
                        );
                    }
                  }
            },
            error => {
                var errorMessage = <any>error;

                if (errorMessage != null) {
                    this.status = "error";
                }
            }
        )
    }

    fileChangeEvent(fileInput: any) {
      this.filesToUpload = <Array<File>>fileInput.target.files;
    }

}
