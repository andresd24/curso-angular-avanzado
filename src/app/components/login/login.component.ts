import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';

import { fadeIn } from '../../components/animation';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    providers: [UserService],
    animations: [ fadeIn ]
})

export class LoginComponent implements OnInit {
    public title: String;
    public user: User;
    public indentity
    public token;
    public status: String;
    
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ) {
        this.title = 'Login';
        this.user = new User('','','','','','ROLE_USER', '');

    }

    ngOnInit() {
        console.log('login component cargado');
        console.log(localStorage.getItem('identity'));
        console.log(localStorage.getItem('token'));
    }

    onSubmit() {
        this._userService.sign_up(this.user).subscribe(
            response => {
                this.indentity = response.user;

                if (!this.indentity || !this.indentity._id) {
                    this.status = 'success';            
                }
                else {
                    this.indentity.password = '';
                    localStorage.setItem('identity', JSON.stringify(this.indentity))


                    this._userService.sign_up(this.user, 'true').subscribe(
                        response => {
                            this.token = response.token;
            
                            if (this.token.length <= 0) {
                                alert("El token no se ha generado");
                            }
                            else {
                                localStorage.setItem('token', this.token);
                                this.status = 'success'; 
                                
                                this._router.navigate(['/']);
                            }
            
                        },
                        error => {
                            var error_message = <any>error;

                            if (error_message != null) {
                                var body = JSON.parse(error._body);
                                this.status = 'error';
                            }
                        }
                    );
                }

            },
            error => {
                var error_message = <any>error;

                if (error_message != null) {
                    var body = JSON.parse(error._body);
                    this.status = 'error';
                }
}
        );
    }

}