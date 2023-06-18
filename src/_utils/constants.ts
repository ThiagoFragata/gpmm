import { type typeStringStatus } from "@/_types/Common";
import { type IScreenSteps } from "@/_types/FirstAccess";
import { type ITabOptionsProfile } from "@/_types/Profile";
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
  TAB_LIST_PLACE: 1,
  TAB_LIST_TRANSPORT: 2,
  TAB_LIST_COMMUNICATION: 3
};

export const TABS_PROFILE: Record<string, ITabOptionsProfile> = {
  TAB_DATA: 1,
  TAB_PASSWORD: 2
};

export const FIRST_ACCESS_SCREENS: Record<string, IScreenSteps> = {
  SCREEN_GET_EMAIL: 0,
  SCREEN_GET_CODE: 1,
  SCREEN_GET_PASSWORD: 2
};

export const FORGOT_PASSWORD_SCREENS: Record<string, 0 | 1 | 2> = {
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

const PATHS_DRIVER = {
  recursosMotoristas: "/dashboard/recursos/motoristas",
  recursosNovoMotorista: "/dashboard/recursos/motoristas/novo",
  recursosEditarMotorista: "/dashboard/recursos/motoristas/editar/"
};

const PATHS_REQUESTS = {
  solicitacoesLocais: "/dashboard/solicitacoes/locais",
  solicitacoesNovoLocal: "/dashboard/solicitacoes/locais/novo",
  solicitacoesTranportes: "/dashboard/solicitacoes/tranportes",
  solicitacoesNovoTranporte: "/dashboard/solicitacoes/tranportes/novo",
  solicitacoesEditarTranporte: "/dashboard/solicitacoes/tranportes/editar/",
  solicitacoesComunicacao: "/dashboard/solicitacoes/comunicacao-interna",
  solicitacoesNovaComunicacao:
    "/dashboard/solicitacoes/comunicacao-interna/nova-mensagem"
};

export const PATHS = {
  login: "/",
  primeiroAcesso: "/primeiro-acesso",
  forgotPassword: "/recuperar-conta",
  criarConta: "/criar-conta",
  dashboard: {
    inicio: "/dashboard",
    recursos: "/dashboard/recursos",
    perfil: "/dashboard/perfil",
    notificoes: "/dashboard/notificoes",
    sobre: "/dashboard/sobre",
    ...PATHS_LOCAL,
    ...PATHS_TRANSPORTS,
    ...PATHS_USERS,
    ...PATHS_REQUESTS,
    ...PATHS_DRIVER
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

export const HOURS__AVAILABLE = [
  { id: 1, value: "08:00" },

  { id: 2, value: "08:30" },

  { id: 3, value: "09:00" },

  { id: 4, value: "09:30" },

  { id: 5, value: "10:00" },

  { id: 6, value: "10:30" },

  { id: 7, value: "11:00" },

  { id: 8, value: "11:30" },

  { id: 9, value: "12:00" },

  { id: 10, value: "12:30" },

  { id: 11, value: "13:00" },

  { id: 12, value: "13:30" },

  { id: 13, value: "14:00" },

  { id: 14, value: "14:30" },

  { id: 15, value: "15:00" },

  { id: 16, value: "15:30" },

  { id: 17, value: "16:00" },

  { id: 18, value: "16:30" },

  { id: 19, value: "17:00" },

  { id: 20, value: "17:30" },

  { id: 21, value: "18:00" },

  { id: 22, value: "18:30" },

  { id: 23, value: "19:00" },

  { id: 24, value: "19:30" },

  { id: 25, value: "20:00" },

  { id: 26, value: "20:30" },

  { id: 27, value: "21:00" },

  { id: 28, value: "21:30" },

  { id: 29, value: "22:00" }
];
