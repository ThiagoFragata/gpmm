import { type IScreenSteps } from "@/_types/FirstAccess";
import { type ITabOptions } from "@/_types/Resources";

export const widthSideBarExpanded = 220;
export const widthSideBarRetractable = 60;

export const TABS_RESOURCES: Record<string, ITabOptions> = {
  TAB_ONBOARD: 0,
  TAB_LIST_PLACE: 1,
  TAB_LIST_TRANSPORT: 2,
  TAB_LIST_DRIVER: 3
};

export const FIRST_ACCESS_SCREENS: Record<string, IScreenSteps> = {
  SCREEN_GET_EMAIL: 0,
  SCREEN_GET_CODE: 1,
  SCREEN_GET_PASSWORD: 2
};

export const AMOUNT_PAGE_ITEMS = 2;

const PATHS_LOCAL = {
  recursosLocais: "/dashboard/recursos/locais",
  recursosNovoLocal: "/dashboard/recursos/locais/novo",
  recursosEditarLocal: "/dashboard/recursos/locais/editar/"
};

const PATHS_TRANSPORTS = {
  recursosTransportes: "/dashboard/recursos/transportes",
  recursosNovoTransporte: "/dashboard/recursos/transportes/novo",
  recursosEditarTransporte: "/dashboard/recursos/transportes/editar/"
};

export const PATHS = {
  login: "/",
  primeiroAcesso: "/primeiro-acesso",
  forgotPassword: "/recuperar-conta",
  dashboard: {
    inicio: "/dashboard",
    solicitacoes: "/dashboard/solicitacoes",
    recursos: "/dashboard/recursos",
    recursosMotoristas: "/dashboard/recursos/motoristas",
    usuarios: "/dashboard/usuarios",
    usuarioNovo: "/dashboard/usuarios/novo",
    perfil: "/dashboard/perfil",
    notificoes: "/dashboard/notificoes",
    sobre: "/dashboard/sobre",
    ...PATHS_LOCAL,
    ...PATHS_TRANSPORTS
  }
};

export const NAME_DAYS = {
  full: [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado"
  ],
  short: ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sáb."]
};
