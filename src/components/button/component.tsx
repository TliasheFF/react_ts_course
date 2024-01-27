import { ReactNode } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Size } from "../../constants/sizes";

interface Props {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  size?: string;
}

export const Button = ({ onClick, children, className, disabled, size = Size.m }: Props) => {
  return (
    <button disabled={disabled} onClick={onClick} className={classNames(styles.root, className, styles[size])}>
      {children}
    </button>
  );
};
