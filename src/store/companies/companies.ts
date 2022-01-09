import { createStore } from "effector";
import { Company } from "types";
import { companies } from "./companies.consts";
import { State } from "./companies.types";

const initialState: State = {
  collection: new Company.Collection(companies.reverse()),
};

export const store = createStore<State>(initialState);

// store.on(events.handleHandleIsActiveClick, reducers.setIsActive);
// store.on(events.handleHandleIsDisabledClick, reducers.setIsDisabled);
