import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { AppRootStateType } from "app/store/store";
import { AppDispatch } from "shared/types/storeTypes";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> =
  useSelector;
