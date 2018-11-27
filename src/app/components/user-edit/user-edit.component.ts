import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'user-edit',
    templateUrl: 'user-edit.component.html',
    providers: [UserService]
})

export class UserEditComponent implements OnInit {
    public title: String;
    public user: User;
    public identity;
    public token;
    public status: String;

    constructor(
        private _userService: UserService
    ) {
        this.title = "Actualizar mis datos";
        this.identity = this._userService.get_identity();
        this.token = this._userService.get_token();
        this.user = this.identity;
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

}