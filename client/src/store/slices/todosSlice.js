import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos } from "../thunks/fetchTodos";

const TodosSlice = createSlice({
  name: "todos",
  initialState: { data: null, isLoading: false, error: null },
  extraReducers(builder) {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });

    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const TodosReducer = TodosSlice.reducer;
