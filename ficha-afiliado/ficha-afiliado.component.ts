import { Component, OnInit, Input, OnChanges, ViewChildren, Renderer2 } from '@angular/core';
import { Afiliado } from '../../../../models/afiliado';

declare var $: any

@Component({
	selector: 'm-ficha-afiliado',
	templateUrl: './ficha-afiliado.component.html',
})
export class FichaAfiliadoComponent implements OnChanges, OnInit {
	@ViewChildren('bold') elemsABoldear
	@Input() afiliado: Afiliado = new Afiliado('...', '...', '...', '...', '...', '...', '...', '...')

	constructor(private renderer: Renderer2) { }

	ngOnInit() {
	}

	ngOnChanges(changes) {
		console.log(this.elemsABoldear)
		if (changes.afiliado.currentValue.dni !== null) {
			this.elemsABoldear._results.forEach(elem => {
				this.renderer.addClass(elem.nativeElement, 'm--font-bolder')
			})
		} else {
			if (this.elemsABoldear) {
				this.elemsABoldear._results.forEach(elem => {
					this.renderer.removeClass(elem.nativeElement, 'm--font-bolder')
				})
			}
			this.afiliado = new Afiliado('...', '...', '...', '...', '...', '...', '...', '...')
		}
	}

}
