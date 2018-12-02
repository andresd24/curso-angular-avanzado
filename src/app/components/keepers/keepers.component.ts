import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../components/animation';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'keeper',
  templateUrl: './keepers.component.html',
  animations: [ fadeIn ],
  providers: [ UserService ]
})

export class KeepersComponent implements OnInit {
  public title: string;
  public keepers: User[];
  public url: string;

  constructor(
      private _userService: UserService
  ){
        this.title = 'Cuidadores';
        this.url = GLOBAL.url;
  }

  ngOnInit() {
    console.log("KeepersComponent OnInit");
    this.getKeepers();
    console.log(this.keepers);
}

  getKeepers() {
      this._userService.get_keepers().subscribe(
          response => {
              if (!response.users) {
                    console.log("error getting keepers");
              }
              else {
                console.log("success getting keepers");
                console.log(response.users);
                this.keepers = response.users;
              }
          },
          error => {
              console.log(<any>error);
          }
      );
  }
}
