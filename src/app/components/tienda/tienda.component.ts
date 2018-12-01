import {Component, OnInit } from '@angular/core';

import { fadeIn } from '../../components/animation';
declare var jQuery: any;
declare var $:any;

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styles: ['h1 {color: blue}'],
    animations: [ fadeIn ]
})

export class TiendaComponent implements OnInit {
    public titulo;
    public nombreDelParque: string;
    public miParque;

    constructor() {
        this.titulo = 'Esta es la tienda'
    }

    ngOnInit() {
        $('#textojq').hide();
        $('#botonjq').click(function() {
            $('#textojq').slideToggle();
        });
    }

    mostrarNombre() {
        console.log(this.nombreDelParque);
    }

    verDatosParque(event) {
        console.log(event);
        this.miParque = event;
    }


}