import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit, ContentChild, OnChanges } from '@angular/core';


@Component({
  selector: 'm-tab-item',
  template: `
  <div class="tab-pane" role="tabpanel">
  <div *ngIf="active">
      <ng-content></ng-content>
      </div>
    </div>`
})
export class TabItemComponent {

  @Input() active = false
  @Input() titulo = ''

  constructor() { }


}
