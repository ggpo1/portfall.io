import { memo } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
  baseColor: "#ffffff",
  buttonHeight: "32px",
  backgroundColorActive: "#62c400",
  textColorDefault: "#747474",
  textColorHover: "#000000",
  blockBorderRadius: "5px",
  blockShadow: "0px 0px 8px 0px rgba(34, 60, 80, 0.2)",
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}

export const Theme = memo(({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
));
