export interface GraficoI {

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

export interface GraficoIndicadorI {
    titulo: string,
    valores: Array<IndicadorI> | ((escala?: string) => Promise<IndicadorI>)
    tipo: 'indicador',
}

export interface IndicadorI {
    titulo: string,
    subtitulo: string,
    valorActual: number,
    valorAnterior?: number,
    color?: string
}

export interface tablaI {
    titulo: string,
    nombreColumnas: Array<string>,
    valorColumnas: Array<string>,
    datos: Array<any>,
    mostrarTotalesVertical: boolean,
    mostrarPromediosVertical: boolean
}