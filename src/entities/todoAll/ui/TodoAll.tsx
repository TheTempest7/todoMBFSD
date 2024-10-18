import { ToDoList } from "shared/ui/ToDoList/ToDoList";
import { useAppSelector } from "shared/lib/hooks/storeHooks";
import { selectToDoAll } from "../model/selectors/ToDoAllSelectors";

interface ToDoAllProps {
  onListItemClickHandler: (id: string) => void;
}

export const TodoAll = ({ onListItemClickHandler }: ToDoAllProps) => {
  const taskLists = useAppSelector(selectToDoAll);
  return (
    <ToDoList
      taskList={taskLists}
      onListItemCheckboxHandler={onListItemClickHandler}
    />
  );
};
