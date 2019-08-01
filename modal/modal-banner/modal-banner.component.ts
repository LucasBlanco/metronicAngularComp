import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'm-modal-banner',
    template: `<div style="
    background: #303140;
    color: white;
    padding: 25px;">
    <ng-content></ng-content>
  </div>`
})
export class ModalBannerComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
