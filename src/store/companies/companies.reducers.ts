import { State } from "./companies.types";

export const setSelectedCompany = (state: State, selectedCompany: State["selectedCompany"]): State => ({
  ...state,
  selectedCompany,
});
