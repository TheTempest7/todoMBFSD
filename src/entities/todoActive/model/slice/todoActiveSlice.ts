import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "shared/types/storeTypes";
interface todoActiveState {
  todos: ITodo[];
}

export const initialState: todoActiveState = {
  todos: [],
};

export const todoActiveSlice = createSlice({
  name: "todoActive",
  initialState: initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodo>) {
      state.todos.unshift(action.payload);
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((task) => task.id !== action.payload);
    },
  },
});

export const todoActiveReducer = todoActiveSlice.reducer;
export const todoActiveActions = todoActiveSlice.actions;
