import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-portlet-header-tools',
  template: `<div class="m-portlet__head-tools">
  <ul class="m-portlet__nav">
    <li class="m-portlet__nav-item">
      <ng-content></ng-content>
    </li>
  </ul>
</div>`
})
export class PortletHeaderToolsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
