import { Component } from '@angular/core';
import { SceneMode, ViewerConfiguration } from 'angular-cesium';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  providers: [ViewerConfiguration],
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  sceneMode = SceneMode.SCENE2D;

  Cesium = Cesium;

  constructor(private viewerConf: ViewerConfiguration) {
    viewerConf.viewerOptions = {
      selectionIndicator: false,
      timeline: false,
      infoBox: false,
      fullscreenButton: false,
      baseLayerPicker: false,
      animation: false,
      shouldAnimate: false,
      homeButton: false,
      geocoder: true,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      mapMode2D: Cesium.MapMode2D.INFINITE_SCROLL,
      imageryProvider: Cesium.createOpenStreetMapImageryProvider({
        url: 'https://a.tile.openstreetmap.org/',
      }),
    };

    viewerConf.viewerModifier = (viewer: any): void => {
      viewer.screenSpaceEventHandler
        .removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
    };
  }
}
