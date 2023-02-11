import { configureStore } from "@reduxjs/toolkit";
import { UsersReducer } from "./slices/usersSlice";

export const store = configureStore({ reducer: { users: UsersReducer } });

export * from "./thunks/fetchUsers";
