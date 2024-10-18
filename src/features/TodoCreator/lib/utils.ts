import { todoAllActions } from "entities/todoAll";
import { todoActiveActions } from "entities/todoActive";
import { CurrentToDo } from "shared/lib/enums/CurrentToDo";
import { Dispatch } from "@reduxjs/toolkit";
import React from "react";

interface ICreateNewTaskHandler {
  currentTaskValue: string;
  id: string;
  setCurrentTaskValue: React.Dispatch<React.SetStateAction<string>>;
  dispatch: Dispatch;
  currentList: CurrentToDo;
  taskListChanger: (val: CurrentToDo) => void;
}

export const createNewTaskHandler = ({
  currentTaskValue,
  id,
  setCurrentTaskValue,
  dispatch,
  currentList,
  taskListChanger,
}: ICreateNewTaskHandler) => {
  if (currentTaskValue !== "") {
    const currentTodoTaskInfo = {
      description: currentTaskValue,
      id,
      checked: false,
    };

    setCurrentTaskValue("");

    dispatch(todoAllActions.addTodo(currentTodoTaskInfo));
    dispatch(todoActiveActions.addTodo(currentTodoTaskInfo));

    if (currentList !== CurrentToDo.ACTIVE) {
      taskListChanger(CurrentToDo.ACTIVE);
    }
  }
};
