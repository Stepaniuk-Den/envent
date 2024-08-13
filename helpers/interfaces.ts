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
