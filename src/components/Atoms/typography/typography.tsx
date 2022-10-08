import styled, { createGlobalStyle } from "styled-components";

export const GlobalTypography = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Fredoka+One&family=Istok+Web:ital,wght@0,400;0,700;1,400;1,700&family=Lato:wght@400;700&display=swap'); 

html {
    font-family: 'Lato', sans-serif;
    font-size: 14px;
}
@media screen and (min-width: 320px) {
  html {
    font-size: calc(14px + 6 * ((100vw - 320px) / 680));
  }
}
@media screen and (min-width: 1000px) {
  html {
    font-size: 16px;
  }
}
`;

export const TEXT_SIZES = {
  TEXT_H1: {
    fontSize: "3rem",
    lineHeight: "145.49px",
  },
  TEXT_H2: {
    fontSize: "2.4rem",
    lineHeight: "129.3px",
  },
  TEXT_H3: {
    fontSize: "2rem",
    lineHeight: "114.94px",
  },
  TEXT_H4: {
    fontSize: "1.8rem",
    lineHeight: "102.17px",
  },
  TEXT_H5: {
    fontSize: "1.2rem",
    lineHeight: "90.38px",
  },
  TEXT_BODY: {
    fontSize: "0.9rem",
    lineHeight: "63.78px",
  },
  TEXT_BUTTON: {
    fontSize: "0.8rem",
    lineHeight: "39.82px",
  },
};

type TextSize = keyof typeof TEXT_SIZES;

// type TextColor = keyof typeof COLORS;

type TextProps = {
  size: TextSize;
  color?: "white";
};

type TextComponentProps = Partial<TextProps>;

export const TEXT_MIXIN = ({ size, color = "white" }: TextProps) => ({
  fontSize: TEXT_SIZES[size].fontSize,
  // lineHeight: TEXT_SIZES[size].lineHeight,
  // color: COLORS[color],
  marginBlockStart: "0.6rem",
  marginBlockEnd: "0.6rem",
  marginInlineStart: "0px",
  marginInlineEnd: "0px",
});

export const H1 = styled.h1<TextComponentProps>`
  ${(props) => TEXT_MIXIN({ size: props.size || "TEXT_H1" })}
`;

export const H2 = styled.h2<TextComponentProps>`
  ${(props) => TEXT_MIXIN({ size: props.size || "TEXT_H2" })}
`;

export const H3 = styled.h3<TextComponentProps>`
  ${(props) => TEXT_MIXIN({ size: props.size || "TEXT_H3" })}
`;

export const H4 = styled.h4<TextComponentProps>`
  ${(props) => TEXT_MIXIN({ size: props.size || "TEXT_H4" })}
`;

export const H5 = styled.h5<TextComponentProps>`
  ${(props) => TEXT_MIXIN({ size: props.size || "TEXT_H5" })}
`;

export const Paragraph = styled.p<TextComponentProps>`
  ${(props) => TEXT_MIXIN({ size: props.size || "TEXT_BODY" })}
`;

export const Span = styled.span<TextComponentProps>`
  ${(props) => TEXT_MIXIN({ size: props.size || "TEXT_BODY" })}
`;

export const Caption = styled.span<TextComponentProps>`
  ${(props) => TEXT_MIXIN({ size: props.size || "TEXT_BUTTON" })}
`;
