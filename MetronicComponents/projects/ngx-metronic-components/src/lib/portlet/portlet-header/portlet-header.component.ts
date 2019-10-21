import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "mc-portlet-header",
  styleUrls: ['./portlet-header.component.scss'],
  template: `
    <div [class]=" dark ? 'm-portlet__head dark-header' : 'm-portlet__head'">
      <div class="m-portlet__head-caption ">
        <div class="m-portlet__head-title">
          <ng-container *ngIf="icon || title" [style.color]=" dark ? 'white' : ''">
            <span class="m-portlet__head-icon" [style.color]=" dark ? 'white' : ''">
              <i  *ngIf="!iconIsImg" style="font-size: 2.2rem;" [class]="icon"></i>
              <img  *ngIf="iconIsImg" [src]="icon" style="width: 2em; color: white" alt="">
            </span>
            <h3 class="m-portlet__head-text" [style.color]=" dark ? 'white' : ''">
              {{ title }}
            </h3>
          </ng-container>
        </div>
      </div>
      <div class="m-portlet__head-tools">
        <ng-content select="mc-portlet-header-tools"></ng-content>
      </div>
      
    </div>
  `
})
export class PortletMHeaderComponent implements OnInit {
  @Input() icon: string = null;
  @Input() title: string = null;
  @Input() dark = false;
  iconIsImg = false;


  constructor() { }

  ngOnInit() {
    if (this.icon && (this.icon.includes('.') || this.icon.includes('/'))) {
      this.iconIsImg = true;
    }
  }

}
