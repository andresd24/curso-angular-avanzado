import { Component, OnInit } from '@angular/core';

import { fadeIn } from '../../components/animation';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  animations: [ fadeIn ]
})

export class ContactComponent implements OnInit {
  title = 'Contacto';

  ngOnInit() {
    console.log("ContactComponent OnInit");
  }
}
