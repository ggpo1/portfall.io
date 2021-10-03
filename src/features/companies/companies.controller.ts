import mapboxgl from "mapbox-gl";
import { PointsLayer } from "shared";

export class CompaniesController {
  private layer: PointsLayer;

  constructor(private map: mapboxgl.Map) {
    this.layer = new PointsLayer(this.map);
  }
}
