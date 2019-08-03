# 1. Metronic Angular Components

<!-- TOC -->
[1. Metronic Angular Components](#1-metronic-angular-components)
[1.1. Modal](#11-modal)
[1.2. Accordion](#12-accordion)
[1.3. Portlet](#13-portlet)
[1.4. Tabla (Datatable.js)](#14-tabla-datatablejs)
[1.5. Tabs](#15-tabs)
[1.6. Estadisticas (Chart.js)](#16-estadisticas-chartjs)
[1.6.1. Grafico torta basico](#161-grafico-torta-basico)
<!-- /TOC -->

## 1.1. Modal

* idModal: number
* titulo: string
* hideModal: boolean = false

```html
<m-modal [idModal]="1" [titulo]="'My modal" [hideHeader]="false">
    <m-modal-banner>
        Banner del modal
    </m-modal-banner>
    <m-modal-body>
        Cuerpo del Modal
    </m-modal-body>
    <m-modal-footer>
        Footer del Modal
    </m-modal-footer>
</m-modal>
```

```javascript
/*Para abrir y cerrar el modal se debe acceder a las funciones show y hide.*/
/*Para eso se usa ViewChild*/

@ViewChild(ModalComponent) modal

show(){
    this.modal.show()
}

hide(){
    this.modal.hide
}

/*--------------------------------------*/
/*Importante! Al usar ViewChild modal sera undefined hasta que la vista se termine de renderizar*/
/*Si se quiere mostrar el modal cuando inicia un componente hay ejecutar show dentro del afterViewInit*/

/*Correcto*/
ngAfterViewInit(){
    this.modal.show() //Funciona OK!
}

/*Incorrecto*/
ngOnInit(){
    this.modal.show() //Cannot read property show of undefined
}

```

## 1.2. Accordion

* titulo: string

```html
<m-my-accordion [titulo]="'My accordion" >
    <m-my-accordion-body>
        Cuerpo del Accordion
    </m-my-accordion-body>
    <m-my-accordion-footer>
        Footer del Accordion
    </m-my-accordion-footer>
</m-my-accordion>
```

## 1.3. Portlet

```html
<m-portlet-container>
    <m-portlet-header>
        Header del Portlet
    </m-portlet-header>
    <m-portlet-body>
        Cuerpo del Portlet
    </m-portlet-body>
    <m-portlet-footer>
        Footer del Portlet
    </m-portlet-footer>
</m-portlet-container>
```

## 1.4. Tabla (Datatable.js)

* datos: any[]
* nombreColumnas: string[]
* valorColumna: string[]
* acciones: { callback: Function, class: string, name: string}[]
* totalesACalcular: string[]
* promediosACalcular: string[]
* imagen: string[]
* fallbackImage: string (imagen que se va a mostrar si la imagen no se puede mostrar por algun motivo)
* checked: boolean = false
* onCheck: EventEmitter
* pipes = {}

```html
<m-tabla
    [datos]="misDatos"
    [nombreColumnas]="['Nombre', 'Saldo Neto']"
    [valorColumnas]="['nombre','saldo']"
    [totalesACalcular]="'saldo'"
    [promediosACalcular]="'saldo'"
    [imagen]="'./imagen'"
    [fallBackImagen]="'./fallBackImagen'"
    [checked]="true"
    (onCheck)="realizarAccionOnCheck($event)"
    [acciones]="misAcciones"
    [pipes]="misPipes"
>
</m-tabla>
```

```javascript

    /* valorColumna, totalesACalcular, promediosACalcular, y los pipes hacen referencia a las claves de los objetos que se envian al componeneste por el input datos*/

    misDatos : Persona[] = [{nombre: 'Sandra', saldo: 100}]

    realizarAccion(persona: Persona){
        console.log(persona)
    }

    acciones = [{
        callback: this.realizarAccion.bind(this),
        class: "flaticon flaticon-edit"
        name: "Realizar accion"
    }]

    /*O para ahorrar el bind(this)*/

    //Se escribe la funcion como un arrow function :)
    realizarAccion = (persona: Persona) => {
        console.log(persona)
    }

    acciones = [{
        callback: this.realizarAccion,
        class: "flaticon flaticon-edit"
        name: "Realizar accion"
    }]

    /*Sobre los pipes*/

    /*Los pipes los funciones que se utilizan para modificar como los datos seran mostrados al usuario. No modifican los datos, solo se altera la forma en que se muestran por pantalla*/

    misPipes = {
        nombre: (nombre) => nombre.toUpperCase(),
        saldo: this.mostrarDosDecimales
    }

    mostrarDosDecimales = (saldo) => saldo.toFixed(2)
```

## 1.5. Tabs

* active: boolean = false
* titulo: string

```html
<m-tabs>
    <m-tab-item [active]="true" titulo="Tab 1">
    Cuerpo del tab 1
    </m-tab-item>
    <m-tab-item titulo="Tab 2">
    Cuerpo del tab 2
    </m-tab-item>
</m-tabs>
```

## 1.6. Estadisticas (Chart.js)

(Simplificado por que es un quilombo)

Se proveen las interfaces

* GraficoIndicadorI: {
    titulo: string,
    valores: Array<IndicadorI> | ((escala?: string) => Promise<IndicadorI>)
    tipo: 'indicador',
}
* IndicadorI: {
    titulo: string,
    subtitulo: string,
    valorActual: number,
    valorAnterior?: number,
    color?: string
}
* tablaI: {
    titulo: string,
    nombreColumnas: Array<string>,
    valorColumnas: Array<string>,
    datos: Array<any>,
    mostrarTotalesVertical: boolean,
    mostrarPromediosVertical: boolean
}
* GraficoI: {
    valores: object | ((escala?: string) => Promise<object>),
    titulo: string,
    tipo: 'barra' | 'linea' | 'torta',
    mostrarTabla?: boolean,
    mostrarTotalesVertical?: boolean,
    mostrarPromediosVertical?: boolean,
    mostrarTotalesHorizontal?: boolean,
    mostrarPromediosHorizontal?: boolean,
    mostrarCambiarTipo?: boolean,
    fullScreen?: boolean,
    stacked?: boolean,
    colores?: { nombre: string, color: string }[]
}

### 1.6.1. Grafico torta basico

```html
<app-grafico-borras
    [valores]="misValores"
>
</app-grafico-barras>
```

```javascript
misValores= [{
    nombre: 'Sandra',
    saldo: 100
}]
```
