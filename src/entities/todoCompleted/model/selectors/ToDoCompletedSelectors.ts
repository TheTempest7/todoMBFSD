import { AppRootStateType } from "app/store/store";

export const selectToDoCompleted = (state: AppRootStateType) =>
  state.todoCompleted.todos;
