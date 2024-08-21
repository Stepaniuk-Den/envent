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
  id: string;
  src: string;
  alt: string;
  title: string;
  address: string;
  link: string;
}

export interface IProjectsProps {
  t: {
    title?: string;
    viewAll?: string;
    // list: IPropsProjectItem[];
    list: { [key: number]: IPropsProjectItem };
  };
}

export interface ISocialItem {
  id: number;
  svg: React.ElementType;
  href: string;
}
[];

export interface IAboutUsCountedProps {
  imageSrc: StaticImageData;
  t:{
    title: string;
    finishedProjects: string;
    ongoingProjects: string;
    employees:string;
  }
}

export interface IPartnersItem {
  title: string;
  logo: React.ElementType | StaticImageData;
  href: string;
}
[];
export interface IDescriptionProps {
  t: {
    title: string;
    firstDescr: string;
    secondDescr: string;
    thirdDescr: string;
    button: string;
    years: string;
    projects: string;
  };
}

export interface ITestimonialItem {
  text: string;
  fullName: string;
  image: string;
}

export interface ITestimonialsProps {
  t: {
    title: string;
    subtitle: string;
    items:  { [key: number]: ITestimonialItem };
  };
}
