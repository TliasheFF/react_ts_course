import { FC } from "react";
import styles from "./styles.module.scss";
import { LoginLogout } from "../login-logout/component";

export const Header: FC = () => {
  return (
    <header className={styles.root}>
      This is header
      <LoginLogout />
    </header>
  );
};
