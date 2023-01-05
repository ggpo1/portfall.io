import { Company } from "types";

export type State = {
  collection: Company.Collection;
  selectedCompany: Company.Instance | null;
};
