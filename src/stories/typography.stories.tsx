import React from "react";
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  Span,
  Caption,
  Paragraph,
  GlobalTypography,
} from "./typography";

export default {
  title: "Typography",
};

export const TypographyComponents = () => (
  <>
    <GlobalTypography />
    <H1>Text h1</H1>
    <H2>Text h2</H2>
    <H3>Text h3</H3>
    <H4>Text h4</H4>
    <H5>Text h5</H5>
    <Span>Text span</Span>
    <Paragraph>Text paragraph</Paragraph>
    <Caption>Text caption</Caption>
  </>
);
