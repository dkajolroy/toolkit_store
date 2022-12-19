import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slice/CartSlice";
import ProductSlice from "./Slice/ProductSlice";
const store = configureStore({
  reducer: {
    productState: ProductSlice,
    cartState: cartSlice,
  },
});

export default store;
