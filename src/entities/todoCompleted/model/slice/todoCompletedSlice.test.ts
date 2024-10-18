import {
  todoCompletedActions,
  todoCompletedReducer,
  todoCompletedSlice,
  initialState,
} from "./todoCompletedSlice";

describe("todoAllSlice tests", () => {
  test("check slice initial state", () => {
    expect(todoCompletedSlice.getInitialState()).toEqual({ todos: [] });
  });

  const addedTodo = todoCompletedReducer(
    initialState,
    todoCompletedActions.addTodo({
      id: "id",
      checked: false,
      description: "description",
    }),
  );

  const deletedTasks = todoCompletedReducer(
    initialState,
    todoCompletedActions.deleteAllTodos(),
  );

  test("adding todo in slice", () => {
    expect(addedTodo.todos.length).toBeGreaterThan(0);
  });

  test("deleting all task", () => {
    expect(deletedTasks.todos.length).toEqual(0);
  });
});
