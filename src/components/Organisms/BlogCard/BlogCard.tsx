import React from "react";
import styled from "styled-components";
import { COLORS } from "../../Atoms/colors/colors";
import { Caption, TEXT_MIXIN } from "../../Atoms/typography/typography";
import { Paragraph, H4 } from "../../Atoms/typography/typography";

const PillTag = styled.span`
  background-color: #9e4b7b;
  color: ${COLORS.WHITE};
  border-radius: 8px;
  padding: 4px 8px;
  ${() => TEXT_MIXIN({ size: "TEXT_BUTTON" })}
`;

const Card = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  color: ${COLORS.DARK_COLOR};
  padding: 10px;
  background-color: red;
  border-bottom: 3px solid ${COLORS.WHITE};
`;

export const BlogCardComponent: React.FC = () => (
  <Card>
    <Caption>23/10/1990</Caption>
    <H4>What are props in react and how to use them with typescript?</H4>
    <Paragraph>
      Is a pattern to share information between a parent component and a child
      component
    </Paragraph>
    <div>
      <PillTag>React</PillTag>
    </div>
  </Card>
);
