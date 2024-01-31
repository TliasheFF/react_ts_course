import { FC } from "react";
import { TMenu } from "../../constants/mocks-types";
import { Dish } from "../dish/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface Props {
  menu: TMenu;
  className?: string;
}

export const Menu: FC<Props> = ({ menu, className }) => {
  return (
    <ul className={classNames(className)}>
      {menu.map((dish) => (
        <li key={dish.id}>
          <Dish className={styles.dishes} dish={dish} />
        </li>
      ))}
    </ul>
  );
};
