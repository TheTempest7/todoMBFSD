import { ITodo } from "shared/types/storeTypes";

export const getCurrentCompletedItem = (taskList: ITodo[], id: string) => {
  const currentCompletedItem = taskList.filter((task) => task.id === id)[0];
  return { ...currentCompletedItem, checked: true };
};
