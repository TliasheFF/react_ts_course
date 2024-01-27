import { TRestaurants } from "../../constants/mocks-interface";
import { Restaurants } from "../restaurants/component";
import styles from "./styles.module.scss";

interface Props {
  restaurants: TRestaurants;
  activeTab: string | number;
}

export const Tab = ({ restaurants, activeTab }: Props) => {
  const className = {
    tabActive: styles.tabActive,
    tabDefault: styles.tabDefault,
  };

  return (
    <div>
      <Restaurants className={className} activeTab={activeTab} restaurants={restaurants} />
    </div>
  );
};
