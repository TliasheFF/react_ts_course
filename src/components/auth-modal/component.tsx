import { FC, useReducer } from "react";
import styles from "./styles.module.scss";
import { Button } from "../button/component";
import { authorizedUser } from "../../constants/auth-user";
import { AuthAction, UserInitialValue } from "../../constants/auth_reducer_types";

const USER_INITIAL_VALUES: UserInitialValue = {
  fullName: "",
  mail: "",
};

const reducer = (state: UserInitialValue, { type, payload }: AuthAction): UserInitialValue => {
  switch (type) {
    case "setFullName":
      return {
        ...state,
        fullName: payload,
      };
    case "setMail":
      return {
        ...state,
        mail: payload,
      };

    default:
      return state;
  }
};

type Props = {
  onLogin: () => void;
  onClose: () => void;
};

export const AuthModal: FC<Props> = ({ onLogin, onClose }) => {
  const [form, dispatch] = useReducer(reducer, USER_INITIAL_VALUES);
  const { fullName, mail } = form;

  if (fullName.length > 0 && mail.length > 0) {
    authorizedUser.authorized = true;
    authorizedUser.fullName = fullName;
    authorizedUser.mail = mail;
  }

  return (
    <div className={styles.root}>
      <div className={styles.formField}>
        <label htmlFor="fullName">Your name:</label>
        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(event) => dispatch({ type: "setFullName", payload: event.target.value })}
        ></input>
      </div>

      <div className={styles.formField}>
        <label htmlFor="fullName">E-mail:</label>
        <input
          id="fullName"
          type="text"
          value={mail}
          onChange={(event) => dispatch({ type: "setMail", payload: event.target.value })}
        ></input>
      </div>

      <div className={styles.modalButtons}>
        <Button onClick={fullName.length && mail.length ? onLogin : () => {}} size="s">
          OK
        </Button>
        <Button onClick={onClose} size="s">
          Cancel
        </Button>
      </div>
    </div>
  );
};
