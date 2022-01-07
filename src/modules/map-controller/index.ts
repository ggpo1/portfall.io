import mapboxgl from "mapbox-gl";
import { env } from "env";

import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = env.REACT_APP_MAP_ACCESS;

export { MapController } from "./map-controller";
