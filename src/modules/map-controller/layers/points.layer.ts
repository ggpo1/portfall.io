import mapboxgl from "mapbox-gl";
import { GeoJsonLayer } from "./geojson.layer";

const LAYER_ID = "POINTS_LAYER";
const SMALL_ZOOM_WIDTH_PATH = 7;
const MEDIUM_ZOOM_WIDTH_PATH = 9;
const BIG_ZOOM_WIDTH_PATH = 14;

export class PointsLayer extends GeoJsonLayer<mapboxgl.CircleLayer> {
  public config: mapboxgl.CircleLayer = {
    id: LAYER_ID,
    type: "circle",
    source: LAYER_ID,
    paint: {
      "circle-radius": this.radius,
      "circle-color": "#223b53",
      "circle-stroke-color": "#ffffff",
      "circle-stroke-width": 1,
      "circle-opacity": 0.5,
      "circle-pitch-alignment": "map",
    },
  };

  public get radius(): mapboxgl.Expression {
    return [
      "interpolate",
      ["exponential", 1.5],
      ["zoom"],
      5,
      SMALL_ZOOM_WIDTH_PATH,
      12,
      MEDIUM_ZOOM_WIDTH_PATH,
      18,
      BIG_ZOOM_WIDTH_PATH,
    ];
  }
  constructor(map: mapboxgl.Map) {
    super(map);

    this.setConfig(this.config);
    this.add();
  }
}
