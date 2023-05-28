export interface DefaultIconPros {
  fill?: string;
  className?: string;
}

export type ArrowIconPros = {
  direction?: "left" | "right" | "top" | "bottom";
} & DefaultIconPros;

export type IconsName =
  | "CloseEyeIcon"
  | "OpenEyeIcon"
  | "MySolicitationIcon"
  | "NotificationIcon"
  | "ProfileIcon"
  | "UsersIcon"
  | "DashboardIcon"
  | "AboutIcon"
  | "LogOutIcon"
  | "ArrowLeftIcon"
  | "ArrowIcon"
  | "SearchIcon"
  | "MoreIcon"
  | "ResourcesIcon"
  | "DotsIcon"
  | "DetailsIcon"
  | "EditIcon"
  | "TrashIcon"
  | "CloseIcon";
