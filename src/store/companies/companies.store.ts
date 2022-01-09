import { Utils } from "types";
import { store } from "./companies";
import { Hooks, hooks } from "./companies.hooks";
import { State } from "./companies.types";

export class Store implements Utils.IStore<State, any, Hooks> {
  public readonly store = store;
  public readonly events = {};
  public readonly hooks = hooks;

  public readonly destroy = () => {
    console.log("Not implemented yet");
  };
}

export const companiesStore = new Store();
