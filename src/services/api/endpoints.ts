// RESOURCES
export const RESOURCE = "recursos";
export const RESOURCE_LOCAL = "recursos/locais";
export const RESOURCE_TRANSPORT = "recursos/transportes";

// FIRST ACCESS
export const REQUEST_CODE = "pessoas/envia-codigo/ativacao-usuario";
export const VALID_CODE = "pessoas/valida-codigo";
export const CREATE_PASSWORD = (value: number): string =>
  `pessoas/${value}/senha`;

// FORGOT PASSWORD
export const FORGOT_REQUEST_CODE = "pessoas/envia-codigo/recuperar-conta";

// SECTORS
export const SECTORS = "setores";

// USERS
export const USERS = "pessoas";
export const PUBLIC_USERS = "pessoas/auto";
export const UPDATE_STATUS = (value: number): string =>
  `pessoas/${value}/status`;
export const USER_UPDATE_STATUS = "pessoas/status/envio-email";
export const PUBLIC_USERS_SEND_EMAIL = "pessoas/auto/envio-emails";
export const LOGIN = "login";
export const USER_ADM_SEND_CODE = "pessoas/envia-codigo/envio-admin";

// REQUESTS
export const REQUEST_LOCAL = "solicitacoes/locais";
export const REQUEST_CREATE_LOCAL = "solicitacoes/local";
export const REQUEST_TRANSPORT = "solicitacoes/viagens";
export const REQUEST_CREATE_TRANSPORT = "solicitacoes/transporte";
export const REQUEST_COMMUNICATION = "comunicacao-interna";

// DRIVER
export const DRIVER = "pessoas/motoristas";
