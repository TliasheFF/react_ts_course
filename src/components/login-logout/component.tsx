import { FC, useContext } from "react";
import { Button } from "../button/component";
import { ModalContext } from "../contexts/modal";
import styles from "./styles.module.scss";
import { UserContext } from "../contexts/user";
import { USER_INITIAL_STATE } from "../../constants/auth-user";

export const LoginLogout: FC = () => {
  const { showModal, setShowModal, setUser } = useContext(ModalContext);
  const { fullName } = useContext(UserContext);

  return (
    <div className={styles.root}>
      {!fullName && (
        <Button onClick={() => setShowModal(!showModal)} size="m">
          Login
        </Button>
      )}

      {fullName && (
        <div className={styles.logout}>
          <p className={styles.userName}>{fullName}</p>
          <Button onClick={() => setUser(USER_INITIAL_STATE)} size="m">
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};
