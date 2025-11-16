import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import {
  loginUser,
  registerUser,
  emailConfirm,
  refreshAuth,
  logout,
  passwordResetConfirm,
  usernameUpdate,
} from "./thunks";
import { AuthState, CommonFulfilledResponse } from "./types";
import { SLICE_NAME } from "./constants";

const commonFulfilled = (
  state: AuthState,
  {
    payload: { user, accessToken, isAuthenticated },
  }: PayloadAction<CommonFulfilledResponse>,
) => {
  state.user = user;
  state.accessToken = accessToken;
  state.isAuth = isAuthenticated;
  state.status = "succeeded";
};

const commonLogout = (state: AuthState) => {
  state.user = null;
  state.accessToken = null;
  state.isAuth = false;
  state.status = "idle";
};

const authSlice = createSlice({
  name: SLICE_NAME,
  initialState: {
    user: null,
    accessToken: null,
    isAuth: false,
    status: "idle",
  } as AuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(usernameUpdate.fulfilled, (state, action) => {
        state.user = action.payload.user;
      });

    builder
      .addMatcher(
        isAnyOf(
          loginUser.fulfilled,
          registerUser.fulfilled,
          refreshAuth.fulfilled,
          emailConfirm.fulfilled,
          passwordResetConfirm.fulfilled,
        ),
        commonFulfilled,
      )
      .addMatcher(
        isAnyOf(refreshAuth.rejected, logout.fulfilled),
        commonLogout,
      );
  },
});

export default authSlice.reducer;
