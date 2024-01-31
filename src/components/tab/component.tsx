import { FC } from "react";
import { Button } from "../button/component";
import styles from "./styles.module.scss";

type Props = {
  title: string;
  onClick: () => void;
};

export const Tab: FC<Props> = ({ title, onClick }) => {
  return (
    <Button className={styles.tabsButton} size="l" onClick={onClick}>
      {title}
    </Button>
  );
};
