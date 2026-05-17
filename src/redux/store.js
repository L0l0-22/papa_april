import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './slices/menuSlice';
import variantsReducer from './slices/variantsSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    variants: variantsReducer,
    cart: cartReducer,
  },
});
