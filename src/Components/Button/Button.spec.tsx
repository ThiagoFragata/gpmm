import React from "react";
import { render } from "@testing-library/react";
import { Button } from "../index";

describe("<Button />", () => {
  it("should render button with title", () => {
    render(<Button title="Teste" />);
  });
});
