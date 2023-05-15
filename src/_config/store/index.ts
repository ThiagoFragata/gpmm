import {
  configureStore,
  type ThunkAction,
  type Action,
  type EnhancedStore,
  type Store
} from "@reduxjs/toolkit";
import { toastAlert } from "./slices/toastAlertSlice";
import { createWrapper } from "next-redux-wrapper";

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

// export const wrapper = createWrapper<AppStore>(store);

export const wrapper = createWrapper<Store<RootState>>(store);
