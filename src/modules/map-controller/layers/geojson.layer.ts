import { Layer } from "./layer";

export class GeoJsonLayer<T extends mapboxgl.AnyLayer> extends Layer<T> {
  public get source() {
    if (!this.config) return null;
    return this.map.getSource(this.config?.id);
  }

  private get featureCollection() {
    return {
      type: "FeatureCollection" as const,
      features: [],
    };
  }

  protected createSource = (): mapboxgl.AnySourceData => {
    super.createSource?.();
    return {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [],
      },
    };
  };

  public setData = (features: GeoJSON.Feature<any, any>[] = []) => {
    const source = this.source as mapboxgl.GeoJSONSource;
    if (!source) return;
    source.setData({ ...this.featureCollection, features });
  };

  public clear = () => {
    const source = this.source as mapboxgl.GeoJSONSource;
    if (!source) return;
    source.setData(this.featureCollection);
  };
}
