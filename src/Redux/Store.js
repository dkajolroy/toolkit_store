import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice/CartSlice";
const store = configureStore({
  reducer: {
    productState: cartReducer,
  },
});

export default store;
