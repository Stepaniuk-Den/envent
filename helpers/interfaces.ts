import { StaticImageData } from "next/image";

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
  svg: React.ElementType;
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
  className:"blue_dark"| "blue_white" | "dark_blue";
  firstChildren: React.ReactNode;
  secondChildren: React.ReactNode;
}

export interface ILineProps {
  className: "yellow-left" | "yellow-center" | "dark";
}

export interface IPropsProjectItem {
  id: number;
  src: StaticImageData;
  alt: string;
  title: string;
  address: string;
  link: string;
}

export interface ISocialItem {
  id: number;
  svg: React.ElementType;
  href: string;
}
[];
export interface IAboutUsCountedProps {
  imageSrc: StaticImageData;
}
