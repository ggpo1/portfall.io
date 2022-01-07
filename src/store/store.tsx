import { UiContext, initialValue } from "./store.context";

export const Store: React.FC = ({ children }) => {
  return (
    <UiContext.Provider value={initialValue}>{children}</UiContext.Provider>
  );
}
