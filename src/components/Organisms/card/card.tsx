import React from "react";
import styled from "styled-components";
import { COLORS } from "../../Atoms/colors/colors";
import { TEXT_MIXIN } from "../../Atoms/typography/typography";
import { Paragraph, H5 } from "../../Atoms/typography/typography";

const CardWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
`;

const PillTag = styled.span`
  background-color: #9e4b7b;
  color: ${COLORS.WHITE};
  border-radius: 8px;
  padding: 4px 8px;
  ${() => TEXT_MIXIN({ size: "TEXT_BUTTON" })}
`;

const Card = styled.li`
  background-color: ${COLORS.NEUTRAL_COLOR_DARK};
  border-radius: 0.5rem;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  padding-bottom: 1rem;
  max-width: 600px;
  color: ${COLORS.WHITE};
  text-align: center;

  H5 {
    padding: 0 25px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > :last-child {
    margin-bottom: 0;
  }
`;

const ImgStyle = styled.image`
  border-radius: 0.5rem 0.5rem 0 0;

  img {
    object-fit: cover;
    width: 100%;
  }

  img ~ * {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const CardComponent: React.FC = () => (
  <CardWrapper>
    <Card>
      <ImgStyle>
        <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-model-unselect-gallery-1-202207?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1654893619853" />
      </ImgStyle>
      <H5>REACT-CUTE-DICE</H5>
      <PillTag>Javascript</PillTag>
    </Card>
  </CardWrapper>
);
