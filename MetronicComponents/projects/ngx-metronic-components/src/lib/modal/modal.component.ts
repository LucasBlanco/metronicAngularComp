import { Component, OnInit, Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'mc-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

  constructor() { }
  @Input() idModal;
  @Input() titulo: string;
  @Input() hideHeader: false;

  ngOnInit() {
  }

  show = () => {
    $('#' + this.idModal).appendTo('body').modal('show');
    // $('#' + this.id).css("z-index", "1500");
  }
  hide = () => {
    $('#' + this.idModal).modal('hide');
  }

}
