import { Button } from "shared/ui/Button/Button";
import { useAppDispatch } from "shared/lib/hooks/storeHooks";
import { todoCompletedActions } from "entities/todoCompleted";
import { todoAllActions } from "entities/todoAll";

export const ClearCompletedButton = () => {
  const dispatch = useAppDispatch();

  const clearCompletedHandler = () => {
    dispatch(todoCompletedActions.deleteAllTodos());
    dispatch(todoAllActions.deleteCompletedTodos());
  };

  return (
    <Button
      onClickHandler={clearCompletedHandler}
      childNode={"Clear completed"}
    />
  );
};
