import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'guardar-email',
  templateUrl: './guardar-email.component.html'
})

export class GuardarEmailComponent {
    title = 'Guardar email';
    emailContacto: string;

    guardarEmail() {
        localStorage.setItem('emailContacto', this.emailContacto);
    }


}
