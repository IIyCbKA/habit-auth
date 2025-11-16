import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/domain/auth/slice";
import uiReduced from "@/core/ui/slice";

export const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReduced,
});
