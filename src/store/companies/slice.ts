import { createSlice } from "@reduxjs/toolkit";
import { companies } from "assets";

export interface State {
  collection: any[]; // @todo add model
}

const initialState: State = {
  collection: companies
};

export const slice = createSlice({
  name: "companiesSlice",
  initialState,
  reducers: {},
});
