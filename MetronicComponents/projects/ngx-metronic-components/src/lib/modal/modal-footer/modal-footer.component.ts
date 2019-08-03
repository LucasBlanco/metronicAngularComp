import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-modal-footer',
  template: ` <div class="modal-footer">
  <ng-content></ng-content>
</div>`
})
export class ModalFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
