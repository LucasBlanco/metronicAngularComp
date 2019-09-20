import { Component, OnInit } from '@angular/core';

@Component({
  selector: "mc-portlet-body",
  template: `
    <div class="m-portlet__body"><ng-content></ng-content></div>
  `
})
export class PortletMBodyComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
