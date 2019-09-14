import {
  AfterViewInit, Component, ViewChild,
} from '@angular/core';
import {
  DraggableToMapService, MapsManagerService, SceneMode, ViewerConfiguration,
} from 'angular-cesium';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  providers: [ViewerConfiguration],
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  sceneMode = SceneMode.SCENE2D;

  Cesium = Cesium;

  @ViewChild('mainMap', { static: false }) mainMap: MapComponent;

  constructor(private viewerConf: ViewerConfiguration,
              private mapsManagerService: MapsManagerService,
              private draggableToMapService: DraggableToMapService) {
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    viewerConf.viewerModifier = (viewer: any): void => {
      viewer.screenSpaceEventHandler
        .removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
    };
  }

  ngAfterViewInit(): void {
    // example for getting the viewer by Id outside of the ac-map hierarchy
    this.mapsManagerService.getMap('main-map');
    this.draggableToMapService.dragUpdates().subscribe((e) => console.log(e));
  }
}
