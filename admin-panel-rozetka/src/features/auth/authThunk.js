import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ name, password }, { rejectWithValue }) => {
    try {
      const res = await axios.post("http://fak.pp.ua:81/api/auth/login", {
        email: name,
        password: password,
      });
      if (res) return res;
      return rejectWithValue("Неверное имя или пароль");
    } catch (error) {
      return rejectWithValue("Ошибка при авторизации");
    }
  }
);
