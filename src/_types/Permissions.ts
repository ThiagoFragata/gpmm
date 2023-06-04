export interface PermissionRulesProps {
  context: any;
  //   jwt?: string;
  //   typeProfile: string;
  isOnlyAdm?: boolean;
}

export type PermissionRulesData =
  | {
      redirect: {
        destination: string;
        permanent: boolean;
      };
    }
  | { props: Record<string, unknown> };
