import { useContext } from "react";
import { Context } from "./store.context";

export const useUiStore = () => useContext(Context).store;
