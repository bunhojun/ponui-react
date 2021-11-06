import React from "react";
import { PonButton } from "./PonButton";

export default {
  title: "atoms/PonButton",
};

const props = {
  onClick: () => null,
};

export const Default = () => (
  <PonButton onClick={props.onClick}>default</PonButton>
);

export const Focussed = () => (
  <PonButton onClick={props.onClick}>focussed</PonButton>
);
Focussed.parameters = { pseudo: { focus: true } };

export const Disabled = () => (
  <PonButton onClick={props.onClick} disabled>
    disabled
  </PonButton>
);
