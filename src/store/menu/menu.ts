import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  active: number;
}

const initialState: CounterState = {
  active: 0,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setActive: (state, { payload }: PayloadAction<number>) => {
      state.active = payload;
    },
  },
});
