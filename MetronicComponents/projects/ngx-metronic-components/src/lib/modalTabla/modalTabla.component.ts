
import { Component, Input } from '@angular/core';
import * as Modelos from '../../../../models/generales';

@Component({
    selector: 'mc-modal-tabla',
    templateUrl: './modalTabla.component.html',
})

export class ModalTablaComponent {
    @Input() datos: Array<any> = [];
    @Input() nombreColumnas: Array<string> = [];
    @Input() valorColumnas: Array<string> = [];
    @Input() titulo: string;
}
