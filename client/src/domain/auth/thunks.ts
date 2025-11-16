import {
  login as loginAPI,
  register as registerAPI,
  refresh as refreshAPI,
  logout as logoutAPI,
  emailConfirm as emailConfirmAPI,
  passwordResetRequest as passwordResetRequestAPI,
  passwordResetConfirm as passwordResetConfirmAPI,
  usernameUpdate as usernameUpdateAPI,
} from "./api";
import { createAppAsyncThunk } from "@/store/apiThunk";
import { SLICE_NAME } from "./constants";

export const loginUser = createAppAsyncThunk(`${SLICE_NAME}/login`, loginAPI);
export const registerUser = createAppAsyncThunk(
  `${SLICE_NAME}/register`,
  registerAPI,
);
export const emailConfirm = createAppAsyncThunk(
  `${SLICE_NAME}/email/confirm`,
  emailConfirmAPI,
);
export const refreshAuth = createAppAsyncThunk(
  `${SLICE_NAME}/refresh`,
  refreshAPI,
);
export const logout = createAppAsyncThunk(`${SLICE_NAME}/logout`, logoutAPI);
export const passwordResetRequest = createAppAsyncThunk(
  `${SLICE_NAME}/password/reset/request`,
  passwordResetRequestAPI,
);
export const passwordResetConfirm = createAppAsyncThunk(
  `${SLICE_NAME}/password/reset/confirm`,
  passwordResetConfirmAPI,
);
export const usernameUpdate = createAppAsyncThunk(
  `${SLICE_NAME}/username/update`,
  usernameUpdateAPI,
);
