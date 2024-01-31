import { FC } from "react";
import { TRestaurants } from "../../constants/mocks-types";
import { Restaurant } from "../restaurant/component";

interface Props {
  restaurants: TRestaurants;
}

export const Restaurants: FC<Props> = ({ restaurants }) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} key={restaurant.id} />
      ))}
    </div>
  );
};
