import { createStore } from "effector";
import { Company } from "types";
import { initialState } from "./companies.consts";
import { State } from "./companies.types";

export const store = createStore<State>({ companies: new Company.Collection(initialState) });
