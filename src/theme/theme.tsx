import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
  baseColor: "#ffffff",
  buttonHeight: "32px",
  backgroundColorActive: "#027BFF",
  textColorDefault: "#747474",
  textColorHover: "#000000",
  blockBorderRadius: "5px",
  blockShadow: "0px 0px 8px 0px #027BFF",
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}

export const Theme = React.memo<React.PropsWithChildren<{}>>(({ children }) => (
  <ThemeProvider theme={theme}>{children as any}</ThemeProvider>
));
