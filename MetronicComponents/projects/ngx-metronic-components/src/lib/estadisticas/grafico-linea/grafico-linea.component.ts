
import { Component, OnInit, Input, AfterViewInit, AfterContentInit } from '@angular/core';
import { Grafico } from '../graficos';
declare var Chart: any;

@Component({
    selector: 'mc-grafico-lineas',
    template: `
   <div class="m-portlet m-portlet--mobile m-portlet--body-progress-">
      <div class="m-portlet__head">
				<div class="m-portlet__head-caption">
            <div class="m-portlet__head-title">
              <h3 class="m-portlet__head-text">
                {{titulo + getEscalaTiempo() }}
              </h3>
            </div>
        </div>
				<div class="m-portlet__head-tools">
          <ul class="m-portlet__nav">
          <li class="m-portlet__nav-item" title="Grafico de torta" *ngIf="nivelDeAnidamiento === 0">
							<a  (click)="onCambiarAGraficoTorta.emit()" m-portlet-tool="reload" class="m-portlet__nav-link m-portlet__nav-link--icon" aria-describedby="tooltip_yr9xp3uhq4"><i class="la la-pie-chart"></i></a>
						<li class="m-portlet__nav-item" title="Grafico de barra" *ngIf="nivelDeAnidamiento === 0">
							<a (click)="onCambiarAGraficoBarra.emit()"  m-portlet-tool="toggle" class="m-portlet__nav-link m-portlet__nav-link--icon" aria-describedby="tooltip_6e5gyi6jl9"><i class="la la-bar-chart-o"></i></a>
						<li class="m-portlet__nav-item" title="Expandir">
							<a  (click)="onExpandirse.emit()" m-portlet-tool="fullscreen" class="m-portlet__nav-link m-portlet__nav-link--icon"><i class="la la-expand"></i></a>
						</li>
						<li class="m-portlet__nav-item" title="Ver tabla">
							<a (click)="showTabla()" m-portlet-tool="remove" class="m-portlet__nav-link m-portlet__nav-link--icon"><i class="la la-table"></i></a>
            </li>
            <li class="m-portlet__nav-item" title="Cambiar escala" *ngIf="usaEscalaTiempo">
            <div class="dropdown" >
						 	<button style="color: #afb0c7" class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    	<i class="la la-calendar" style="color: #afb0c7"></i>
						  	</button>
						  	<div class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 40px, 0px);">
						    	<a class="dropdown-item" (click)="cambiarEscalaTiempo('dia')">Dia</a>
						    	<a class="dropdown-item" (click)="cambiarEscalaTiempo('semana')">Semana</a>
                  <a class="dropdown-item" (click)="cambiarEscalaTiempo('mes')">Mes</a>
                  <a class="dropdown-item" (click)="cambiarEscalaTiempo('anio')">Año</a>
						  	</div>
						</div>
						</li>
					</ul>
				</div>
			</div>

            <div class="m-portlet__body">
                <canvas [id]="'grafico-lineas'+random"></canvas>
            </div>
        </div>
  `
})
export class GraficoLineaComponent extends Grafico implements AfterViewInit, OnInit {

    random = this.getRandom();

    iniciarGrafico() {
        const { datos, opciones } = this.obtenerDatosDiagrama();
        this.datos = datos;
        this.opciones = opciones;
        this.chart && this.chart.destroy();
        this.generarChart();

    }

    ngAfterViewInit(): void {
        this.chart || this.generarChart();
    }

    generarChart() {
        try {
            let canvas = <HTMLCanvasElement>document.getElementById('grafico-lineas' + this.random);
            let ctx = canvas.getContext('2d');
            this.chart = new Chart(ctx, {
                type: 'line',
                data: this.datos,
                options: this.opciones
            });
        } catch { console.log('La vista todavia no fue generada'); }
    }



}
