import { type typeStringStatus } from "@/_types/Common";
import { type IScreenSteps } from "@/_types/FirstAccess";
import { type ITabOptionsRequests } from "@/_types/Requests";
import { type ITabOptions } from "@/_types/Resources";

export const widthSideBarExpanded = 220;
export const widthSideBarRetractable = 60;

export const TABS_RESOURCES: Record<string, ITabOptions> = {
  TAB_ONBOARD: 0,
  TAB_LIST_PLACE: 1,
  TAB_LIST_TRANSPORT: 2,
  TAB_LIST_DRIVER: 3
};

export const TABS_REQUESTS: Record<string, ITabOptionsRequests> = {
  TAB_LIST_PLACE: 0,
  TAB_LIST_TRANSPORT: 1
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

const PATHS_USERS = {
  usuarios: "/dashboard/usuarios",
  usuarioNovo: "/dashboard/usuarios/novo",
  usuarioEditar: "/dashboard/usuarios/editar/"
};

const PATHS_REQUESTS = {
  solicitacoesLocais: "/dashboard/solicitacoes/locais",
  solicitacoesTranportes: "/dashboard/solicitacoes/tranportes"
};

export const PATHS = {
  login: "/",
  primeiroAcesso: "/primeiro-acesso",
  forgotPassword: "/recuperar-conta",
  dashboard: {
    inicio: "/dashboard",
    recursos: "/dashboard/recursos",
    recursosMotoristas: "/dashboard/recursos/motoristas",
    perfil: "/dashboard/perfil",
    notificoes: "/dashboard/notificoes",
    sobre: "/dashboard/sobre",
    ...PATHS_LOCAL,
    ...PATHS_TRANSPORTS,
    ...PATHS_USERS,
    ...PATHS_REQUESTS
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

export const PROFILE_TYPE: Array<{ id: number; name: string }> = [
  {
    id: 0,
    name: "NORMAL"
  },
  {
    id: 1,
    name: "ADMIN"
  }
];

export const TYPES_STATUS: typeStringStatus[] = [
  "PENDENTE_ATIVACAO_USUARIO",
  "PENDENTE_ATIVACAO_ADMIN",
  "DESATIVADA",
  "ATIVADA"
];

export const NAME_COOKIE_LOGIN = "42auth-nextts";
