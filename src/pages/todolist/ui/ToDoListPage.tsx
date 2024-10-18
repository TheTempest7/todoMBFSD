import { TodoCreator } from "features/TodoCreator";
import { ToDoLists } from "widgets/ToDoLists";
import { ToDoSwitcher } from "widgets/ToDoSwitcher";
import { useState } from "react";
import { CurrentToDo } from "shared/lib/enums/CurrentToDo";

import s from "./ToDoListPage.module.scss";

export const ToDoListPage = () => {
  const [currentList, setCurrentList] = useState<CurrentToDo>(CurrentToDo.All);

  const taskListChanger = (val: CurrentToDo) => {
    setCurrentList(val);
  };

  return (
    <div className={s.wrapper}>
      <h1>todos</h1>
      <TodoCreator
        taskListChanger={taskListChanger}
        currentList={currentList}
      />
      <ToDoLists currentList={currentList} />
      <ToDoSwitcher
        taskListChanger={taskListChanger}
        currentList={currentList}
      />
    </div>
  );
};
