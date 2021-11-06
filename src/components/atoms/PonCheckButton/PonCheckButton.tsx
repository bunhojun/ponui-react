import React from "react";
import styles from "./PonCheckButton.module.css";

type Props = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "value" // omit "value" since TypeScript fails to suggest the correct type for "value" prop
> & {
  label?: string;
  id: string;
  value: string;
  checked: boolean;
};

export const PonCheckButton = (props: Props) => {
  const { label, id } = props;
  return (
    <>
      <input {...props} type="checkbox" className={styles.ponCheckButton} />
      {label && <label htmlFor={id}>{label}</label>}
    </>
  );
};
