import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularCesiumModule } from 'angular-cesium';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { SharedMaterialModule } from './shared/material-module';
import { ThemeModule } from './component/theme/theme.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    SharedMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ThemeModule,
    AngularCesiumModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
