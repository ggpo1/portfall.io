import mapboxgl from "mapbox-gl";
import { TypedEmitter } from "tiny-typed-emitter";
import { Company } from "types";
import { PointsLayer } from "./layers";

const defaultCenter = [37.6129, 55.656] as [number, number];
const defaultZoom = 9;
const mapStyle = "mapbox://styles/johnlevis199/cklrxut6v0y9h17ptjrr7pzq0";

export class MapController extends TypedEmitter {
  private map?: mapboxgl.Map;
  private layer?: PointsLayer;
  private collection?: Company.Collection;

  constructor(private readonly container: HTMLDivElement) {
    super();
    this.createMap();
    this.subscribe();
  }

  private createMap = () => {
    this.map = new mapboxgl.Map({
      container: this.container,
      attributionControl: false,
      style: mapStyle,
      zoom: defaultZoom,
      center: defaultCenter,
      fadeDuration: 0,
      maxZoom: 19,
      maxPitch: 65,
      hash: true,
      antialias: true,
    });
  };

  private handleLoad = () => {
    if (!this.map) return;

    this.layer = new PointsLayer(this.map);
    const features = this.collection?.getFeatures();
    // const feature = Geometry.createPointFeature([37.616926, 55.709632]);
    // const feature1 = Geometry.createPointFeature([37.603424, 55.67896]);
    // const feature2 = Geometry.createPointFeature([37.696822, 55.776568]);
    // const feature3 = Geometry.createPointFeature([37.49037, 55.804435]);
    this.layer.setData(features);
  };

  private handleBoundsUpdate = (e: mapboxgl.MapMouseEvent) => {
    if (!this.map) return;
    console.log(e);
    const bounds = this.map.getBounds();
    const box: [mapboxgl.Point, mapboxgl.Point] = [
      this.map.project(bounds.getNorthWest()),
      this.map.project(bounds.getSouthEast()),
    ];

    const viewFeatures = this.map.queryRenderedFeatures(box, {
      layers: ["POINTS_LAYER"],
    });

    console.log(viewFeatures);
  };

  private subscribe = () => {
    this.map?.on("load", this.handleLoad);
    this.map?.on("zoomend", this.handleBoundsUpdate);
    this.map?.on("dragend", this.handleBoundsUpdate);
  };

  private unsubscribe = () => {
    this.map?.off("load", this.handleLoad);
    this.map?.off("zoomend", this.handleBoundsUpdate);
    this.map?.off("dragend", this.handleBoundsUpdate);
  };

  public readonly setCollection = (collection: Company.Collection) => {
    this.collection = collection;
  };

  public readonly focusOn = (id: number) => {
    const focusElement = this.collection?.findById(id);

    if (!focusElement) return;

    this.map?.flyTo({
      animate: true,
      zoom: 16,
      duration: 1000,
      center: focusElement.feature.geometry.coordinates as [number, number],
      offset: [0, -200],
    });
  };

  public readonly unFocus = () => {
    this.map?.flyTo({
      animate: true,
      duration: 1000,
      zoom: defaultZoom,
      center: defaultCenter,
    });
  };

  public readonly destroy = () => {
    this.unsubscribe();
  };
}
