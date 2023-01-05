import { Utils } from "types";
import { store } from "./companies";
import { Hooks, hooks } from "./companies.hooks";
import { Events, events } from "./companies.events";
import { State } from "./companies.types";

export class Store implements Utils.IStore<State, Events, Hooks> {
  public readonly store = store;
  public readonly events = events;
  public readonly hooks = hooks;

  public readonly destroy = () => {
    console.log("Not implemented yet");
  };
}

export const companiesStore = new Store();
