import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { FichaAfiliadoComponent } from './ficha-afiliado/ficha-afiliado.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { ModalInput } from './modalSingleElement/modalInput.component';
import { ModalSelect } from './modalSingleElement/modalSelect.component';
import { NgxTypeaheadModule } from 'ngx-typeahead';
import { PortletMBodyComponent } from './portlet/portlet-body/portlet-body.component';
import { PortletMHeaderComponent } from './portlet/portlet-header/portlet-header.component';
import { PortletMComponent } from './portlet/portlet.component';
import { MyAccordionComponent } from './my-accordion/my-accordion.component';
import { MyAccordionBodyComponent } from './my-accordion/my-accordion-body/my-accordion-body.component';
import { MyAccordionFooterComponent } from './my-accordion/my-accordion-footer/my-accordion-footer.component';
import { ModalComponent } from './modal/modal.component';
import { ModalBodyComponent } from './modal/modal-body/modal-body.component';
import { ModalFooterComponent } from './modal/modal-footer/modal-footer.component';
import { PortletFooterComponent } from './portlet/portlet-footer/portlet-footer.component';
import { PortletHeaderToolsComponent } from './portlet/portlet-header/portlet-header-tools/portlet-header-tools.component';
import { ModalBannerComponent } from './modal/modal-banner/modal-banner.component';
import { GraficoLineaComponent } from './estadisticas/grafico-linea/grafico-linea.component';
import { GraficoTortaComponent } from './estadisticas/grafico-torta/grafico-torta.component';
import { IndicadoresComponent } from './estadisticas/indicadores/indicadores.component';
import { GraficoBarrasComponent } from './estadisticas/grafico-barras/grafico-barras.component';
import { ListaResultadosComponent } from './estadisticas/lista-resultados/lista-resultados.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabItemComponent } from './tabs/tab-item/tab-item.component';

@NgModule({
	declarations: [
		TablaComponent,
		FichaAfiliadoComponent,
		TypeaheadComponent,
		ModalInput,
		ModalSelect,
		PortletMComponent,
		PortletMBodyComponent,
		PortletMHeaderComponent,
		MyAccordionComponent,
		MyAccordionBodyComponent,
		MyAccordionFooterComponent,
		ModalComponent,
		ModalBodyComponent,
		ModalFooterComponent,
		ModalBannerComponent,
		PortletFooterComponent,
		PortletHeaderToolsComponent,
		GraficoBarrasComponent,
		GraficoLineaComponent,
		GraficoTortaComponent,
		IndicadoresComponent,
		ListaResultadosComponent,
		TabsComponent,
		TabItemComponent
	],
	imports: [
		FormsModule, CommonModule, NgxTypeaheadModule
	],
	exports: [
		TablaComponent,
		FormsModule,
		FichaAfiliadoComponent,
		ModalInput,
		ModalSelect,
		PortletMComponent,
		PortletMBodyComponent,
		PortletMHeaderComponent,
		MyAccordionComponent,
		MyAccordionBodyComponent,
		MyAccordionFooterComponent,
		ModalComponent,
		ModalBodyComponent,
		ModalFooterComponent,
		ModalBannerComponent,
		PortletFooterComponent,
		PortletHeaderToolsComponent,
		GraficoBarrasComponent,
		GraficoLineaComponent,
		GraficoTortaComponent,
		IndicadoresComponent,
		ListaResultadosComponent,
		TabsComponent,
		TabItemComponent
	]
})
export class SharedModule { }
