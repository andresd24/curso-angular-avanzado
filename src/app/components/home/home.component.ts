import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  animations: [ fadeIn ]
})

export class HomeComponent implements OnInit {
  title = 'Home';

  ngOnInit() {
    console.log("HomeComponent OnInit");
  }
}
