import { ListItem } from "./ListItem/ListItem";
import { ITodo } from "../../types/storeTypes";

interface ToDoListProps {
  /* taskList - список дел */
  taskList: ITodo[];

  onListItemCheckboxHandler?: (id: string) => void;
}
export const ToDoList = ({
  taskList,
  onListItemCheckboxHandler = () => {},
}: ToDoListProps) => {
  return (
    <ul>
      {taskList.map((task) => {
        return (
          <ListItem
            onCheckboxClickHandler={onListItemCheckboxHandler}
            description={task.description}
            key={task.id}
            id={task.id}
            isChecked={task.checked}
          />
        );
      })}
    </ul>
  );
};
