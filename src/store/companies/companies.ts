import { createStore } from "effector";
import { Company } from "types";
import { events } from "./companies.events";
import * as reducers from "./companies.reducers";
import { companies } from "./companies.consts";
import { State } from "./companies.types";

const initialState: State = {
  collection: new Company.Collection(companies.reverse()),
  selectedCompany: null,
};

export const store = createStore<State>(initialState);

store.on(events.setSelectedCompany, reducers.setSelectedCompany);
