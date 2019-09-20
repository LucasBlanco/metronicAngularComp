import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-accordion-footer',
  template: `<div class="m-portlet__foot m-portlet__foot--fit">
  <div class="m-form__actions m-form__actions pt-3 d-flex" style="justify-content: flex-end">

        <ng-content></ng-content>

  </div>
</div>`
})
export class MyAccordionFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
