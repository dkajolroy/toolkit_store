import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: () => {
      console.log("Add Success");
    },
    removeFromCart: () => {
      console.log("Remove Success");
    },
  },
});

export default cartSlice.reducer;
