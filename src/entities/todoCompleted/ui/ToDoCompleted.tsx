import { ToDoList } from "shared/ui/ToDoList/ToDoList";
import { useAppSelector } from "shared/lib/hooks/storeHooks";
import { selectToDoCompleted } from "../model/selectors/ToDoCompletedSelectors";

export const ToDoCompleted = () => {
  const taskLists = useAppSelector(selectToDoCompleted);
  return <ToDoList taskList={taskLists} />;
};
