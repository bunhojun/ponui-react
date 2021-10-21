import React from "react";
import { PonButton } from "./PonButton";

export default {
  title: "atoms/PonButton",
}

export const Default = () => {
  const onClick = () => null;
  return (
    <PonButton onClick={onClick}>
      default
    </PonButton>
  )
};
