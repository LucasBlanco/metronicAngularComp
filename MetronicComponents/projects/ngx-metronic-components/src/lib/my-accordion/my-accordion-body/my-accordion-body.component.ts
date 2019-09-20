import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-accordion-body',
  template: `
  <div class="m-portlet__body">
    <div class="m-form__section m-form__section--first">
      <ng-content></ng-content>
    </div>
  </div>
`
})
export class MyAccordionBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
