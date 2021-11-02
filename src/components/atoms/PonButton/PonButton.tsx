import React from "react";
import styles from "src/components/atoms/PonButton/PonButton.module.css";

type Props = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const PonButton = ({ children, disabled, ...props }: Props) => (
  <button
    {...props}
    disabled={disabled}
    className={`${styles.button} ${disabled && styles.disabled}`}
  >
    {children}
  </button>
);
