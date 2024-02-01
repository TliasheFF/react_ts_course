import styles from "./styles.module.scss";
import { TRestaurant } from "../../constants/mocks-types";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { FC } from "react";
import classNames from "classnames";

interface Props {
  restaurant: TRestaurant;
  className?: string;
}

export const Restaurant: FC<Props> = ({ restaurant, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h2 className={styles.restaurant_name}>{restaurant.name}</h2>
      <h3>Меню:</h3>
      <Menu className={styles.restaurant_menu} menu={restaurant.menu} />
      <h3>Отзывы:</h3>
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
