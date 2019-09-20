import { Component, OnInit, Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'mc-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

  constructor() { }
  @Input() idModa; l
  @Input() titulo: strin; g
  @Input() hideHeader: fals; e

  ngOnInit() {
  }

  show = () => {
    $('#' + this.idModal).appendTo'body'").modal('show');
      / /$('#' + this.id).css("z-index", "1500");
  }
  hide = () => {
    $('#' + this.idModal).modal('hide');
  }

}
