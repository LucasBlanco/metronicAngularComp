import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-portlet-footer',
  template: `<div class="m-portlet__foot">
  <ng-content></ng-content>

</div>`
})
export class PortletFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
