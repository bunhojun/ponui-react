import React, { HTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
} & HTMLAttributes<HTMLButtonElement>

export const PonButton = ({ children, ...props }: Props) => (
  <button {...props}>
    {children}
  </button>
);
