import { memo, useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl";
import * as Markdown from "./companies.styles";

import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "pk.eyJ1Ijoiam9obmxldmlzMTk5IiwiYSI6ImNrMnU1cDZlejA1anMzY3Ftb3Q4aGt6cGMifQ._g3ScYO22xLKXXbuH_YXjQ"

export const Companies = memo(() => {

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      attributionControl: false,
      style: "mapbox://styles/johnlevis199/cklrxut6v0y9h17ptjrr7pzq0",
      zoom: 10,
      center: [37.618423, 55.751244],
      fadeDuration: 0,
      maxZoom: 19,
    });
  }, []);

  return (
    <Markdown.Wrapper>
      <Markdown.Map id="map" />
      <Markdown.List />
    </Markdown.Wrapper>
  );
});