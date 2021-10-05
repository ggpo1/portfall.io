import { memo } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider as ReduxProvider } from "react-redux";
import { CompaniesSlice } from "./companies";

export const store = configureStore({
  reducer: {
    companies: CompaniesSlice.reducer
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
