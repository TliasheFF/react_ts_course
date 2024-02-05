import { FC, useContext, useReducer } from "react";
import styles from "./styles.module.scss";
import { InitialValues, ReviewFormAction } from "../../constants/restaurant-reducer-types";
import classNames from "classnames";
import { UserContext } from "../contexts/user";
import { AuthUser } from "../../constants/auth-user-types";

const INITIAL_VALUES: InitialValues = {
  text: "",
  rating: 0,
};

const reducer = (state: InitialValues, { type, payload }: ReviewFormAction): InitialValues => {
  switch (type) {
    case "setText":
      return {
        ...state,
        text: payload,
      };
    case "setRating":
      return {
        ...state,
        rating: payload,
      };

    default:
      return state;
  }
};

interface Props {
  className?: string;
}

export const ReviewForm: FC<Props> = ({ className }) => {
  const [form, dispatch] = useReducer(reducer, INITIAL_VALUES);
  const { user } = useContext<AuthUser>(UserContext);

  return (
    <div className={classNames(styles.root, className)}>
      <p>
        <span>Name:</span> {user}
      </p>
      <div className={styles.formField}>
        <label htmlFor="text">Text:</label>
        <input
          id="text"
          type="text"
          value={form.text}
          onChange={(event) => dispatch({ type: "setText", payload: event.target.value })}
        />
      </div>
      <div className={styles.formField}>
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          type="number"
          min={1}
          max={10}
          value={form.rating}
          onChange={(event) => dispatch({ type: "setRating", payload: Number(event.target.value) })}
        />
      </div>
    </div>
  );
};
