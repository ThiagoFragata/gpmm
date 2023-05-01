import React from "react";
import { ContainerHome } from "./style";
import type { NextPageWithLayout } from "@/pages/_app";

export const Home: NextPageWithLayout = () => {
  return (
    <ContainerHome>
      <h1>Home</h1>
    </ContainerHome>
  );
};
