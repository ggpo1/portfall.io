export type BaseLayerOptions = {
  id: string;
  layerConfig?: mapboxgl.AnyLayer;
  sourceType?: "geojson" | "tile";
  beforeId?: string;
  base?: number;
  tileUrl?: string;
  debug?: boolean;
}

export enum Events {
  SourceCreate = "@map-layer/source.create",
  SourceDelete = "@map-layer/source.delete",
  LayerCreate = "@map-layer/layer.create",
  LayerDelete = "@map-layer/layer.delete",
  DataUpdate = "@map-layer/data.update",
  VisibilityUpdate = "@map-layer/visibility.update",
}

export type MapLayerEvent<G extends GeoJSON.Geometry, P = GeoJSON.GeoJsonProperties> = {
  id: string;
  visibility?: boolean;
  data?: GeoJSON.FeatureCollection<G, P>;
};

export type Handler<G extends GeoJSON.Geometry, P = GeoJSON.GeoJsonProperties> = (event: MapLayerEvent<G, P>) => void;

export type Handlers<G extends GeoJSON.Geometry, P = GeoJSON.GeoJsonProperties> = {
  [Events.SourceCreate]: Handler<G, P>;
  [Events.SourceDelete]: Handler<G, P>;
  [Events.LayerCreate]: Handler<G, P>;
  [Events.LayerDelete]: Handler<G, P>;
  [Events.DataUpdate]: Handler<G, P>;
  [Events.VisibilityUpdate]: Handler<G, P>;
};
