import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { type RootState } from "..";
import { type ToastAlertProps } from "@/_types/Store/ToastAlert";

const initialState: ToastAlertProps = {
  isVisible: false,
  variant: "ghost",
  title: "",
  description: ""
};

export const toastAlertSlice = createSlice({
  name: "toastAlert",
  initialState,
  reducers: {
    onChangeToastAlert(state, { payload }: PayloadAction<ToastAlertProps>) {
      return { ...state, ...payload };
    },
    onResetToastAlert() {
      return initialState;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action
      };
    }
  }
});

export const { onChangeToastAlert, onResetToastAlert } =
  toastAlertSlice.actions;
export const toastAlert = toastAlertSlice.reducer;

export const selectToastAlert = (state: RootState): ToastAlertProps =>
  state.toastAlert;
