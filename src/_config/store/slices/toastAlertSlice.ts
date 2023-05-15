import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { type RootState } from "..";

// Type for our state
export interface ToastAlertProps {
  isVisible: boolean;
}

// Initial state
const initialState: ToastAlertProps = {
  isVisible: false
};

// Actual Slice
export const toastAlertSlice = createSlice({
  name: "toastAlert",
  initialState,
  reducers: {
    // Action to set the authentication status
    onChangeToastAlert(_, { payload }: PayloadAction<ToastAlertProps>) {
      return payload;
    }
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth
      };
    }
  }
});

export const { onChangeToastAlert } = toastAlertSlice.actions;
export const toastAlert = toastAlertSlice.reducer;

export const selectToastAlert = (state: RootState): ToastAlertProps =>
  state.toastAlert;
