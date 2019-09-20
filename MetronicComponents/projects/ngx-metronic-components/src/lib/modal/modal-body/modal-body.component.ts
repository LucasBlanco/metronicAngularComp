import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-modal-body',
  template: `<div class="modal-body">
    <ng-content></ng-content>
  </div>`
})
export class ModalBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
