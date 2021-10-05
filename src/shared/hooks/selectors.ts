import { useSelector } from "react-redux";
import { Store } from "store";

export const useCompanies = () =>
  useSelector((state: Store.GState) => {
    return state.companies.collection;
  });

export const useCurrentCompany = () =>
  useSelector((state: Store.GState) => {
    return state.companies.collection.find((company) => company.isActive);
  });
