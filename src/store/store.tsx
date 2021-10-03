import { memo } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider as ReduxProvider } from "react-redux";
import { MenuStore } from "./menu";
import { CompaniesStore } from "features";

export const store = configureStore({
  reducer: {
    menu: MenuStore.menuSlice.reducer,
    companies: CompaniesStore.slice.reducer
  },
});

export type GState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const Provider = memo(({ children }) => {
  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  );
});
