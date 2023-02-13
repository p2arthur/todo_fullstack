import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userEmail = "p2arthur@gmail.com";

export const fetchTodos = createAsyncThunk("todos/fetch", async () => {
  try {
    const response = await axios.get(
      `http://localhost:8000/todos/${userEmail}`
    );

    await pauseHelper(5000);

    return response.data;
  } catch (error) {}
});

const pauseHelper = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
