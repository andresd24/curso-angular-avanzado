import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html'
})
export class ListComponent  {
    title = 'Listado';
    numbers = new Array(10); //[0, 1, 2, 3, 4, 5]


}
