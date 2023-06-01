// RESOURCES
export const RESOURCE = "recursos";
export const RESOURCE_LOCAL = "recursos/locais";
export const RESOURCE_TRANSPORT = "recursos/transportes";

// FIRST ACCESS
export const REQUEST_CODE = "pessoas/envia-codigo/ativacao-usuario";
export const VALID_CODE = "pessoas/valida-codigo";
export const CREATE_PASSWORD = (value: number): string =>
  `pessoas/${value}/senha`;

// SECTORS
export const SECTORS = "setores";

// USERS
export const USERS = "pessoas";
export const USER_ADM_SEND_CODE = "pessoas/envia-codigo/envio-admin";
