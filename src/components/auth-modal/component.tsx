import { FC, useReducer } from "react";
import styles from "./styles.module.scss";
import { Button } from "../button/component";
import { AuthAction, UserInitialValue } from "../../constants/auth_reducer_types";
import { AuthUser } from "../../constants/auth-user";

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
  onLogin: (authUser: AuthUser) => void;
  onClose: () => void;
};

export const AuthModal: FC<Props> = ({ onLogin, onClose }) => {
  const [form, dispatch] = useReducer(reducer, USER_INITIAL_VALUES);
  const { fullName, mail } = form;

  return (
    <div className={styles.modal}>
      <div className={styles.modal__window}>
        <div className={styles.formField}>
          <label htmlFor="fullName">Login (name):</label>
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
          <Button
            onClick={() => {
              fullName ? onLogin(form) : alert("Enter your name");
            }}
            size="m"
          >
            OK
          </Button>
          <Button onClick={onClose} size="m">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};
