import { COLORS } from "./colors";
import { H1 } from "../typography/typography";
import React from "react";

export default {
  title: "Color",
};

interface ColorProps {
  color: string;
}

export const ColorPalette = () => (
  <div>
    <H1 style={{ color: COLORS.BACKGROUND_COLOR }}>Background color</H1>
    <H1 style={{ color: COLORS.BLACK }}>Black</H1>
    <H1 style={{ color: COLORS.NEUTRAL_COLOR }}>Neutral</H1>
    <H1 style={{ color: COLORS.NEUTRAL_COLOR_DARK }}>Neutral color Dark</H1>
    <H1 style={{ color: COLORS.PRIMARY_COLOR }}>Primary color</H1>
    <H1 style={{ color: COLORS.SECONDARY_COLOR }}>Secondary Color</H1>
    <H1 style={{ color: COLORS.THIRD_COLOR }}>Third Color</H1>
    <H1 style={{ color: COLORS.WHITE }}>WHITE</H1>
  </div>
);
