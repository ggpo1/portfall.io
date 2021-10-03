import mapboxgl from "mapbox-gl";
import { TypedEmitter } from "tiny-typed-emitter";
import * as Types from "./base-layer.types";

type ActionResponse = Promise<boolean | Error>;

export class Abstract<G extends GeoJSON.Geometry, P = GeoJSON.GeoJsonProperties> extends TypedEmitter<
  Types.Handlers<G, P>
> {
  public readonly id: string;
  private baseIconSize = 1;
  private baseCircleSize = 16;
  private baseStrokeSize = 12;
  private layer: mapboxgl.AnyLayer = { id: "", type: "symbol" };
  public events = Types.Events;
  protected visibility: mapboxgl.Visibility = "visible";
  protected activeId: string | number | null = null;
  protected options: Types.BaseLayerOptions & { base: number };
  protected auxiliaryLayers: mapboxgl.AnyLayer[] = [];
  protected data: GeoJSON.FeatureCollection<G, P> = {
    type: "FeatureCollection",
    features: [],
  };

  private get layerEvent(): Types.MapLayerEvent<G, P> {
    return {
      id: this.id,
      visibility: this.visibility === "visible",
      data: this.data,
    };
  }

  constructor(protected map: mapboxgl.Map, options: Types.BaseLayerOptions) {
    super();
    this.options = { base: 1, ...options };
    if (this.options.layerConfig) {
      this.setLayer(this.options.layerConfig);
    }

    this.id = options.id;
  }

  public static getZoomLinearExpression(base: number | undefined = 1): mapboxgl.Expression {
    return ["interpolate", ["linear"], ["zoom"], 8, base * 0.1, 22, base * 1.5];
  }

  protected getZoomLinearExpression(): mapboxgl.Expression {
    return ["interpolate", ["linear"], ["zoom"], 8, this.options.base * 0.2, 22, this.options.base * 3];
  }

  protected setLayer(layer: mapboxgl.AnyLayer) {
    this.layer = layer;
  }

  protected addLayer = async (): ActionResponse => {
    const layer = this.map.getLayer(this.options.id);
    if (layer) return new Error();
    this.map.addLayer(this.layer, this.options.beforeId);
    return true;
  };

  protected addAuxiliaryLayers = (...layers: mapboxgl.AnyLayer[]) => {
    this.auxiliaryLayers = layers;
    this.auxiliaryLayers.forEach((layer) => !this.map.getLayer(layer.id) && this.map.addLayer(layer));
  };

  protected getDefaultIconSize(): mapboxgl.Expression {
    return Abstract.getZoomLinearExpression(this.baseIconSize);
  }

  protected getDefaultCircleRadius(): mapboxgl.Expression {
    return Abstract.getZoomLinearExpression(this.baseCircleSize);
  }

  protected getDefaultCircleStroke(): mapboxgl.Expression {
    return Abstract.getZoomLinearExpression(this.baseStrokeSize);
  }

  protected addSource = async (): ActionResponse => {
    const source = this.map.getSource(this.options.id);
    if (source) {
      return new Error();
    }
    if (this.options.sourceType === "tile") {
      this.map.addSource(this.options.id, {
        type: "vector",
        tiles: [this.options.tileUrl ?? ""],
      });
      this.emit(Types.Events.SourceCreate, this.layerEvent);
      return true;
    }

    this.map.addSource(this.options.id, {
      type: "geojson",
      data: this.data,
    });

    this.emit(Types.Events.SourceCreate, this.layerEvent);
    return true;
  };

  public setData = async (features: GeoJSON.Feature<G, P>[] = []): ActionResponse => {
    const source = this.map.getSource(this.options.id) as mapboxgl.GeoJSONSource;
    if (!source) return new Error();
    this.data = { ...this.data, features };
    source.setData(this.data);
    this.emit(Types.Events.DataUpdate, this.layerEvent);
    return true;
  };

  public setActiveId = (id: string) => {
    this.activeId = id;
    return this;
  };

  public setVisibility = async (isVisibility: boolean): ActionResponse => {
    this.visibility = isVisibility ? "visible" : "none";
    const layer = this.map.getLayer(this.options.id);
    if (!layer) return new Error();
    this.map.setLayoutProperty(this.options.id, "visibility", this.visibility);
    this.emit(Types.Events.VisibilityUpdate, this.layerEvent);
    return true;
  };

  public destroy = async (): ActionResponse => {
    if (this.map.getLayer(this.layer.id)) {
      this.map.removeLayer(this.layer.id);
    }

    this.auxiliaryLayers.forEach((layer) => this.map.getLayer(layer.id) && this.map.removeLayer(layer.id));

    if (this.map.getSource(this.options.id)) {
      this.map.removeSource(this.options.id);
    }

    return true;
  };
}
