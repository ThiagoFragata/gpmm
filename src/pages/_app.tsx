import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/style/ThemeProvider";
import GlobalStyle from "@/style/global";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

import localFont from "next/font/local";

export const roboto = localFont({
  src: [
    {
      path: "../assets/fonts/Roboto-Bold.ttf",
      weight: "700",
      style: "bold"
    },
    {
      path: "../assets/fonts/Roboto-Light.ttf",
      weight: "300",
      style: "light"
    },
    {
      path: "../assets/fonts/Roboto-Medium.ttf",
      weight: "500",
      style: "medium"
    },
    {
      path: "../assets/fonts/Roboto-Regular.ttf",
      weight: "400",
      style: "regular"
    }
  ]
});

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const getLayout = Component.getLayout ?? (page => page);
  return (
    <ThemeProvider>
      <main className={roboto.className}>
        {getLayout(<Component {...pageProps} />)}
        <GlobalStyle />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
