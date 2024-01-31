import { FC, useState } from "react";
import { TMenuItems } from "../../constants/mocks-types";
import { Button } from "../button/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface Props {
  dish: TMenuItems;
  className?: string;
}

export const Dish: FC<Props> = ({ dish, className }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={classNames(className)}>
      <div>
        <Button disabled={count === 0} className={styles.dishButton} onClick={() => setCount(count - 1)}>
          -
        </Button>
        {count}
        <Button disabled={count === 5} className={styles.dishButton} onClick={() => setCount(count + 1)}>
          +
        </Button>
      </div>
      <div>
        {dish.name} - {dish.price}$
      </div>
    </div>
  );
};
