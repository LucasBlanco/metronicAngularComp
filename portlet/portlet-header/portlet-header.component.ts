import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "m-portlet-header",
  styleUrls: ["./portlet-header.component.scss"],
  template: `
    <div class="m-portlet__head dark-header">
      <div class="m-portlet__head-caption ">
        <div class="m-portlet__head-title">
          <ng-container *ngIf="icon && title" style="color: white">
            <span class="m-portlet__head-icon" style="color: white">
              <i  *ngIf="!iconIsImg" style="font-size: 2.2rem;" [class]="icon"></i>
              <img  *ngIf="iconIsImg" [src]="icon" style="width: 2em; color: white" alt="">
            </span>
            <h3 class="m-portlet__head-text" style="color: white">
              {{ title }}
            </h3>
          </ng-container>
        </div>
      </div>
      <ng-content select="m-portlet-header-tools"></ng-content>
    </div>
  `
})
export class PortletMHeaderComponent implements OnInit {
  @Input() icon: string = null;
  @Input() title: string = null;
  iconIsImg: boolean = false


  constructor() { }

  ngOnInit() {
    if (this.icon.includes('.') || this.icon.includes('/')) {
      this.iconIsImg = true
    }
  }

}
