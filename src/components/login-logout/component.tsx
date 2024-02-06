import { FC, useContext, useState } from "react";
import { Button } from "../button/component";
import styles from "./styles.module.scss";
import { UserContext } from "../contexts/user";
import { Modal } from "../modal/component";

export const LoginLogout: FC = () => {
  const { user, setUser } = useContext(UserContext);
  const [showModal, setShowModal] = useState<boolean>(false);

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

      <Modal state={showModal} setState={setShowModal} />
    </div>
  );
};
