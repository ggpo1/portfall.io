import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    baseColor: string;
    buttonHeight: string;
    backgroundColorActive: string;
    textColorDefault: string;
    textColorHover: string;
    blockBorderRadius: string;
    blockShadow: string;
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
