import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'm-my-accordion',
  templateUrl: './my-accordion.component.html',
})
export class MyAccordionComponent implements OnInit {

  constructor() { }

  @Input() titulo: string
  ngOnInit() {
  }

}
