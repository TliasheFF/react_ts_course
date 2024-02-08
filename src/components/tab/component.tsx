import { FC } from "react";
import { Button } from "../button/component";
import styles from "./styles.module.scss";
import { RootState } from "../../redux";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/reataurant/selectors";

type Props = {
  id: string;
  onClick: () => void;
};

export const Tab: FC<Props> = ({ id, onClick }) => {
  const restaurant = useSelector((state: RootState) => selectRestaurantById(state, id));

  return (
    <Button className={styles.tabsButton} size="l" onClick={onClick}>
      {restaurant.name}
    </Button>
  );
};
