import { Utils } from "./utils";

export namespace Company {
  export interface Project {
    id: string;
    title: string;
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
    startDate?: string;
    endDate?: string;
    icon?: string;
    site?: string;
  }

  export class Collection extends Utils.Collection<Instance> {
    public readonly getCurrent = () => {
      return this.list.find((company: Instance) => company.isActive);
    };
  }
}
