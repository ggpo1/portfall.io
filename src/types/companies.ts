import { Utils } from "./utils";

export namespace Company {
  export interface Instance extends Utils.Identified {
    isActive: boolean;
    title: string;
    description: string;
    scope: string;
    stack: string[];
    address: string;
    feature: GeoJSON.Feature<GeoJSON.Point>;
  }

  export class Collection extends Utils.Collection<Instance> {
    public readonly getCurrent = () => {
      return this.list.find((company: Instance) => company.isActive);
    };
  }
}
