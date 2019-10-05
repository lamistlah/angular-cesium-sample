import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import {
  AngularCesiumModule,
  AngularCesiumWidgetsModule
} from "angular-cesium";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedMaterialModule } from "./shared/material-module";
import { ThemeModule } from "./component/theme/theme.module";
import { AppComponent } from "./component/app/app.component";
import { MapComponent } from "./component/map/map.component";
import { MapToolbarComponent } from "./component/map-toolbar/map-toolbar.component";
import { routes } from "./app.route";
import { MapLayerComponent } from "./component/map-layer/map-layer.component";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapToolbarComponent,
    MapLayerComponent
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
      { enableTracing: false } // <-- debugging purposes only
    ),
    AngularCesiumWidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
export default "AppModule";
