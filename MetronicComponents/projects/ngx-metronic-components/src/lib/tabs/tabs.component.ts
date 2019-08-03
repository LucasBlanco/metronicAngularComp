import { Component, OnInit, ViewChildren, QueryList, ContentChildren, AfterContentInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TabItemComponent } from './tab-item/tab-item.component';

@Component({
  selector: 'm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabItemComponent) tabItems: QueryList<TabItemComponent>;

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.tabItems.first.active = true
  }

  selectTab(tab: TabItemComponent) {
    this.tabItems.map(t => t.active = false)
    tab.active = true
  }


}
