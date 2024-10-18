import { AppRootStateType } from "app/store/store";

export const selectToDoActive = (state: AppRootStateType) =>
  state.todoActive.todos;
