import { PATHS } from "./constants";
import { type PermissionRulesData } from "@/_types/Permissions";
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
    destination: PATHS.dashboard.solicitacoesLocais,
    permanent: false
  }
};

export function checkPublicPermission(
  session: Session | null
): PermissionRulesData {
  if (session !== null) {
    return toHome;
  }
  return withoutRedirect;
}

export function checkProfilePermission({
  session,
  isOnlyAdm
}: {
  session: Session | null;
  isOnlyAdm: boolean;
}): PermissionRulesData {
  if (session === null) {
    return toLogin;
  }

  if (session?.user_type === "ADMIN") {
    return withoutRedirect;
  }

  if (session?.user_type === "NORMAL" && isOnlyAdm) {
    return toHome;
  }

  if (session?.user_type === "NORMAL" && !isOnlyAdm) {
    return withoutRedirect;
  }

  return toHome;
}
