import React from "react";
import { PATHS } from "@/_utils/constants";

import {
  AboutIcon,
  ArrowLeftIcon,
  DashboardIcon,
  LogOutIcon,
  MySolicitationIcon,
  // NotificationIcon,
  ProfileIcon,
  ResourcesIcon,
  UsersIcon
} from "@/assets/icons";

export interface ITEMS_MAIN {
  id: string;
  label: string;
  path: string;
  paths: string[];
  icon: ({ className }: { className?: string }) => JSX.Element;
}

const HOME = {
  id: "inicio",
  label: "Início",
  path: PATHS.dashboard.inicio,
  paths: [PATHS.dashboard.inicio],
  icon: ({ className }: { className?: string }) => (
    <DashboardIcon className={className} />
  )
};

const RESOURCE = {
  id: "recursos",
  label: "Recursos",
  path: PATHS.dashboard.recursos,
  paths: [
    PATHS.dashboard.recursos,
    PATHS.dashboard.recursosLocais,
    PATHS.dashboard.recursosNovoLocal,
    PATHS.dashboard.recursosEditarLocal,
    PATHS.dashboard.recursosTransportes,
    PATHS.dashboard.recursosEditarTransporte,
    PATHS.dashboard.recursosNovoTransporte,
    PATHS.dashboard.recursosMotoristas,
    PATHS.dashboard.recursosNovoMotorista,
    PATHS.dashboard.recursosEditarMotorista
  ],
  icon: ({ className }: { className?: string }) => (
    <ResourcesIcon className={className} />
  )
};

const USERS = {
  id: "usuarios",
  label: "Usuários",
  path: PATHS.dashboard.usuarios,
  paths: [
    PATHS.dashboard.usuarios,
    PATHS.dashboard.usuarioNovo,
    PATHS.dashboard.usuarioEditar
  ],
  icon: ({ className }: { className?: string }) => (
    <UsersIcon className={className} />
  )
};

const SOLICITATIONS = {
  id: "solicitacoes",
  label: "Solicitações",
  path: PATHS.dashboard.solicitacoesLocais,
  paths: [
    PATHS.dashboard.solicitacoesLocais,
    PATHS.dashboard.solicitacoesLocais,
    PATHS.dashboard.solicitacoesNovoLocal,
    PATHS.dashboard.solicitacoesTranportes,
    PATHS.dashboard.solicitacoesNovoTranporte,
    PATHS.dashboard.solicitacoesEditarTranporte,
    PATHS.dashboard.solicitacoesComunicacao,
    PATHS.dashboard.solicitacoesNovaComunicacao
  ],
  icon: ({ className }: { className?: string }) => (
    <MySolicitationIcon className={className} />
  )
};

const PROFILE = {
  id: "perfil",
  label: "Perfil",
  path: PATHS.dashboard.perfil,
  paths: [PATHS.dashboard.perfil],
  icon: ({ className }: { className?: string }) => (
    <ProfileIcon className={className} />
  )
};

export const ITEMS_SIDEBAR = {
  ABOUT: {
    label: "Sobre",
    path: PATHS.dashboard.sobre,
    paths: [PATHS.dashboard.sobre],
    icon: ({ className }: { className?: string }) => (
      <AboutIcon className={className} />
    )
  },
  CLOSE: {
    label: "Sair",
    icon: ({ className }: { className?: string }) => (
      <LogOutIcon className={className} />
    )
  },
  EXPAND: {
    label: "Retrair",
    icon: ({ className }: { className?: string }) => (
      <ArrowLeftIcon className={className} />
    )
  }
};

export const ITEMS_SIDEBAR_ADMIN = {
  ...ITEMS_SIDEBAR,
  // MAIN: [HOME, RESOURCE, USERS, SOLICITATIONS, PROFILE]
  MAIN: [SOLICITATIONS, RESOURCE, USERS, PROFILE]
};

export const ITEMS_SIDEBAR_NORMAL = {
  ...ITEMS_SIDEBAR,
  // MAIN: [HOME, SOLICITATIONS, PROFILE]
  MAIN: [SOLICITATIONS, PROFILE]
};
