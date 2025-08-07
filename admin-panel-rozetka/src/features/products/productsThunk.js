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
