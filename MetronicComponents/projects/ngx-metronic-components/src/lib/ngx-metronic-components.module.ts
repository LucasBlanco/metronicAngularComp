import { NgModule } from '@angular/core';
import { GraficoBarrasComponent } from './estadisticas/grafico-barras/grafico-barras.component';
import { GraficoLineaComponent } from './estadisticas/grafico-linea/grafico-linea.component';
import { GraficoTortaComponent } from './estadisticas/grafico-torta/grafico-torta.component';
import { ModalBannerComponent } from './modal/modal-banner/modal-banner.component';
import { ModalBodyComponent } from './modal/modal-body/modal-body.component';
import { ModalComponent } from './modal/modal.component';
import { ModalFooterComponent } from './modal/modal-footer/modal-footer.component';
import { MyAccordionBodyComponent } from './my-accordion/my-accordion-body/my-accordion-body.component';
import { MyAccordionComponent } from './my-accordion/my-accordion.component';
import { MyAccordionFooterComponent } from './my-accordion/my-accordion-footer/my-accordion-footer.component';
import { PortletFooterComponent } from './portlet/portlet-footer/portlet-footer.component';
import { PortletMBodyComponent } from './portlet/portlet-body/portlet-body.component';
import { PortletMComponent } from './portlet/portlet.component';
import { PortletMHeaderComponent } from './portlet/portlet-header/portlet-header.component';
import { PortletHeaderToolsComponent } from './portlet/portlet-header/portlet-header-tools/portlet-header-tools.component';
import { TablaComponent } from './tabla/tabla.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabItemComponent } from './tabs/tab-item/tab-item.component';
import { Grafico } from './estadisticas/graficos';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GraficoBarrasComponent,
    GraficoLineaComponent,
    GraficoTortaComponent,
    ModalBannerComponent,
    ModalBodyComponent,
    ModalComponent,
    ModalFooterComponent,
    MyAccordionBodyComponent,
    MyAccordionComponent,
    MyAccordionFooterComponent,
    PortletFooterComponent,
    PortletMBodyComponent,
    PortletMComponent,
    PortletMHeaderComponent,
    PortletHeaderToolsComponent,
    TablaComponent,
    TabsComponent,
    TabItemComponent,
    Grafico,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    GraficoBarrasComponent,
    GraficoLineaComponent,
    GraficoTortaComponent,
    ModalBannerComponent,
    ModalBodyComponent,
    ModalComponent,
    ModalFooterComponent,
    MyAccordionBodyComponent,
    MyAccordionComponent,
    MyAccordionFooterComponent,
    PortletFooterComponent,
    PortletMBodyComponent,
    PortletMComponent,
    PortletMHeaderComponent,
    PortletHeaderToolsComponent,
    TablaComponent,
    TabsComponent,
    TabItemComponent
  ]
})
export class NgxMetronicComponentsModule { }
