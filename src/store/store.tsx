import { Context, initialValue } from "./store.context";

export const Store: React.FC = ({ children }) => {
  return (
    <Context.Provider value={initialValue}>{children}</Context.Provider>
  );
}
