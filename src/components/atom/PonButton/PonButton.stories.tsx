import React from "react";
import { PonButton } from "src/components/atom/PonButton/PonButton";

export default {
  title: "atoms/PonButton",
};

const props = {
  onClick: () => null,
};

export const Default = () => (
  <PonButton onClick={props.onClick}>default</PonButton>
);
