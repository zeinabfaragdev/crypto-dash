import theme from "styled-theming";
import { css } from "styled-components";

const defaultTheme = "Dark";

export const lightTheme = defaultTheme === "Light";

export const bodyStyles = theme("mode", {
  light: css`
    background-color: #e1eaee;
    color: #061a44;
  `,
  dark: css`
    background-color: #010e2c;
    color: white;
  `,
});

export const color = theme("mode", {
  light: "white",
  dark: "#061a44",
});

export const color2 = theme("mode", {
  light: "white",
  dark: "#010e2c",
});

export const color3 = theme("mode", {
  light: "#09f010",
  dark: "#42ff3a",
});

export const fontColorGreen = `color: #03A9F4`;
export const fontColorWhite = `color: white`;

export const subtleBoxShadow = theme("mode", {
  light: "box-shadow: 0px 0px 5px 1px #a9b6ff",
  dark: "box-shadow: 0px 0px 5px 1px #121d5b",
});

export const subtleTextShadow = theme("mode", {
  light: "text-shadow: 0px 0px 25px #061a44",
  dark: "text-shadow: 0px 0px 30px #03ff03",
});

export const greenBoxShadow = `box-shadow: 0px 0px 4px 2px #5fff17`;
export const redBoxShadow = `box-shadow: 0px 0px 2px 2px #e41111`;

export const fontSizeBig = "font-size: 2em";
export const fontSize1 = "font-size: 1.5em;";
export const fontSize2 = "font-size: 1.0em";
export const fontSize3 = "font-size: .75em";

export const textAlignCenter = "text-align: center;";
