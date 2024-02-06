import { FC } from "react";
import { Dish } from "../dish/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface Props {
  menuIds: string[];
  className?: string;
}

export const Menu: FC<Props> = ({ menuIds, className }) => {
  return (
    <ul className={classNames(className)}>
      {menuIds.map((id) => (
        <li key={id}>
          <Dish className={styles.dishes} dishId={id} />
        </li>
      ))}
    </ul>
  );
};
