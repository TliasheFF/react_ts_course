import { TMenu } from "../../constants/mocks-interface";
import { Dish } from "../dish/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface Props {
  menu: TMenu;
  className?: string;
}

export const Menu = ({ menu, className }: Props) => {
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
