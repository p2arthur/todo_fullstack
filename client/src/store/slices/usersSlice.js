import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";

const UsersSlice = createSlice({
  name: "users",
  initialState: { data: [], isLoading: false, error: null },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data.push(action.payload);
    }),
      builder.addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = payload.error;
      });
  },
});

export const UsersReducer = UsersSlice.reducer;
