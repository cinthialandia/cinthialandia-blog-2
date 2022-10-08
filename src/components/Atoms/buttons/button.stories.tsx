import React from "react";
import { ButtonComponent } from "./button";

export default {
  title: "Button",
};

export const PrimaryButtonRose = () => (
  <ButtonComponent color="PRIMARY_COLOR">Primary Button</ButtonComponent>
);

export const PrimaryButtonSecondary = () => (
  <ButtonComponent color="SECONDARY_COLOR">Seconday Button</ButtonComponent>
);

export const PrimaryButtonDark = () => (
  <ButtonComponent color="DARK_COLOR">Dark Button</ButtonComponent>
);
