import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface IHeroProps {
  imageSrc: StaticImageData;
  children?: React.ReactNode;
  className: string;
}

interface IBaseItem {
  title: {
    en: string;
    ua: string;
  };
  descriptions: {
    en: string;
    ua: string;
  };
}

interface IServiceItem extends IBaseItem {
  svg: StaticImageData;
}

interface ISection<T> {
  title: {
    en: string;
    ua: string;
  };
  item: T[];
}

export interface IHeroRightSideItems {
  services: ISection<IServiceItem>;
  todo: ISection<IServiceItem>;
  contact: ISection<IBaseItem>;
}

export interface IHeroRightSideListProps {
  data: ISection<IServiceItem>;
  className: string;
}

export interface IButtonVariableColor {
  className: string;
  children: React.ReactNode;
}

export interface ILineProps {
  className: string;
}

export interface IMainButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
}

export interface IPropsProjectItem {
  id: number;
  src: StaticImageData;
  alt: string;
  title: string;
  address: string;
  link: string;
}
