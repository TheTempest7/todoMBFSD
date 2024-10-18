import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "shared/types/storeTypes";

interface todolistState {
  todos: ITodo[];
}

export const initialState: todolistState = {
  todos: [],
};

export const todoAllSlice = createSlice({
  name: "todoAll",
  initialState: initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodo>) {
      state.todos.unshift(action.payload);
    },
    setTodoItemCheckedByID(state, action: PayloadAction<string>) {
      state.todos = state.todos.map((task) => ({
        ...task,
        checked: task.id === action.payload ? true : task.checked,
      }));
    },
    deleteCompletedTodos(state) {
      state.todos = state.todos.filter((task) => task.checked === false);
    },
  },
});

export const todoAllReducer = todoAllSlice.reducer;
export const todoAllActions = todoAllSlice.actions;
