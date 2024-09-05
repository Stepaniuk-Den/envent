import { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

export interface IHeroProps {
  imageSrc: string | StaticImageData;
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
  id: string;
  src: string;
  alt: string;
  title: string;
  link: string;
  address?: string;
  onClick: () => void;
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
  t: {
    title: string;
    finishedProjects: string;
    ongoingProjects: string;
    employees: string;
  };
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
    items: { [key: number]: ITestimonialItem };
  };
}

export interface IHandleNavigationProps<T> {
  currentIndex: number | null;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  array: T[];
}

export interface AnimatedTitleProps {
  title: string;
  className?: string;
}

export interface IPartnersProps {
  t: { title: string; link: string };
}

export interface PropsServiceCard {
  id: string;
  hero: {
    title: string;
    description: string;
    button: string;
  };
  images: {
    [key: number]: {
      id: string;
      src: string;
      alt: string;
    };
  };
  imgCard: {
    [key: number]: {
      id: string;
      src: string;
      alt: string;
    };
  };
  slug?: string;
  heroBg?: string | StaticImageData;
  secondBtn: string;
  alignRight?: boolean;
  p1: string;
  p2?: string;
  p3: string;
  p4: string;
  list?:{
    l1: string,
    l2: string,
    l3: string,
    l4?: string,
    l5?: string,
    l6?: string,
    l7?:string,
    l8?: string,
  };
  process?: {
    text: string;
    list: {
      l1: string;
      l2: string;
      l3: string;
      l4: string;
      l5: string;
    };
  };
}

export interface IServiceAboutProps {
  title: string;
  phone: string;
  btnForm: string;
}

export interface IImageItem {
  id: string;
  src: string;
  alt: string;
  title?: string;
  area_label?: string;
  address?: string;
  link?: string;
}

export interface IImageList {
  images: Record<number, IImageItem>;
}
