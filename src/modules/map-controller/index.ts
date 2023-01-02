import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "pk.eyJ1Ijoiam9obmxldmlzMTk5IiwiYSI6ImNrMnU1cDZlejA1anMzY3Ftb3Q4aGt6cGMifQ._g3ScYO22xLKXXbuH_YXjQ";
/* eslint import/no-webpack-loader-syntax: off */
(mapboxgl as any).workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

export { MapController } from "./map-controller";
