import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Grafico } from '../graficos';
declare var Chart: any;

@Component({
    selector: 'mc-grafico-torta',
    template: `
       <div class="m-portlet m-portlet--mobile m-portlet--body-progress-">
      <div class="m-portlet__head">
				<div class="m-portlet__head-caption">
            <div class="m-portlet__head-title">
              <h3 class="m-portlet__head-text">
                {{titulo}}
              </h3>
            </div>
        </div>
				<div class="m-portlet__head-tools">
          <ul class="m-portlet__nav">
          <li class="m-portlet__nav-item" title="Grafico de linea" *ngIf="nivelDeAnidamiento === 0">
							<a (click)="onCambiarAGraficoLinea.emit()" m-portlet-tool="reload" class="m-portlet__nav-link m-portlet__nav-link--icon" aria-describedby="tooltip_yr9xp3uhq4"><i class="la la-line-chart"></i></a>
						<li class="m-portlet__nav-item" title="Grafico de barra" *ngIf="nivelDeAnidamiento === 0">
							<a  (click)="onCambiarAGraficoBarra.emit()" m-portlet-tool="toggle" class="m-portlet__nav-link m-portlet__nav-link--icon" aria-describedby="tooltip_6e5gyi6jl9"><i class="la la-bar-chart-o"></i></a>
						<li class="m-portlet__nav-item" title="Expandir">
							<a  (click)="onExpandirse.emit()" m-portlet-tool="fullscreen" class="m-portlet__nav-link m-portlet__nav-link--icon"><i class="la la-expand"></i></a>
						</li>
						<li class="m-portlet__nav-item" title="Ver tabla">
							<a (click)="showTabla()" m-portlet-tool="remove" class="m-portlet__nav-link m-portlet__nav-link--icon"><i class="la la-table"></i></a>
						</li>
					</ul>
				</div>
			</div>

            <div class="m-portlet__body">
                <canvas [id]="'grafico-torta'+random"></canvas>
            </div>
        </div>
  `,
    styles: []
})
export class GraficoTortaComponent extends Grafico implements AfterViewInit, OnInit {

    random = this.getRandom();

    iniciarGrafico() {
        const { datos } = this.obtenerDatosDiagrama();
        this.colorSeleccionado = 0;
        datos.datasets[0].backgroundColor = datos.datasets[0].data.map(data => this.getColor());
        datos.datasets[0].borderColor = datos.datasets[0].backgroundColor;
        this.datos = datos;
        this.chart && this.chart.destroy();
        this.generarChart();
    }

    ngAfterViewInit(): void {
        this.chart || this.generarChart();
    }

    generarChart() {
        try {
            let canvas = <HTMLCanvasElement>document.getElementById('grafico-torta' + this.random);
            let ctx = canvas.getContext('2d');
            this.chart = new Chart(ctx, {
                type: 'pie',
                data: this.datos,
                options: {}
            });
        } catch { console.log('La vista todavia no fue generada'); }
    }

}
