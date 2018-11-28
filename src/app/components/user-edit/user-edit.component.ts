import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { UploadService } from '../../services/upload.service';

@Component({
    selector: 'user-edit',
    templateUrl: 'user-edit.component.html',
    providers: [UserService, UploadService]
})

export class UserEditComponent implements OnInit {
    public title: String;
    public user: User;
    public identity;
    public token;
    public status: String;
    public filesToUpload: Array<File>;
    public url: string;

    constructor(
        private _userService: UserService,
        private _uploadService: UploadService
    ) {
        this.title = "Actualizar mis datos";
        this.identity = this._userService.get_identity();
        this.token = this._userService.get_token();
        this.user = this.identity;
        this.url = GLOBAL.url;
    }

    ngOnInit() {
        //console.log('se ha cargado el componente');
        this.token = this._userService.get_token();
    }

    onSubmit() {
        this._userService.update_user(this.user).subscribe(
            response => {
                if (!response.user) {
                    this.status = "error";
                }
                else {
                    localStorage.setItem('identity', JSON.stringify(this.user));
                    this.status = "success";

                    this._uploadService.make_file_request(this.url + 'upload-image-user/' + this.user._id, [], this.filesToUpload, this.token, 'image' )
                        .then((result: any) => {
                            this.user.image = result.image;
                            localStorage.setItem('identity', JSON.stringify(this.user));
                            console.log(this.user);
                        }
                    );

                }
            },
            error => {
                var errorMessage = <any>error;
                if (errorMessage != null)
                {
                    this.status = "error";
                }
            }
        );
    }

    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }

}