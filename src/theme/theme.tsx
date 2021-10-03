import { memo } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  baseColor: "#ffffff",
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}

export const Theme = memo(({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
));
