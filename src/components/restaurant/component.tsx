import styles from "./styles.module.scss";
import { TRestaurant } from "../../constants/mocks-types";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { FC } from "react";

interface Props {
  restaurant: TRestaurant;
}

export const Restaurant: FC<Props> = ({ restaurant }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.restaurant_name}>{restaurant.name}</h2>
      <h3>Меню:</h3>
      <Menu className={styles.restaurant_menu} menu={restaurant.menu} />
      <h3>Отзывы:</h3>
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
