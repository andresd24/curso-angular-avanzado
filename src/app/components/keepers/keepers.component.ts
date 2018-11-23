import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'keeper',
  templateUrl: './keepers.component.html'
})

export class KeepersComponent implements OnInit {
  title = 'Cuidadores';

  ngOnInit() {
    console.log("KeepersComponent OnInit");
  }
}
