export namespace Geometry {
  export const createPointFeature = <T = GeoJSON.GeoJsonProperties>(
    coordinates: number[],
    properties?: T
  ): GeoJSON.Feature<GeoJSON.Point, T> => ({
    type: "Feature",
    properties: properties ?? ({} as T),
    geometry: {
      type: "Point",
      coordinates,
    },
  });
}
