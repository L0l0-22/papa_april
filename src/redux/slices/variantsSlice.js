import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchVariants = createAsyncThunk(
  'variants/fetchVariants',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://204.168.249.55/products/variants/${productId}`);
      if (response.data.status === 1) {
        return response.data.data;
      }
      return rejectWithValue(response.data.message || 'Failed to fetch variants');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const variantsSlice = createSlice({
  name: 'variants',
  initialState: {
    productData: null,
    loading: false,
    error: null,
  },
  reducers: {
    resetVariants: (state) => {
      state.productData = null;
      state.error = null;
      state.loading = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVariants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVariants.fulfilled, (state, action) => {
        state.loading = false;
        state.productData = action.payload;
      })
      .addCase(fetchVariants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetVariants } = variantsSlice.actions;
export default variantsSlice.reducer;
