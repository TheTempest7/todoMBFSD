import { Button } from "shared/ui/Button/Button";

import { CurrentToDo } from "shared/lib/enums/CurrentToDo";
import { useAppSelector } from "shared/lib/hooks/storeHooks";
import { selectToDoActive } from "entities/todoActive";
import { ClearCompletedButton } from "features/todoCompleted";
import { memo } from "react";

import s from "./ToDoSwitcher.module.scss";
import classNames from "classnames";

interface ToDoSwitcherProps {
  /* currentList - какой именно ToDoList выбран к отображению*/
  currentList: CurrentToDo;

  /** taskListChanger - функиця переключения между отдельныит todo листами
   * @param val - новый тип todo листа  */
  taskListChanger: (val: CurrentToDo) => void;
}

export const ToDoSwitcher = memo(
  ({ currentList, taskListChanger }: ToDoSwitcherProps) => {
    const activeTasksAmount = useAppSelector(selectToDoActive).length;

    return (
      <div className={s.wrapper}>
        <div className={s.descriptionWrapper}>
          {!!activeTasksAmount && (
            <p>
              <span>{activeTasksAmount} </span>
              tasks left
            </p>
          )}
          {!activeTasksAmount && <p>All tasks are done</p>}
        </div>
        <div className={s.buttonsWrapper}>
          <Button
            onClickHandler={taskListChanger}
            childNode={CurrentToDo.All}
            className={classNames({
              [s.activeButton]: currentList === CurrentToDo.All,
            })}
          />

          <Button
            onClickHandler={taskListChanger}
            childNode={CurrentToDo.ACTIVE}
            className={classNames({
              [s.activeButton]: currentList === CurrentToDo.ACTIVE,
            })}
          />
          <Button
            onClickHandler={taskListChanger}
            childNode={CurrentToDo.COMPLETED}
            className={classNames({
              [s.activeButton]: currentList === CurrentToDo.COMPLETED,
            })}
          />
          <ClearCompletedButton />
        </div>
      </div>
    );
  },
);
