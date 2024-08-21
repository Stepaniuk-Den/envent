import { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

export interface IHeroProps {
  imageSrc: StaticImageData;
  children?: React.ReactNode;
  className: string;
  t: {
    title: string;
    description: string;
    button: string;
  };
}

export interface IHeroRightSideItems {
  services: {
    svg: React.ElementType;
    name: string;
  }[];
  todo: {
    svg: React.ElementType;
    name: string;
  }[];
}

export interface IServiceItem {
  list: {
    [key: string]: { svgName: string; title: string; descriptions: string };
  };
}

export interface IHeroRightSideItem extends IServiceItem {
  title: string;
}

export interface IHeroRightSideList {
  className: string;
  t: IHeroRightSideItem;
}

export interface IButtonVariableColor {
  className: "blue_dark" | "blue_white" | "dark_blue";
  firstChildren: React.ReactNode;
  secondChildren: React.ReactNode;
}

export interface ILineProps {
  className: "yellow-left" | "yellow-center" | "dark";
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

export interface ISocialItem {
  id: number;
  svg: React.ElementType;
  href: string;
}
[];

export interface IAboutUsCountedProps {
  imageSrc: StaticImageData;
}

export interface IPartnersItem {
  title: string;
  logo: React.ElementType | StaticImageData;
  href: string;
}
[];
