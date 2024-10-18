import store from "app/store/store";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface ITodo {
  id: string;
  description: string;
  checked: boolean;
}
