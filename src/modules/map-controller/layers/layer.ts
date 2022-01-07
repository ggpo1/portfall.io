export abstract class Layer<T extends mapboxgl.AnyLayer> {
  protected config: T | null = null;
  protected _isVisible = true;

  public get isVisible() {
    return this._isVisible;
  }

  public get isLayerInMap() {
    if (!this.config) return null;
    return this.map.getLayer(this.config?.id);
  }

  public get source() {
    if (!this.config) return null;
    return this.map.getSource(this.config?.id);
  }

  public get isSourceInMap() {
    return !!this.source;
  }

  constructor(protected map: mapboxgl.Map) {}

  protected createSource?: () => mapboxgl.AnySourceData;

  public readonly add = (beforeId?: string) => {
    if (!this.config) return;
    if (this.isLayerInMap) return;
    if (!this.isSourceInMap) {
      if (!this.createSource) return;
      const source = this.createSource();
      this.map.addSource(this.config.id, source);
    }
    this.map.addLayer(this.config, beforeId);
  };

  public readonly remove = () => {
    if (!this.config) return;
    if (this.isLayerInMap) {
      this.map.removeLayer(this.config.id);
    }
    if (this.isSourceInMap) {
      this.map.removeSource(this.config.id);
    }
  };

  public readonly setVisibility = (isVisibility: boolean) => {
    if (!this.config) return;
    this._isVisible = isVisibility;
    const visibility = isVisibility ? "visible" : "none";
    if (!this.isLayerInMap) return;
    this.map.setLayoutProperty(this.config?.id, "visibility", visibility);
  };

  protected readonly setConfig = (config: T) => {
    this.config = config;
  };
}
