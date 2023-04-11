import React from "react";
import type { ThemeProviderProps } from "@/_types/ThemeProviderProps";
import { ThemeProvider as Provider } from "styled-components";
import theme from "./theme";

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  return <Provider theme={theme}>{children}</Provider>;
}
