import styles from "./styles.module.scss";
import { IRestaurant } from "../../constants/mocks-interface";
import { Menu } from "../menu/component";
import { Review } from "../review/component";

interface Props {
  restaurant: IRestaurant;
}

export const Restaurant = ({ restaurant }: Props) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.restaurant_name}>{restaurant.name}</h2>
      <Menu menu={restaurant.menu} />
      <Review reviews={restaurant.reviews} />
    </div>
  );
};
