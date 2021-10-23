import React, { HTMLAttributes, ReactNode } from "react";
import styles from "src/components/atom/PonButton/PonButton.module.css";

type Props = {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
} & HTMLAttributes<HTMLButtonElement>

export const PonButton = ({ children, ...props }: Props) => (
  <button {...props} className={styles.button}>
    {children}
  </button>
);
