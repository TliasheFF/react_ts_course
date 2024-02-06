import { Header } from "../header/component";
import { Footer } from "../footer/component";
import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Layout: FC<Props> = ({ children, className }) => {
  return (
    <>
      <div className={styles.root}>
        <Header />
        <div className={classNames(className)}>{children}</div>
        <Footer />
      </div>
      <div id="modal-container" />
    </>
  );
};
