import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck  {
    public title:String;
    public identity;
    public url;

    constructor(
      private _route: ActivatedRoute,
      private _router: Router,
      private _userService: UserService
    ){
      this.title = 'Bet Friendly :)';
      this.url = GLOBAL.url;
    }

    ngOnInit()
    {
        this.identity = this._userService.get_identity();
    } 

    ngDoCheck()
    {
        this.identity = this._userService.get_identity();
    }

    logout()
    {
        localStorage.clear();
        this.identity = null;
        this._router.navigate(['/']);
    }


}
