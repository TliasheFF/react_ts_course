import { FC } from "react";
import { TRestaurants } from "../../constants/mocks-types";
import { Tab } from "../tab/component";
import styles from "./styles.module.scss";

type Props = {
  restaurants: TRestaurants;
  onSelect: (value: string) => void;
};

export const RestaurantTabs: FC<Props> = ({ restaurants, onSelect }) => {
  console.log(onSelect);

  return (
    <div className={styles.root}>
      {restaurants.map((restaurant) => (
        <Tab key={restaurant.id} title={restaurant.name} onClick={() => onSelect(restaurant.id)} />
      ))}
    </div>
  );
};
