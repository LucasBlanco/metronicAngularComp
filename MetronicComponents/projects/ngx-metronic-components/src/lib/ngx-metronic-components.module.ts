import { NgModule } from '@angular/core';
import { GraficoBarrasComponent as MCGraficoBarrasComponent } from './estadisticas/grafico-barras/grafico-barras.component';
import { GraficoLineaComponent as MCGraficoLineaComponent } from './estadisticas/grafico-linea/grafico-linea.component';
import { GraficoTortaComponent as MCGraficoTortaComponent } from './estadisticas/grafico-torta/grafico-torta.component';
import { ModalBannerComponent as MCModalBannerComponent } from './modal/modal-banner/modal-banner.component';
import { ModalBodyComponent as MCModalBodyComponent } from './modal/modal-body/modal-body.component';
import { ModalComponent as MCModalComponent } from './modal/modal.component';
import { ModalFooterComponent as MCModalFooterComponent } from './modal/modal-footer/modal-footer.component';
import { MyAccordionBodyComponent as MCMyAccordionBodyComponent } from './my-accordion/my-accordion-body/my-accordion-body.component';
import { MyAccordionComponent as MCMyAccordionComponent } from './my-accordion/my-accordion.component';
import { MyAccordionFooterComponent as MCMyAccordionFooterComponent } from './my-accordion/my-accordion-footer/my-accordion-footer.component';
import { PortletFooterComponent as MCPortletFooterComponent } from './portlet/portlet-footer/portlet-footer.component';
import { PortletMBodyComponent as MCPortletMBodyComponent } from './portlet/portlet-body/portlet-body.component';
import { PortletMComponent as MCPortletMComponent } from './portlet/portlet.component';
import { PortletMHeaderComponent as MCPortletMHeaderComponent } from './portlet/portlet-header/portlet-header.component';
import { PortletHeaderToolsComponent as MCPortletHeaderToolsComponent } from './portlet/portlet-header/portlet-header-tools/portlet-header-tools.component';
import { TablaComponent as MCTablaComponent } from './tabla/tabla.component';
import { TabsComponent as MCTabsComponent } from './tabs/tabs.component';
import { TabItemComponent as MCTabItemComponent } from './tabs/tab-item/tab-item.component';
import { Grafico as MCGrafico } from './estadisticas/graficos';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MCGraficoBarrasComponent,
    MCGraficoLineaComponent,
    MCGraficoTortaComponent,
    MCModalBannerComponent,
    MCModalBodyComponent,
    MCModalComponent,
    MCModalFooterComponent,
    MCMyAccordionBodyComponent,
    MCMyAccordionComponent,
    MCMyAccordionFooterComponent,
    MCPortletFooterComponent,
    MCPortletMBodyComponent,
    MCPortletMComponent,
    MCPortletMHeaderComponent,
    MCPortletHeaderToolsComponent,
    MCTablaComponent,
    MCTabsComponent,
    MCTabItemComponent,
    MCGrafico,

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MCGraficoBarrasComponent,
    MCGraficoLineaComponent,
    MCGraficoTortaComponent,
    MCModalBannerComponent,
    MCModalBodyComponent,
    MCModalComponent,
    MCModalFooterComponent,
    MCMyAccordionBodyComponent,
    MCMyAccordionComponent,
    MCMyAccordionFooterComponent,
    MCPortletFooterComponent,
    MCPortletMBodyComponent,
    MCPortletMComponent,
    MCPortletMHeaderComponent,
    MCPortletHeaderToolsComponent,
    MCTablaComponent,
    MCTabsComponent,
    MCTabItemComponent
  ]
})
export class NgxMetronicComponentsModule { }
