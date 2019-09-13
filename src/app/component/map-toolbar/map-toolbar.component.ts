import { Component } from '@angular/core';
import { CameraService } from 'angular-cesium';

@Component({
  selector: 'app-map-toolbar',
  templateUrl: './map-toolbar.component.html',
  styleUrls: ['./map-toolbar.component.scss'],
})
export class MapToolbarComponent {
  constructor(private cameraService: CameraService) { }

  goHome(): void {
    this.cameraService.cameraFlyTo(
      { destination: Cesium.Cartesian3.fromDegrees(-173.9642431, 26.064187, 200000) },
    );
  }
}
