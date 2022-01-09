import { createContext } from "react";
import { CompaniesStore, companiesStore } from "./companies";

type Stores = {
  companies: CompaniesStore;
};

export class UiStore {
  private readonly stores: Stores = {
    companies: companiesStore,
  };

  public get companies() {
    return this.get("companies");
  }

  public readonly get = (storeName: keyof Stores) => {
    return this.stores[storeName];
  };

  public readonly destroy = () => {
    Object.values(this.stores).forEach((store) => store.destroy?.());
  };
}

export const initialValue = {
  store: new UiStore(),
};

export const Context = createContext(initialValue);
