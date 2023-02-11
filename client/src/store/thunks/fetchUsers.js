import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  try {
    const response = await axios.get("http://localhost:8000/users");

    await pauseHelper(5000);

    return response.data;
  } catch (error) {}
});

const pauseHelper = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
