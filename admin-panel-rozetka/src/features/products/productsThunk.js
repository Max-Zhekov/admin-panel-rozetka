import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "https://689235a7447ff4f11fbf900b.mockapi.io/Products"
      );
      return response.data;
    } catch (err) {
      return rejectWithValue("Error loading products ");
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (productId, { rejectWithValue }) => {
    try {
      await axios.delete(
        `https://689235a7447ff4f11fbf900b.mockapi.io/Products/${productId}`
      );
      return productId;
    } catch (err) {
      return rejectWithValue("Error deleting product");
    }
  }
);
