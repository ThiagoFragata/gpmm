import { type ITabOptions } from "@/_types/ListResources";

export const widthSideBarExpanded = 220;
export const widthSideBarRetractable = 60;

export const TABS_RESOURCES: Record<string, ITabOptions> = {
  TAB_ONBOARD: 0,
  TAB_LIST_PLACE: 1,
  TAB_LIST_TRANSPORT: 2,
  TAB_LIST_DRIVER: 3
};

export const PATHS = {
  login: "/",
  forgotPassword: "/recuperar-conta",
  dashboard: {
    inicio: "/dashboard",
    solicitacoes: "/dashboard/solicitacoes",
    recursos: "/dashboard/recursos",
    recursosLocais: "/dashboard/recursos/locais",
    recursosTransportes: "/dashboard/recursos/transportes",
    recursosMotoristas: "/dashboard/recursos/motoristas",
    usuarios: "/dashboard/usuarios",
    perfil: "/dashboard/perfil",
    notificoes: "/dashboard/notificoes",
    sobre: "/dashboard/sobre"
  }
};
