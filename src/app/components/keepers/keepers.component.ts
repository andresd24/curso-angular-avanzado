import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../components/animation';

@Component({
  selector: 'keeper',
  templateUrl: './keepers.component.html',
  animations: [ fadeIn ]
})

export class KeepersComponent implements OnInit {
  title = 'Cuidadores';

  ngOnInit() {
    console.log("KeepersComponent OnInit");
  }
}
