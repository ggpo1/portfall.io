import mapboxgl from "mapbox-gl";
import { Abstract } from "./base-layer";

const LAYER_ID = "POINTS_LAYER";

export class PointsLayer extends Abstract<GeoJSON.Point, GeoJSON.GeoJsonProperties> {
  private config: mapboxgl.CircleLayer = {
    id: LAYER_ID,
    type: "circle",
    source: LAYER_ID,
    paint: {
      "circle-radius": 3,
      "circle-color": "#223b53",
      "circle-stroke-color": "white",
      "circle-stroke-width": 1,
      "circle-opacity": 0.5,
    },
  };

  constructor(map: mapboxgl.Map) {
    super(map, {
      id: LAYER_ID,
    });

    this.setLayer(this.config);
    this.addSource();
    this.addLayer();
  }
}
