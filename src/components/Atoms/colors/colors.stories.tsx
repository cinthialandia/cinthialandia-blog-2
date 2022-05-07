import styled from "styled-components";
import { COLORS } from "./colors";
import { Paragraph, H1 } from "../typography/typography";
import React from "react";

export default {
  title: "Color",
};

interface ColorProps {
  color: string;
}

const Color = styled.div<ColorProps>`
  padding: 8px;
`;

export const ColorPalette = () => (
  <div>
    <H1 style={{ color: COLORS.BACKGROUND_COLOR }}>Background color</H1>
    <H1 style={{ color: COLORS.BLACK }}>Background color</H1>
    <H1 style={{ color: COLORS.NEUTRAL_COLOR }}>Background color</H1>
    <H1 style={{ color: COLORS.NEUTRAL_COLOR_DARK }}>Background color</H1>
    <H1 style={{ color: COLORS.PRIMARY_COLOR }}>Background color</H1>
    <H1 style={{ color: COLORS.SECONDARY_COLOR }}>Background color</H1>
    <H1 style={{ color: COLORS.THIRD_COLOR }}>Background color</H1>
    <H1 style={{ color: COLORS.WHITE }}>WHITE</H1>
  </div>
);
