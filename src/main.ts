import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// If youre using Cesium version >= 1.42.0 add this line
Cesium.buildModuleUrl.setBaseUrl('/assets/cesium/');

if (environment.production) {
  enableProdMode();
  Cesium.buildModuleUrl.setBaseUrl('/angular-cesium-sample/assets/cesium/');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
