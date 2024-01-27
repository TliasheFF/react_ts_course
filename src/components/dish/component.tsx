import { useState } from "react";
import { IMenu } from "../../constants/mocks-interface";
import { Button } from "../button/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface Props {
  dish: IMenu;
  className?: string;
}

export const Dish = ({ dish, className }: Props) => {
  const [count, setCount] = useState(0);

  return (
    <div className={classNames(className)}>
      <div>
        <Button
          disabled={count === 0}
          className={styles.dashButton}
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          -
        </Button>
        {count}
        <Button
          disabled={count === 5}
          className={styles.dashButton}
          onClick={() => {
            if (count < 5) {
              setCount(count + 1);
            }
          }}
        >
          +
        </Button>
      </div>
      <div>
        {dish.name} - {dish.price}$
      </div>
    </div>
  );
};
