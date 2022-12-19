import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});
export default cartSlice.reducer;
