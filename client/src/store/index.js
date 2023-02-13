import { configureStore } from "@reduxjs/toolkit";
import { UsersReducer } from "./slices/usersSlice";
import { TodosReducer } from "./slices/todosSlice";

export const store = configureStore({
  reducer: { users: UsersReducer, todos: TodosReducer },
});

export * from "./thunks/fetchUsers";
export * from "./thunks/fetchTodos";
