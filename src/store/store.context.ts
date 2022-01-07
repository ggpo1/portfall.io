import { createContext } from "react";

export class UiStore {}

const store = new UiStore();

export const initialValue = {
  store,
};

export const UiContext = createContext(initialValue);
