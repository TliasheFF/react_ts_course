import { useState } from "react";
import { TRestaurants } from "../../constants/mocks-interface";
import { Button } from "../button/component";
import styles from "./styles.module.scss";
import { Tab } from "../tab/component";

interface Props {
  restaurants: TRestaurants;
}

export const Tabs = ({ restaurants }: Props) => {
  const [activeTab, setActiveTab] = useState(restaurants[0].id);

  return (
    <div className={styles.root}>
      <div>
        {restaurants.map((restaurant) => (
          <Button className={styles.tabsButton} size="l" onClick={() => setActiveTab(restaurant.id)} key={restaurant.id}>
            {restaurant.name}
          </Button>
        ))}
      </div>
      <div>
        <Tab restaurants={restaurants} activeTab={activeTab} />
      </div>
    </div>
  );
};
