import { FC, useReducer } from "react";
import styles from "./styles.module.scss";
import { Action, InitialValues } from "../../constants/restaurant-reducer-types";
import classNames from "classnames";

const INITIAL_VALUES: InitialValues = {
  name: "",
  text: "",
  rating: 0,
};

const reducer = (state: InitialValues, { type, payload }: Action): InitialValues => {
  switch (type) {
    case "setName":
      return {
        ...INITIAL_VALUES,
        name: payload,
      };
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

  console.log(form);

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.formField}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(event) => dispatch({ type: "setName", payload: event.target.value })}
        />
      </div>
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
