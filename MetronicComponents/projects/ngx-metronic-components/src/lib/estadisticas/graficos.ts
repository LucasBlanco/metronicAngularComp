
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var Chart: any;

@Component({
    selector: 'mc-grafico',
    template: ``
})
export class Grafico implements OnInit {

    @Input() stacked = true;
    @Input() mostrarCambiarTipo = true;
    @Input() titulo: string;
    @Input() mostrarFiltro = true;
    @Input() mostrarTabla = true;
    @Input() mostrarTotalesHorizontal = true;
    @Input() mostrarPromediosHorizontal = true;
    @Input() mostrarTotalesVertical = true;
    @Input() mostrarPromediosVertical = false;
    @Input() valores: object | ((escala?: string) => Promise<object>) = {};
    // tslint:disable-next-line: no-output-on-prefix
    @Output() onExpandirse: EventEmitter<any> = new EventEmitter();
    // tslint:disable-next-line: no-output-on-prefix
    @Output() onCambiarAGraficoTorta: EventEmitter<any> = new EventEmitter();
    // tslint:disable-next-line: no-output-on-prefix
    @Output() onCambiarAGraficoLinea: EventEmitter<any> = new EventEmitter();
    // tslint:disable-next-line: no-output-on-prefix
    @Output() onCambiarAGraficoBarra: EventEmitter<any> = new EventEmitter();
    // tslint:disable-next-line: no-output-on-prefix
    @Output() onMostrarTabla: EventEmitter<any> = new EventEmitter();
    @Input() colores: { nombre: string, color: string }[] = null;

    coloresRandom = ['#716aca', '#00c5dc', '#f4516c', '#f00000', '#28a745', '#343a40', '#ffc107'];
    colorSeleccionado = 0;
    nivelDeAnidamiento = 0;
    valoresLocales = {};
    datos;
    opciones;
    usaEscalaTiempo = false;
    chart;
    escalaTiempo = null;

    iniciarGrafico() { }

    ngOnInit() {
        if (this.valores instanceof Function) {
            this.escalaTiempo = 'semana';
            this.valores('semana').then(data => {
                this.valoresLocales = data;
                this.iniciarGrafico();
            });
        } else {
            this.valoresLocales = this.valores;
            this.iniciarGrafico();
        }
    }

    cambiarEscalaTiempo(escala: 'dia' | 'semana' | 'mes' | 'anio') {
        this.escalaTiempo = escala;
        if (this.valores instanceof Function) {
            this.valores(escala).then(data => { this.valoresLocales = data; this.iniciarGrafico(); });

        }
    }

    getColor(campo?) {
        if (this.colores) {
            return this.colores.find(color => color.nombre === campo).color;
        } else {
            return this.coloresRandom[this.colorSeleccionado++];
        }
    }

    obtenerHijos = (objeto): Array<any> => Object.keys(objeto).map(key => objeto[key]);

    tieneHijos = (objeto): boolean => Object.keys(objeto).length > 0;

    nivelesDeAnidamiento(objeto): 0 | 1 | 2 {
        if (this.tieneHijos(objeto)) { // Nivel 0
            let hijos = this.obtenerHijos(objeto);
            if (this.tieneHijos(hijos[0])) { // Nivel 1
                hijos = this.obtenerHijos(hijos[0]);
                if (this.tieneHijos(hijos[0])) { // Nivel 2
                    return 2;
                } else {
                    return 1;
                }
            } else {
                return 0;
            }
        }
    }

    runCountUp(id: string) {
        const obj = document.getElementById(id);
        const value = Number(obj.innerHTML);
        let timer;
        const steps = 20;
        let currentStep = steps;
        const increaseValue = () => {
            const currentValue = value - currentStep * value / steps;
            obj.innerHTML = currentValue === value ? value.toString() : (Math.ceil(currentValue)).toString();
            if (--currentStep < 0) {
                clearInterval(timer);
            }
        };
        timer = setInterval(increaseValue, 50);
    }

    getRandom() {
        const random = Math.random().toString(36).substr(2, 9);
        if (document.getElementById(random)) {
            return this.getRandom();
        } else {
            return random;
        }
    }

    showTabla() {
        this.onMostrarTabla.emit(this.generarTabla());
    }

    generarTabla() {
        if (this.nivelDeAnidamiento === 0) {
            const nombreColumnas = [''].concat(Object.keys(this.valoresLocales));
            const datos = JSON.parse(JSON.stringify(this.valoresLocales));
            if (this.mostrarTotalesHorizontal) {
                nombreColumnas.push('Total');
                datos.Total = Number(Object.values(datos).reduce((a, b) => a + (b as any))).toFixed(2);
            }
            if (this.mostrarPromediosHorizontal) {
                nombreColumnas.push('Promedio');
                const valores = Object.entries(datos).filter(([key, _]) => key !== 'Total').map(([_, value]) => value);
                datos.Promedio = ((valores.reduce((a, b) => (a as number) + (b as number), 0) as number) / valores.length).toFixed(2);
            }
            datos[''] = 'Cantidad';
            return {
                nombreColumnas,
                valorColumnas: nombreColumnas,
                datos: [datos],
                mostrarTotalesVertical: this.mostrarTotalesVertical,
                mostrarPromediosVertical: this.mostrarPromediosVertical
            };
        }
        // [{Tipo: Aceptadas, Maria: 5, Juana: 8}]
        if (this.nivelDeAnidamiento === 1) {
            const nombreColumnas = ['Tipo'].concat(Object.keys(this.valoresLocales));
            const datos = Object.keys(Object.entries(JSON.parse(JSON.stringify(this.valoresLocales)))[0][1]).map(
                tipo => ({ Tipo: tipo })
            );
            Object.keys(this.valoresLocales).forEach(
                key => datos.forEach(dato => dato[key] = null)
            );
            Object.entries(this.valoresLocales).forEach(
                ([key1, value1]) => Object.entries(value1).forEach(
                    ([key2, value2]) => {
                        const i = datos.findIndex(d => d.Tipo === key2);
                        datos[i][key1] = value2;
                    }
                )
            );
            if (this.mostrarTotalesHorizontal) {
                nombreColumnas.push('Total');
                datos.forEach(
                    d => (d as { Total: string, Tipo: string }).Total = Object.entries(d)
                        .filter(([key, _]) => key != 'Tipo')
                        .reduce((a, [_, value]) => a + Number(value), 0).toFixed(2)
                );
            }
            if (this.mostrarPromediosHorizontal) {
                nombreColumnas.push('Promedio');
                datos.forEach(
                    d => (d as { Promedio: string, Tipo: string }).Promedio = (Object.entries(d)
                        .filter(([key, _]) => key !== 'Tipo' && key !== 'Total')
                        .reduce((a, [_, value]) => a + Number(value), 0) / Object.entries(d)
                            .filter(([key, _]) => key !== 'Tipo' && key !== 'Total').length).toFixed(2)
                );

            }
            return {
                nombreColumnas,
                valorColumnas: nombreColumnas,
                datos,
                mostrarTotalesVertical: this.mostrarTotalesVertical,
                mostrarPromediosVertical: this.mostrarPromediosVertical
            };
        }
    }



    obtenerDatosDiagrama() {
        let datos: {
            datasets: {
                data: any,
                label: any,
                borderColor: string,
                backgroundColor: string,
                yAxisID?: any,
                fill?: any
            }[], labels: Array<string>
        };
        let opciones: { scales: any };
        opciones = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };
        this.nivelDeAnidamiento = this.nivelesDeAnidamiento(this.valoresLocales);
        if (this.nivelDeAnidamiento === 0) {
            const color = this.getColor();
            datos = {
                labels: Object.keys(this.valoresLocales),
                datasets: [
                    {
                        label: 'Cantidad',
                        data: Object.values(this.valoresLocales),
                        backgroundColor: color,
                        borderColor: color,
                        fill: false
                    }
                ]
            };

        }
        if (this.nivelDeAnidamiento === 1) {

            const data = Object.keys(Object.entries(this.valoresLocales)[0][1]).reduce(
                (objeto, key) => { objeto[key] = []; return objeto; }, {});

            Object.entries(this.valoresLocales).forEach(
                valor => Object.entries(valor[1]).forEach(
                    entry => { console.log(entry); data[entry[0]].push(entry[1]); }
                )
            );
            const datasets = Object.entries(data).map(
                ([key, value]) => {
                    const color = this.getColor(key);
                    return {
                        data: value,
                        label: key,
                        borderColor: color,
                        backgroundColor: color,
                        yAxisId: key,
                        fill: false
                    };
                }
            );

            datos = {
                datasets,
                labels: Object.keys(this.valoresLocales)
            };

            opciones = {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            };

        }
        if (this.nivelDeAnidamiento === 2) {

            const hojas = Object.entries(this.valoresLocales).map(
                ([_, value]) => value
            );


            const data = Object.entries(hojas[0]).map(
                ([key, value]) => ({
                    [key]: Object.keys(value).reduce(
                        (objeto, key) => { objeto[key] = []; return objeto; }, {})
                })
            ).reduce(
                (obj, value) => {
                    Object.entries(value).forEach(
                        ([clave, valor]) => obj[clave] = valor
                    );
                    return obj;
                }, {}
            );

            hojas.forEach(
                hoja => Object.entries(hoja).forEach(
                    ([key1, value1]) => Object.entries(value1).forEach(
                        ([key2, value2]) => data[key1][key2].push(value2)
                    )
                )
            );



            const datasets = Object.entries(data).reduce(
                (array, [key1, value1]) => {
                    this.colorSeleccionado = 0;
                    return array.concat(Object.entries(value1).map(
                        ([key2, value2]) => {
                            const color = this.getColor(key2);
                            return ({
                                data: value2,
                                label: key1 + '-' + key2,
                                stack: key1,
                                borderColor: color,
                                backgroundColor: color
                            });
                        }
                    ));
                }
                , []
            );

            datos = {
                datasets,
                labels: Object.keys(this.valoresLocales)
            };



            opciones = {
                scales: {
                    xAxes: [{ stacked: true }],
                    yAxes: [{ stacked: true }]
                }
            };

        }

        this.usaEscalaTiempo = datos.labels.some(d => d.includes('/'));
        return { datos, opciones };
    }

    getEscalaTiempo() {
        if (this.escalaTiempo) {
            return (this.escalaTiempo === 'anio') ? ' (año)' : ' (' + this.escalaTiempo + ')';
        }
        return '';
    }
}
