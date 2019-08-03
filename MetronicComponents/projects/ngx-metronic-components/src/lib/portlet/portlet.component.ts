import { Component, OnInit } from "@angular/core";

@Component({
  selector: "m-portlet-container",
  template: `
    <div class="m-portlet m-portlet--head-solid-bg">
      <ng-content select="m-portlet-header"></ng-content>
      <ng-content select="m-portlet-body"></ng-content>
      <ng-content select="m-portlet-footer"></ng-content>
    </div>
  `
})
export class PortletMComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
