import React from "react";
import { ContainerHome } from "./style";
import { Button } from "@/Components";

export function Home(): JSX.Element {
  return (
    <ContainerHome>
      <Button title="GREEN" variant="green" /> <br /> <br />
      <Button title="ORANGE" variant="orange" /> <br /> <br />
      <Button title="BLUE" variant="blue" /> <br /> <br />
      <Button title="RED" variant="red" /> <br /> <br />
    </ContainerHome>
  );
}
