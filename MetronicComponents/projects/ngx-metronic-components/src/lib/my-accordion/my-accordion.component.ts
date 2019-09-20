import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mc-accordion',
  templateUrl: './my-accordion.component.html',
})
export class MyAccordionComponent implements OnInit {

  constructor() { }

  @Input() titulo: string;
  ngOnInit() {
  }

}
