import { FC, useState } from "react";
import { restaurants } from "../../../constants/mocks";
import { RestaurantTabs } from "../../restaurant-tabs/component";
import { Restaurant } from "../../restaurant/component";
import { TRestaurant } from "../../../constants/mocks-types";
import styles from "./styles.module.scss";

export const RestaurantPage: FC = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();

  const activeRestaurant: TRestaurant | undefined = restaurants.find((restaurant) => restaurant.id === activeRestaurantId);

  return (
    <div className={styles.root}>
      <RestaurantTabs restaurants={restaurants} onSelect={setActiveRestaurantId}></RestaurantTabs>
      {activeRestaurant && <Restaurant restaurant={activeRestaurant} />}
    </div>
  );
};
