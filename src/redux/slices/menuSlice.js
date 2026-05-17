import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const MENU_API_URL = 'http://204.168.249.55/products/menu';

export const fetchMenu = createAsyncThunk(
  'menu/fetchMenu',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(MENU_API_URL);
      if (response.data.status === 1) {
        return response.data.data.categories;
      } else {
        return rejectWithValue(response.data.message || 'Failed to fetch menu');
      }
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message || 'An error occurred');
    }
  }
);

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default menuSlice.reducer;
