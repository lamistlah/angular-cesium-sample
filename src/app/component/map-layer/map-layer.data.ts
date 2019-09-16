import { MapLayerProviderOptions } from 'angular-cesium';

export interface MapLayerData {
  provider: MapLayerProviderOptions;
  options: any;
}

export const mapLayerDataList: MapLayerData[] = [
  {
    provider: MapLayerProviderOptions.ArcGisMapServer,
    options: {
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer',
    },
  },
  {
    provider: MapLayerProviderOptions.OpenStreetMap,
    options: {
      url: 'https://a.tile.openstreetmap.org/',
    },
  },
];
