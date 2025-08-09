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

      const data = res?.data;

      if (data?.token) {
        localStorage.setItem("token", data.token);
      } else {
        return rejectWithValue("Неверное имя или пароль");
      }

      return data;
    } catch (error) {
      return rejectWithValue("Ошибка при авторизации");
    }
  }
);
