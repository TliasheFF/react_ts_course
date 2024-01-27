import { Header } from "../header/component";
import { Footer } from "../footer/component";
import { ReactNode } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface Props {
  children?: ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: Props) => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={classNames(className)}>{children}</div>
      <Footer />
    </div>
  );
};
