import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MapLayerData, mapLayerDataList } from './map-layer.data';

@Component({
  selector: 'app-map-layer',
  templateUrl: './map-layer.component.html',
  styleUrls: ['./map-layer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapLayerComponent {
  mapLayerDataList: MapLayerData[] = mapLayerDataList;
}
