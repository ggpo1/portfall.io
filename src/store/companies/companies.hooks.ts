import { useStore } from "effector-react";
import { store } from "./companies";

export const hooks = {
  useFull: () => useStore(store).collection,
  useCurrent: () => useStore(store).collection.getCurrent(),
  useList: () => useStore(store).collection.list,
  useSelectedCompany: () => useStore(store).selectedCompany,
};

export type Hooks = typeof hooks;
