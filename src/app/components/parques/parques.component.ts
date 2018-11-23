import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck } from '@angular/core';

@Component({
    selector: 'parque',
    templateUrl: './parques.component.html',
})

export class ParquesComponent implements OnChanges, OnInit,  DoCheck {
    @Input() nombre: string;
    public metros: number;
    public vegetacion: string;
    public abierto: boolean;

    @Output() pasameLosDatos = new EventEmitter();

    constructor() {
        this.nombre = 'Tienda para caballos';
        this.metros = 450;
        this.vegetacion = 'Alta';
        this.abierto = true;
    }

    ngOnChanges(changes: SimpleChanges) 
    {
        console.log(changes)
    }

    ngOnInit(){
        console.log("OnInit ");
    }

    ngDoCheck() {
      //  console.log("DoCheck");
    }

    emitirEvento() {
        this.pasameLosDatos.emit({
            'nombre': this.nombre,
            'metros': this.metros,
            'vegetacion': this.vegetacion,
            'abierto': this.abierto  

        });
    }

}