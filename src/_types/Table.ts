export interface tableItems {
  className?: string;
  label: string;
}

export interface TableTitleProps {
  className?: string;
  items: tableItems[];
}

export interface TableContentProps {
  className?: string;
  children?: JSX.Element | JSX.Element[] | null;
}

export interface TableItemProps {
  className?: string;
  item?: tableItems;
  children?: JSX.Element | JSX.Element[];
  loading?: JSX.Element | JSX.Element[];
}

export interface TableScrollProps {
  children?: JSX.Element | JSX.Element[] | null;
}
