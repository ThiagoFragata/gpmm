import {
  configureStore,
  type Action,
  type EnhancedStore,
  type Store,
  type ThunkAction
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { toastAlert } from "./slices/toastAlertSlice";

const store = (): EnhancedStore =>
  configureStore({
    reducer: {
      toastAlert
    },
    devTools: true
  });

export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

export const wrapper = createWrapper<Store<RootState>>(store);
