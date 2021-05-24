import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setCart: (state, action) => {
      if (!state.cart.find((item) => item.id === action.payload.id)) {
        state.cart.push({ ...action.payload, quantity: 1 });
      } else {
        state.cart.forEach((item) => {
          if (item.id === action.payload.id) {
            item.quantity = item.quantity + 1;
          }
        });
      }
    },
  },
});

export const { setCart } = cartSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCarter = (state) => state.cart.cart;

export default cartSlice.reducer;
