import React from "react";
import { ForgotPassword } from "@/Screens";
import { Public as PublicTemplate } from "@/Layout/Public";

export default function ForgotPasswordScreen(): JSX.Element {
  return (
    <PublicTemplate>
      <ForgotPassword />
    </PublicTemplate>
  );
}
