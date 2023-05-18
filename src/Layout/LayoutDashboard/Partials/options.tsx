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

export const ITEMS__SIDEBAR = {
  MAIN: [
    {
      id: "inicio",
      label: "Início",
      path: PATHS.dashboard.inicio,
      paths: [PATHS.dashboard.inicio],
      icon: ({ className }: { className?: string }) => (
        <DashboardIcon className={className} />
      )
    },
    {
      id: "solicitacoes",
      label: "Solicitações",
      path: PATHS.dashboard.solicitacoes,
      paths: [PATHS.dashboard.solicitacoes],
      icon: ({ className }: { className?: string }) => (
        <MySolicitationIcon className={className} />
      )
    },
    {
      id: "recursos",
      label: "Recursos",
      path: PATHS.dashboard.recursos,
      paths: [
        PATHS.dashboard.recursos,
        PATHS.dashboard.recursosLocais,
        PATHS.dashboard.recursosTransportes,
        PATHS.dashboard.recursosMotoristas,
        PATHS.dashboard.recursosNovoLocal
      ],
      icon: ({ className }: { className?: string }) => (
        <ResourcesIcon className={className} />
      )
    },
    {
      id: "usuarios",
      label: "Usuários",
      path: PATHS.dashboard.usuarios,
      paths: [PATHS.dashboard.usuarios],
      icon: ({ className }: { className?: string }) => (
        <UsersIcon className={className} />
      )
    },
    {
      id: "perfil",
      label: "Perfil",
      path: PATHS.dashboard.perfil,
      paths: [PATHS.dashboard.perfil],
      icon: ({ className }: { className?: string }) => (
        <ProfileIcon className={className} />
      )
    }
    // {
    //   id: "notificacoes",
    //   label: "Notificações",
    //   path: PATHS.dashboard.notificoes,
    //   paths: [PATHS.dashboard.notificoes],
    //   icon: ({ className }: { className?: string }) => (
    //     <NotificationIcon className={className} />
    //   )
    // }
  ],
  ABOUT: {
    label: "Sobre",
    path: PATHS.dashboard.sobre,
    paths: [],
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
