import { Component, ViewChild } from '@angular/core';
import {
  CameraService,
  CirclesEditorService,
  EllipsesEditorService,
  PolygonsEditorService,
  PolylineEditorObservable,
  PolylinesEditorService,
  RangeAndBearingComponent,
} from 'angular-cesium';

@Component({
  selector: 'app-map-toolbar',
  templateUrl: './map-toolbar.component.html',
  styleUrls: ['./map-toolbar.component.scss'],
  providers: [CirclesEditorService, EllipsesEditorService,
    PolygonsEditorService, PolylinesEditorService],
})
export class MapToolbarComponent {
  rnb: PolylineEditorObservable;

  @ViewChild('rangeAndBearing', { static: false }) private rangeAndBearing: RangeAndBearingComponent;

  constructor(private cameraService: CameraService,
              private circlesEditor: CirclesEditorService,
              private ellipsesEditor: EllipsesEditorService,
              private polygonsEditor: PolygonsEditorService,
              private polylineEditor: PolylinesEditorService) {
  }

  createRangeAndBearing(): void {
    if (this.rnb) {
      this.rnb.dispose();
    }

    this.rnb = this.rangeAndBearing.create();
  }

  drawCircle(): void {
    this.circlesEditor.create();
  }

  drawEllipse(): void {
    this.ellipsesEditor.create();
  }

  drawPolygon(): void {
    this.polygonsEditor.create();
  }

  drawPolyline(): void {
    this.polylineEditor.create();
  }

  goHome(): void {
    this.cameraService.cameraFlyTo(
      { destination: Cesium.Cartesian3.fromDegrees(-173.9642431, 26.064187, 200000) },
    );
  }
}
