import { ToDoList } from "shared/ui/ToDoList/ToDoList";
import { useAppSelector } from "shared/lib/hooks/storeHooks";
import { selectToDoActive } from "../model/selectors/ToDoActiveSelectors";

interface ToDoActiveProps {
  onListItemClickHandler: (id: string) => void;
}

export const ToDoActive = ({ onListItemClickHandler }: ToDoActiveProps) => {
  const taskLists = useAppSelector(selectToDoActive);
  return (
    <ToDoList
      onListItemCheckboxHandler={onListItemClickHandler}
      taskList={taskLists}
    />
  );
};
