import { RootState } from "@/store/store";
import { NotificationData } from "./types";

export const selectNotifications = (state: RootState): NotificationData[] =>
  state.ui.notifications;
