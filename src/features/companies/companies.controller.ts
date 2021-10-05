import mapboxgl from "mapbox-gl";
import { PointsLayer } from "shared";

const createFeature = <T = GeoJSON.GeoJsonProperties>(coordinates: number[]): GeoJSON.Feature<GeoJSON.Point, T> => ({
  type: "Feature",
  properties: {} as T,
  geometry: {
    type: "Point",
    coordinates,
  },
});

export class CompaniesController {
  private layer?: PointsLayer;

  constructor(private map: mapboxgl.Map) {
    this.subscribe();
  }

  private handleLoad = () => {
    this.layer = new PointsLayer(this.map);
    const feature = createFeature([37.616926, 55.709632]);
    const feature1 = createFeature([37.603424, 55.67896]);
    const feature2 = createFeature([37.696822, 55.776568]);
    const feature3 = createFeature([37.49037, 55.804435]);
    this.layer.setData([feature, feature1, feature2, feature3]);

  };

  private subscribe = () => {
    this.map.on("load", this.handleLoad);
  };

  private unsubscribe = () => {
    this.map.off("load", this.handleLoad);
  };

  public readonly destroy = () => {
    this.unsubscribe();
  };
}
