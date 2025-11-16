import React from "react";
import styles from "./styles.module.css";
import baseStyles from "@/core/base.module.css";
import { DefaultAvatar } from "@/assets/icons";
import { useAppSelector } from "@/store/hooks";
import { selectEmail, selectUsername } from "@/domain/auth/selectors";
import classNames from "classnames";

export default function Header(): React.ReactElement {
  const username = useAppSelector(selectUsername);
  const email = useAppSelector(selectEmail);

  const usernameStyles = classNames(styles.username, baseStyles.truncateText);
  const emailStyles = classNames(styles.email, baseStyles.truncateText);

  return (
    <div className={styles.headerRoot}>
      <DefaultAvatar className={styles.avatar} />
      <div className={styles.description}>
        <span className={usernameStyles}>{username}</span>
        <span className={emailStyles}>{email}</span>
      </div>
    </div>
  );
}
