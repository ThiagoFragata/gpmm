import React from "react";
import { Login } from "@/Screens";
import { Public as PublicTemplate } from "@/Layout/Public";

export default function LoginScreen(): JSX.Element {
  return (
    <PublicTemplate>
      <Login />
    </PublicTemplate>
  );
}
