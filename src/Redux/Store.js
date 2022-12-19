import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Store";

const store = configureStore({
  reducer: {
    product: cartSlice,
  },
});

export default store;
