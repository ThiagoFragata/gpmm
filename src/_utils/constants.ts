import { type ITabOptions } from "@/_types/ListResources";

export const widthSideBarExpanded = 220;
export const widthSideBarRetractable = 60;

export const TABS_RESOURCES: Record<string, ITabOptions> = {
  LIST_PLACE: 0,
  LIST_TRANSPORT: 1,
  LIST_DRIVER: 2
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
