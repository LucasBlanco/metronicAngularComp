import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Grafico } from '../graficos';

export interface IListaResultados {
  titulo: string,
  subtitulo: string,
  valor: number,
  color: string
}

@Component({
  selector: 'm-lista-resultados',
  templateUrl: './lista-resultados.component.html',
  styleUrls: ['./lista-resultados.component.scss']
})
export class ListaResultadosComponent extends Grafico implements OnInit, AfterViewInit {

  @Input() listaResultados: IListaResultados[] = []
  constructor() {
    super()
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.listaResultados.forEach((_, i) => {
      this.runCountUp('resultado' + i)
    })
  }

}
