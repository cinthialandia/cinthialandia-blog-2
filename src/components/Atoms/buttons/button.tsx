import React from "react";
import styled from "styled-components";
import { COLORS } from "../colors/colors";
import { Caption } from "../typography/typography";

interface Props {
  color: "PRIMARY_COLOR" | "SECONDARY_COLOR" | "DARK_COLOR";
}

const ButtonStyle = styled.button<Props>`
  background-color: ${(props) => COLORS[props.color]};
  border-radius: 8px;
  border-width: 0;
  color: ${COLORS.WHITE};
  padding: 10px 25px;
  text-align: center;
  vertical-align: baseline;
  white-space: nowrap;
`;

export const Button: React.FC<Props> = ({ children, color }) => (
  <ButtonStyle color={color}>
    <Caption>{children}</Caption>
  </ButtonStyle>
);
