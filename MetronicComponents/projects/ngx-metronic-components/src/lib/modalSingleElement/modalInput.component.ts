
import { Component, ViewChildren } from '@angular/core';
import { ModalInterface } from './modalInterface.component';
import * as Modelos from '../../../../models/generales';

@Component({
    selector: 'mc-modal-input',
    templateUrl: './modalInput.component.html',

})

export class ModalInput extends ModalInterface {
    inputs: Array<Modelos.Input> = [new Modelos.Input(null, null, null, null)];
    modalId = 'modalInput';
    files: Array<{ 'name': string, 'file': File }> = [];
    fileName: Array<string> = [];
    @ViewChildren('fileInput') fileInput;

    getValues() {
        if (this.inputs.length == 1) {
            return this.inputs[0].value;
        } else {
            let objectToReturn = new Object();
            this.inputs.forEach(input => objectToReturn[input.name] = input.value);
            this.files.forEach(file => objectToReturn[file.name] = file.file);
            return objectToReturn;
        }
    }

    fileChange(event, fileName, index) {
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            const file: File = fileList[0];
            this.files.push({ name: fileName, file: file });
            this.fileName[index] = file.name;
        }
    }

    seleccionarArchivo(indice) {
        this.fileInput._results[indice].nativeElement.click();
    }

}
