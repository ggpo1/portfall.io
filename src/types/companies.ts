import { Utils } from "./utils";

export namespace Company {
  export interface Project {
    id: string;
    title: string;
    fullTitle?: string;
    site: string;
  }
  export interface Instance extends Utils.Identified {
    isActive: boolean;
    title: string;
    type: string;
    description: string;
    scope: string;
    stack: string[];
    address: string;
    feature: GeoJSON.Feature<GeoJSON.Point>;
    projects: Project[];
    images?: string[];
    startDate?: string;
    endDate?: string;
    icon?: string;
    site?: string;
  }

  export class Collection extends Utils.Collection<Instance> {
    public readonly getFeatures = () => {
      return this.list.map((item) => item.feature);
    };

    public readonly getCurrent = () => {
      return this.list.find((company: Instance) => company.isActive);
    };
  }
}
