import { todoAllActions, todoAllReducer, todoAllSlice } from "./todoAllSlice";

describe("todoAllSlice tests", () => {
  test("check slice initial state", () => {
    expect(todoAllSlice.getInitialState()).toEqual({ todos: [] });
  });

  const addedTodo = todoAllReducer(
    {
      todos: [
        {
          id: "id-2",
          checked: false,
          description: "description-2",
        },
      ],
    },
    todoAllActions.addTodo({
      id: "id",
      checked: false,
      description: "description",
    }),
  );

  const settedCheckedKey = todoAllReducer(
    addedTodo,
    todoAllActions.setTodoItemCheckedByID("id"),
  );

  const deletedCompletedTasks = todoAllReducer(
    settedCheckedKey,
    todoAllActions.deleteCompletedTodos(),
  );

  test("adding todo in slice", () => {
    expect(addedTodo.todos.length).toBeGreaterThan(1);
  });

  test("setting checked key to true by task id", () => {
    expect(
      settedCheckedKey.todos.filter((task) => task.checked === false).length,
    ).toBe(addedTodo.todos.filter((task) => task.checked === false).length - 1);
  });

  test("is completed tasks were deleted", () => {
    expect(deletedCompletedTasks.todos.length).toBeLessThan(
      settedCheckedKey.todos.length,
    );
  });
});
