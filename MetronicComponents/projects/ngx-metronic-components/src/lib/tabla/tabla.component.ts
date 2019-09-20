import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  SimpleChanges,
  OnChanges,
  AfterViewInit,
  ViewChild,
  ChangeDetectorRef,
  OnDestroy
} from '@angular/core';

import { TablaDataTableBuilder } from './tablaDataTable';

@Component({
  selector: "mc-tabla",
  templateUrl: './tabla.component.html'
})
export class TablaComponent
  implements OnChanges, OnInit, OnDestroy, AfterViewInit {
  @Input() filtered = true; // Si la tabla contiene filtros
  @Input() datos: Array<any> = []; // Los datos que se mostraran en la tabla. Ejemplo: [{'name': Lucas, 'lastName': Blanco}]
  @Input() nombreColumnas: Array<any>; // Los nombres ordenados de cada una de las columnas. Ejemplo: ['Nombre', 'Apellido']
  @Input() valorColumnas: Array<string>; // Los nombres de las variables de los datos, en el mismo orden que el nombre de la columna correspondiente. Ejemplo: ['name', 'lastName']
  @Input() acciones: Array<{
    callback: Function;
    class: string;
    name: string;
  }> = []; // El nombre de la accion a realizar un coma y el icono del boton.
  @Input() totalesACalcular: Array<string> = [];
  @Input() promediosACalcular: Array<string> = [];
  @Input() imagen: Array<string>;
  @Input() fallbackImagen: string;
  @Input() checked = false;
  @Input() pipes = {};
  @Output() onCheck: EventEmitter<number> = new EventEmitter();
  inputs = {};
  columnas;
  totales: Array<any> = [];
  tablaBuilder;
  tabla;
  idTabla;

  imagenExpandida: string = null;

  constructor(private chRef: ChangeDetectorRef) {
    this.idTabla =
      String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.datos &&
      changes.datos.previousValue !== changes.datos.currentValue &&
      this.tabla &&
      this.tablaBuilder
    ) {
      console.log(this.datos);
      this.tabla = this.tablaBuilder.createTable();
    }
  }

  ngOnDestroy(): void {
    this.tablaBuilder.destruirTabla();
  }

  emitOnCheck(dato) {
    this.onCheck.emit(dato);
  }

  ngOnInit() {
    this.nombreColumnas.forEach((n, i) => {
      if (n.includes('<input>')) {
        this.inputs[this.valorColumnas[i]] = {
          tipo: typeof this.valorColumnas[i] === 'string' ? 'text' : 'number'
        };
      }
    });
    this.columnas = this.nombreColumnas.map(n =>
      n
        .replace('*', '')
        .replace('/', '')
        .replace('<input>', '')
    );
  }

  crearTablaBuilder() {
    this.tablaBuilder = new TablaDataTableBuilder(
      this.chRef,
      this.checked,
      !!this.imagen,
      this.acciones.length > 0,
      this.nombreColumnas,
      this.idTabla
    );
  }
  ngAfterViewInit() {
    this.crearTablaBuilder();
    this.tabla = this.tablaBuilder.createTable();
  }

  seleccionarTodos = bool => this.datos.forEach(dato => (dato.checked = bool));

  hayAcciones = () => this.acciones.length > 0;



  getProximoAnidamiento(objeto, propiedades) {
    const arrayPropiedades = propiedades.split('.');
    const primeraPropiedad = arrayPropiedades.shift();
    const otrasPropiedades = arrayPropiedades.join('.');
    return {
      objeto: objeto[primeraPropiedad],
      propiedades: otrasPropiedades
    };
  }

  getDato(objeto, propiedades) {
    if (propiedades.includes('.')) {
      const proximo = this.getProximoAnidamiento(objeto, propiedades);
      return this.getDato(proximo.objeto, proximo.propiedades);
    }
    return objeto[propiedades];
  }

  setDato(objeto, propiedades, valor) {
    if (propiedades.split('.').length - 1 > 2) {
      const proximo = this.getProximoAnidamiento(objeto, propiedades);
      return this.setDato(proximo.objeto, proximo.propiedades, valor);
    }
    objeto[propiedades] = valor;
  }

  getDatoAMostrar(dato, fila) {
    /*const pipedValue = toPipedValue(this.getDato(objeto, propiedades));
    const pipes = this.pipes[propiedades];
    if (pipes) {
      return pipes.reduce((resultado, pipe) => pipe(resultado), pipedValue);
    }
    return pipedValue;*/
    const pipe = this.pipes[fila];
    const datoFinal = this.getDato(dato, fila);
    if (pipe) {
      return pipe(datoFinal);
    }
    return datoFinal;
  }
}
