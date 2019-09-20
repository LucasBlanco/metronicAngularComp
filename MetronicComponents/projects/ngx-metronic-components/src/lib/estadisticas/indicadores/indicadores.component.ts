import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Grafico } from '../graficos';
import { IndicadorI } from '../interfacesGraficos';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'mc-indicadores',
    templateUrl: './indicadores.component.html',
    animations: [
        trigger('load', [
            state('void',
                style({
                    width: '0%'
                })
            ),
            transition('void => *', animate('5s'))
        ])
    ]
})
export class IndicadoresComponent extends Grafico implements OnInit, AfterViewInit {

    @Input() indicadores: Array<IndicadorI> = [];
    @Input() titulo = '';
    @Input() countUp = false;


    ngOnInit() {
        this.indicadores.map(({ color, ...n }) => ({ color: color ? color : this.getColor(), ...n }));
    }
    ngAfterViewInit() {
        if (this.countUp) {
            this.indicadores.forEach((ind, i) => {
                this.runCountUp('indicador' + i);
                this.asingProgressbarValue('indicador' + i, ind);
            });

        }
    }

    calcularCambioAbsoluto = (actual, anterior) => Math.abs(Number(this.calcularCambio(actual, anterior))).toFixed(2);

    calcularCambio = (actual, anterior) => ((actual - anterior) * 100 / anterior).toFixed(2);



    asingProgressbarValue(id, { valorActual, valorAnterior = 0 }) {
        setTimeout(
            () => {
                const progressBar = document.getElementById('progress-' + id);
                progressBar.style.width = this.calcularCambioAbsoluto(valorActual, valorAnterior) + '%';
            }
            , 0);
    }
}
