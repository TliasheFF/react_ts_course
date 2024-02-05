import { FC, useContext } from "react";
import { Button } from "../button/component";
import styles from "./styles.module.scss";
import { UserContext } from "../contexts/user";

export const LoginLogout: FC = () => {
  const { user, setUser, showModal, setShowModal } = useContext(UserContext);

  return (
    <div className={styles.root}>
      {!user && (
        <Button onClick={() => setShowModal(!showModal)} size="m">
          Login
        </Button>
      )}

      {user && (
        <div className={styles.logout}>
          <p className={styles.userName}>{user}</p>
          <Button onClick={() => setUser("")} size="m">
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};
