import { createSlice } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
  editProduct,
  fetchProducts,
} from "./productsThunk";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
    needReload: false,
    rejected: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        (state.loading = true), (state.error = null);
        state.needReload = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.needReload = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        if (action.payload === 401) {
          state.rejected = true;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.needReload = true;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        if (action.payload === 401) {
          state.rejected = true;
        }
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items = [];
        state.needReload = true;
      })
      .addCase(addProduct.rejected, (state, action) => {
        if (action.payload === 401) {
          state.rejected = true;
        }
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.needReload = true;
      })
      .addCase(editProduct.rejected, (state, action) => {
        if (action.payload === 401) {
          state.rejected = true;
        }
      });
  },
});

export default productsSlice.reducer;
