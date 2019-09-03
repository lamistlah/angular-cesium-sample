import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularCesiumModule } from 'angular-cesium';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SharedMaterialModule } from './shared/material-module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    SharedMaterialModule,
    BrowserModule,
    AngularCesiumModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
