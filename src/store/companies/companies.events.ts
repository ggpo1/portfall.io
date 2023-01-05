import * as effector from "effector";
import { State } from "./companies.types";

export const events = {
  setSelectedCompany: effector.createEvent<State["selectedCompany"]>(),
};

export type Events = typeof events;
