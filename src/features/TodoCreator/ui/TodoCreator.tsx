import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { TextInput } from "shared/ui/TextInput/TextInput";
import { useAppDispatch } from "shared/lib/hooks/storeHooks";
import { CurrentToDo } from "shared/lib/enums/CurrentToDo";

import s from "./TodoCreator.module.scss";
import { createNewTaskHandler } from "../lib/utils";

interface TodoCreatorProps {
  /* currentList - какой именно ToDoList выбран к отображению*/
  currentList: CurrentToDo;

  /** taskListChanger - функиця переключения между отдельныит todo листами
   * @param val - новый тип todo листа  */
  taskListChanger: (val: CurrentToDo) => void;
}

export const TodoCreator = ({
  currentList,
  taskListChanger,
}: TodoCreatorProps) => {
  const dispatch = useAppDispatch();

  const [currentTaskValue, setCurrentTaskValue] = useState("");

  const onCurrentTaskValueChange = (val: string) => {
    if (val.length < 100) {
      setCurrentTaskValue(val);
    }
  };

  const onTaskSubmit = useCallback(() => {
    createNewTaskHandler({
      currentTaskValue,
      id: uuidv4(),
      setCurrentTaskValue,
      dispatch,
      currentList,
      taskListChanger,
    });
  }, [
    currentTaskValue,
    setCurrentTaskValue,
    dispatch,
    currentList,
    taskListChanger,
  ]);

  const onEnterTaskSubmit = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === "Enter") {
        onTaskSubmit();
      }
    },
    [onTaskSubmit],
  );

  useEffect(() => {
    window.addEventListener("keypress", onEnterTaskSubmit);

    return () => window.removeEventListener("keypress", onEnterTaskSubmit);
  }, [currentTaskValue, onEnterTaskSubmit]);

  return (
    <TextInput
      className={s.wrapper}
      value={currentTaskValue}
      onValueChange={onCurrentTaskValueChange}
      onAdornmentClick={onTaskSubmit}
    />
  );
};
