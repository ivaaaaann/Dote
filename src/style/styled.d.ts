import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    isDark: boolean;
    backgroundColor: string;
    subBackgroundColor: string;
    contrast: string;
  }
}
