import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  NgxMetronicComponentsModule,
} from './../../projects/ngx-metronic-components/src/lib/ngx-metronic-components.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMetronicComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
