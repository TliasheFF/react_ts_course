import { FC, useState } from "react";
import { restaurants } from "../../../constants/mocks";
import { RestaurantTabs } from "../../restaurant-tabs/component";
import { Restaurant } from "../../restaurant/component";
import { TRestaurant } from "../../../constants/mocks-types";
import styles from "./styles.module.scss";

export const RestaurantPage: FC = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);

  const activeRestaurant: TRestaurant | undefined = restaurants.find((restaurant) => restaurant.id === activeRestaurantId);

  return (
    <div className={styles.root}>
      <RestaurantTabs restaurants={restaurants} onSelect={setActiveRestaurantId}></RestaurantTabs>
      {activeRestaurant && <Restaurant restaurant={activeRestaurant} className={styles.restaurant} key={activeRestaurant.id} />}
    </div>
  );
};
