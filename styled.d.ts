import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    border: string;
    background: string;
    text: string;
  }
}
