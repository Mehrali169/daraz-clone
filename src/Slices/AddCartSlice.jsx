import { createSlice } from "@reduxjs/toolkit";

export const AddCartSlice = createSlice({
  name: "addcart",
  initialState: {
    addcart: [],
    totalPrice: 0,
    user: {
      phone: "",
      email: "",
      address: "",
      city: "",
    },
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.addcart.filter(
        (item) => item.id == newItem.id
      );

      if (existingItem.length === 0) {
        state.addcart = [...state.addcart, newItem];
      }
      state.totalPrice = state.addcart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    userDetails: (state, action) => {
      const { phone, email, address, city } = action.payload;
      state.user = { phone, email, address, city };
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const { addToCart, userDetails } = AddCartSlice.actions;
export default AddCartSlice.reducer;
