import mapboxgl from "mapbox-gl";
import { TypedEmitter } from "tiny-typed-emitter";
import { env } from "env";
import { PointsLayer } from "./layers";
import { Geometry } from "./geometry";

export class MapController extends TypedEmitter {
  private map?: mapboxgl.Map;
  private layer?: PointsLayer;

  constructor(private readonly container: HTMLDivElement) {
    super();
    this.createMap();
    this.subscribe();
  }

  private createMap = () => {
    this.map = new mapboxgl.Map({
      container: this.container,
      attributionControl: false,
      style: env.REACT_APP_MAP_STYLE,
      zoom: 10,
      center: [37.618423, 55.751244],
      fadeDuration: 0,
      maxZoom: 19,
      maxPitch: 65,
      hash: true,
    });
  };

  private handleLoad = () => {
    if (!this.map) return;

    this.layer = new PointsLayer(this.map);
    const feature = Geometry.createPointFeature([37.616926, 55.709632]);
    const feature1 = Geometry.createPointFeature([37.603424, 55.67896]);
    const feature2 = Geometry.createPointFeature([37.696822, 55.776568]);
    const feature3 = Geometry.createPointFeature([37.49037, 55.804435]);
    this.layer.setData([feature, feature1, feature2, feature3]);
  };

  private subscribe = () => {
    this.map?.on("load", this.handleLoad);
  };

  private unsubscribe = () => {
    this.map?.off("load", this.handleLoad);
  };

  public readonly destroy = () => {
    this.unsubscribe();
  };
}
