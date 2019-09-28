/* global Cesium */
import {
  DraggableToMapService,
  MapLayerProviderOptions,
  MapsManagerService,
  SceneMode,
  ViewerConfiguration
} from "angular-cesium";
import { AfterViewInit, Component, ViewChild } from "@angular/core";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  providers: [ViewerConfiguration],
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements AfterViewInit {
  sceneMode = SceneMode.SCENE2D;

  Cesium = Cesium;

  @ViewChild("mainMap", { static: false }) mainMap: MapComponent;

  MapLayerProviderOptions = MapLayerProviderOptions;

  constructor(
    private viewerConf: ViewerConfiguration,
    private mapsManagerService: MapsManagerService,
    private draggableToMapService: DraggableToMapService
  ) {
    this.viewerConf.viewerOptions = {
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
      mapMode2D: this.Cesium.MapMode2D.INFINITE_SCROLL,
      mapProjection: new Cesium.WebMercatorProjection()
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.viewerConf.viewerModifier = (viewer: any): void => {
      viewer.screenSpaceEventHandler.removeInputAction(
        this.Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
      );
    };
  }

  ngAfterViewInit(): void {
    // example for getting the viewer by Id outside of the ac-map hierarchy
    this.mapsManagerService.getMap("main-map");
    this.draggableToMapService.dragUpdates().subscribe((e) => console.log(e));
  }
}

export default "MapComponent";
