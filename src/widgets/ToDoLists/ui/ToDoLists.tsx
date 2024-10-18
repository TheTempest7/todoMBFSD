import { selectToDoAll, TodoAll, todoAllActions } from "entities/todoAll";
import { CurrentToDo } from "shared/lib/enums/CurrentToDo";
import { ToDoActive, todoActiveActions } from "entities/todoActive";
import { ToDoCompleted, todoCompletedActions } from "entities/todoCompleted";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks/storeHooks";
import { getCurrentCompletedItem } from "../lib/utils";

import s from "./ToDoLists.module.scss";

interface ToDoListsProps {
  /* currentList - какой именно ToDoList выбран к отображению*/
  currentList: CurrentToDo;
}
export const ToDoLists = ({ currentList }: ToDoListsProps) => {
  const dispatch = useAppDispatch();

  const taskToDoAllList = useAppSelector(selectToDoAll);

  const onActiveListItemHandler = (id: string) => {
    dispatch(todoActiveActions.removeTodo(id));
    dispatch(todoAllActions.setTodoItemCheckedByID(id));
    dispatch(
      todoCompletedActions.addTodo(
        getCurrentCompletedItem(taskToDoAllList, id),
      ),
    );
  };

  return (
    <div className={s.wrapper}>
      {currentList === CurrentToDo.All && (
        <TodoAll onListItemClickHandler={onActiveListItemHandler} />
      )}
      {currentList === CurrentToDo.ACTIVE && (
        <ToDoActive onListItemClickHandler={onActiveListItemHandler} />
      )}
      {currentList === CurrentToDo.COMPLETED && <ToDoCompleted />}
    </div>
  );
};
