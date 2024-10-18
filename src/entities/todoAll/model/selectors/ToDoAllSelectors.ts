import { AppRootStateType } from "app/store/store";

export const selectToDoAll = (state: AppRootStateType) =>
  state.todoAllList.todos;
