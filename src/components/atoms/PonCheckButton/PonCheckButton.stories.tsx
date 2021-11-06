import React, { useState } from "react";
import { PonCheckButton } from "./PonCheckButton";

export default {
  title: "atoms/PonCheckButton",
};

export const DefaultWithState = () => {
  const [checked, setChecked] = useState(false);
  const onChange = () => {
    setChecked(!checked);
  };
  return (
    <PonCheckButton
      id="default"
      label="default"
      value="default"
      checked={checked}
      onChange={onChange}
    />
  );
};

export const Checked = () => (
  <PonCheckButton id="checked" label="checked" value="checked" checked />
);

export const Disabled = () => (
  <PonCheckButton
    id="disabled"
    label="disabled"
    value="disabled"
    checked={false}
    disabled
  />
);
