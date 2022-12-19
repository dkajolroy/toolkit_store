import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice/CartSlice";
const store = configureStore({
  reducer: {
    product: cartReducer,
  },
});

export default store;
