import {
  todoActiveActions,
  todoActiveReducer,
  initialState,
  todoActiveSlice,
} from "./todoActiveSlice";

describe("ActiveSlice tests", () => {
  test("check slice initial state", () => {
    expect(todoActiveSlice.getInitialState()).toEqual({ todos: [] });
  });

  const addedTodo = todoActiveReducer(
    initialState,
    todoActiveActions.addTodo({
      id: "id",
      checked: false,
      description: "description",
    }),
  );

  test("adding todo in slice", () => {
    expect(addedTodo.todos.length).toBeGreaterThan(0);
  });

  test("remove todo with no expected id", () => {
    const removedTodo = todoActiveReducer(
      addedTodo,
      todoActiveActions.removeTodo("id-1"),
    );
    expect(removedTodo.todos.length).toBe(addedTodo.todos.length);
  });

  test("remove todo with expected id", () => {
    const removedTodo = todoActiveReducer(
      addedTodo,
      todoActiveActions.removeTodo("id"),
    );
    expect(removedTodo.todos.length).toBe(0);
  });
});
