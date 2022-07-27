import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; // style-reset 패키지
import { palette } from "lib/styles/palette";
const {
  sizes: { full },
} = palette;
const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    #root {
        min-height: ${full};
    }
    html {
        height: ${full};
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        box-sizing: border-box;
        min-height: ${full};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, ‘Courier New‘, monospace;
    }
`;

export default GlobalStyles;
