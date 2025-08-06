import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ name, password }, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "https://689235a7447ff4f11fbf900b.mockapi.io/Admins"
      );
      const user = res.data.find(
        (u) => u.name === name && u.password === password
      );
      if (user) return user;
      return rejectWithValue("Неверное имя или пароль");
    } catch (error) {
      return rejectWithValue("Ошибка при авторизации");
    }
  }
);
