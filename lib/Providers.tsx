"use client";

import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import StyledComponentsRegistry from "./registry";
import GlobalStyles from "../styles/GlobalStyles";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {props.children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
