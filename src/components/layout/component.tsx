import { Header } from "../header/component";
import { Footer } from "../footer/component";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.root}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
