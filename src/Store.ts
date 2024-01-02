import { configureStore } from "@reduxjs/toolkit";
import SettingsReducer from "./reducers/Settings";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { Root } from "postcss";

export const store = configureStore({
  reducer: {
    settings: SettingsReducer,
  },
});

export default store;

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
