import { TRestaurants } from "../../constants/mocks-interface";
import { Restaurant } from "../restaurant/component";

interface Props {
  restaurants: TRestaurants;
  activeTab: string | number;
  className: {
    tabActive: string;
    tabDefault: string;
  };
}

export const Restaurants = ({ restaurants, activeTab, className }: Props) => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant className={className} activeTab={activeTab} restaurant={restaurant} key={restaurant.id} />
      ))}
    </div>
  );
};
