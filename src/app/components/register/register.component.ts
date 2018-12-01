import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

import { fadeIn } from '../../components/animation';

declare var jQuery: any;
declare var $:any;


@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    providers: [UserService],
    animations: [ fadeIn ]
})

export class RegisterComponent {
    public title: String;
    public user: User;
    public status: String;
    public shown: String;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ) {
        this.title = 'Registro';
        this.user = new User('','','','','','ROLE_USER', '');
        this.shown = 'false';
    } 

    onSubmit() {
        this._userService.register(this.user).subscribe(
            response => {
                if (response.user._id) {
                    this.status = 'success';
                    this.user = new User('','','','','','ROLE_USER', '');
                    this.shown = 'true';
                }
                else {
                    this.status = 'error';
                }
            },
            error => {
//                console.log(<any>error);
                this.status = 'error';
            }
        );
    }

}