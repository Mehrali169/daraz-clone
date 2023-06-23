import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { postApi } from "../sevices/Api";
import { AddCartSlice } from "../Slices/AddCartSlice";
export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    addToCart: AddCartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

setupListeners(store.dispatch);
