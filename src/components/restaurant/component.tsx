import styles from "./styles.module.scss";
import { IRestaurant } from "../../constants/mocks-interface";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import classNames from "classnames";

interface Props {
  restaurant: IRestaurant;
  activeTab: string | number;
  className: {
    tabActive: string;
    tabDefault: string;
  };
}

export const Restaurant = ({ restaurant, activeTab, className }: Props) => {
  return (
    <div className={classNames(styles.root, activeTab === restaurant.id ? className.tabActive : className.tabDefault)}>
      <h2 className={styles.restaurant_name}>{restaurant.name}</h2>
      <h3>Меню:</h3>
      <Menu className={styles.restaurant_menu} menu={restaurant.menu} />
      <h3>Отзывы:</h3>
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
