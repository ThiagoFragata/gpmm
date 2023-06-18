import {
  type PermissionRulesProps,
  type PermissionRulesData
} from "@/_types/Permissions";
import { PATHS } from "./constants";
import { parseCookies } from "nookies";
import { type Session } from "next-auth";

const withoutRedirect = { props: {} };

const toLogin = {
  redirect: {
    destination: PATHS.login,
    permanent: false
  }
};

const toHome = {
  redirect: {
    destination: PATHS.dashboard.inicio,
    permanent: false
  }
};

export function checkPermissionRules({
  context,
  isOnlyAdm = true
}: PermissionRulesProps): PermissionRulesData {
  const cookie = parseCookies(context);
  const isValidDateCookie =
    cookie["42auth-nextts"] !== undefined &&
    typeof cookie["42auth-nextts"] === "string";
  const data = isValidDateCookie ? JSON.parse(cookie["42auth-nextts"]) : "";

  if (data?.jwt === undefined) {
    return toLogin;
  }

  if (data?.typeProfile === "ADMIN") {
    return withoutRedirect;
  }

  if (data?.typeProfile === "NORMAL" && !isOnlyAdm) {
    return withoutRedirect;
  }

  return toLogin;
  // return toHome;
  // return withoutRedirect;
}

export function checkExistSession({
  context
}: PermissionRulesProps): PermissionRulesData {
  const cookie = parseCookies(context);
  const isValidDateCookie =
    cookie["42auth-nextts"] !== undefined &&
    typeof cookie["42auth-nextts"] === "string";
  const data = isValidDateCookie ? JSON.parse(cookie["42auth-nextts"]) : "";

  if (data?.typeProfile === "ADMIN" || data?.typeProfile === "NORMAL") {
    return toHome;
  }

  return withoutRedirect;
}
// NEW AUTH
export function checkPublicPermission(
  session: Session | null
): PermissionRulesData {
  if (session !== null) {
    return toHome;
  }
  return withoutRedirect;
}
