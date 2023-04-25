import React from "react";
import { ContainerHome } from "./style";
import { Button } from "@/Components";

export function Home(): JSX.Element {
  return (
    <ContainerHome>
      <Button title="GREEN" /> <br /> <br />
      <Button title="ORANGE" variant="outline" /> <br /> <br />
      <Button title="BLUE" variant="danger" /> <br /> <br />
    </ContainerHome>
  );
}
