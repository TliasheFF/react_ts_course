import styles from "./styles.module.scss";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { FC } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { selectRestaurantById } from "../../redux/entities/reataurant/selectors";

interface Props {
  restaurantId: string;
  className?: string;
}

export const Restaurant: FC<Props> = ({ restaurantId, className }) => {
  const restaurant = useSelector((state: RootState) => selectRestaurantById(state, restaurantId));

  return (
    <div className={classNames(styles.root, className)}>
      <h2 className={styles.restaurant_name}>{restaurant.name}</h2>
      <h3>Menu:</h3>
      <Menu className={styles.restaurant_menu} menuIds={restaurant.menu} />
      <h3>Reviews:</h3>
      <Reviews reviewsIds={restaurant.reviews} />
    </div>
  );
};
