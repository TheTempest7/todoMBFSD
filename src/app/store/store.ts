import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoAllReducer } from "entities/todoAll";
import { todoCompletedReducer } from "entities/todoCompleted";
import { todoActiveReducer } from "entities/todoActive";

const rootReducer = combineReducers({
  todoAllList: todoAllReducer,
  todoActive: todoActiveReducer,
  todoCompleted: todoCompletedReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>;
export default store;
