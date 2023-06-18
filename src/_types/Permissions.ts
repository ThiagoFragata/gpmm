export type PermissionRulesData =
  | {
      redirect: {
        destination: string;
        permanent: boolean;
      };
    }
  | { props: Record<string, unknown> };
