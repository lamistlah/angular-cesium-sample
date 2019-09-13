import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularCesiumModule, AngularCesiumWidgetsModule } from 'angular-cesium';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from './shared/material-module';
import { ThemeModule } from './component/theme/theme.module';
import { MapComponent } from './component/map/map.component';
import { AppComponent } from './component/app/app.component';
import { routes } from './app.route';
import { MapToolbarComponent } from './component/map-toolbar/map-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapToolbarComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ThemeModule,
    // Angular Material
    SharedMaterialModule,
    // Angular Cesium
    AngularCesiumModule.forRoot(),
    // Router
    RouterModule.forRoot(
      routes,
      { enableTracing: false }, // <-- debugging purposes only
    ),
    AngularCesiumWidgetsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
