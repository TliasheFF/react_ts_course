import { FC, useState } from "react";
import { RestaurantTabs } from "../../restaurant-tabs/component";
import styles from "./styles.module.scss";
import { Restaurant } from "../../restaurant/component";

export const RestaurantPage: FC = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState<string | undefined>();

  return (
    <div className={styles.root}>
      <RestaurantTabs onSelect={setActiveRestaurantId}></RestaurantTabs>
      {activeRestaurantId && (
        <Restaurant restaurantId={activeRestaurantId} className={styles.restaurant} key={activeRestaurantId} />
      )}
    </div>
  );
};
