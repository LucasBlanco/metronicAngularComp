import { Component, OnInit } from '@angular/core';

@Component({
  selector: "mc-portlet-container",
  template: `
    <div class="m-portlet m-portlet--head-solid-bg">
      <ng-content select="mc-portlet-header"></ng-content>
      <ng-content select="mc-portlet-body"></ng-content>
      <ng-content select="mc-portlet-footer"></ng-content>
    </div>
  `
})
export class PortletMComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
