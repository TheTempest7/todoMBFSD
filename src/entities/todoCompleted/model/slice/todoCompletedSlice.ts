import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "shared/types/storeTypes";
interface todolistState {
  todos: ITodo[];
}

export const initialState: todolistState = {
  todos: [],
};

export const todoCompletedSlice = createSlice({
  name: "todoCompleted",
  initialState: initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodo>) {
      state.todos.unshift(action.payload);
    },
    deleteAllTodos(state) {
      state.todos = [];
    },
  },
});

export const todoCompletedReducer = todoCompletedSlice.reducer;
export const todoCompletedActions = todoCompletedSlice.actions;
