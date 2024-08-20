import { Clock } from "@/helpers/imagesImport";
import { IHeroRightSideItems } from "@/helpers/interfaces";

export const heroRightSideItems: IHeroRightSideItems = {
  services: {
    title: { en: "Our Services", ua: "Сервіси" },
    item: [
      {
        svg: Clock,
        title: { en: "Building Construction", ua: "Building Construction" },
        descriptions: {
          en: "Lorem ipsum dolor sit consectetur adipiscing elit.",
          ua: "Lorem ipsum dolor sit consectetur adipiscing elit.",
        },
      },
      {
        svg: Clock,
        title: { en: "Foundation Work", ua: "Foundation Work" },
        descriptions: {
          en: "Lorem ipsum dolor sit consectetur adipiscing elit.",
          ua: "Lorem ipsum dolor sit consectetur adipiscing elit.",
        },
      },
      {
        svg: Clock,
        title: { en: "Site Management", ua: "Site Management" },
        descriptions: {
          en: "Lorem ipsum dolor sit consectetur adipiscing elit.",
          ua: "Lorem ipsum dolor sit consectetur adipiscing elit.",
        },
      },
    ],
  },

  todo: {
    title: { en: "What We Do", ua: "What We Do" },
    item: [
      {
        svg: Clock,
        title: { en: "Building Construction", ua: "Building Construction" },
        descriptions: {
          en: "Lorem ipsum dolor sit consectetur adipiscing elit.",
          ua: "Lorem ipsum dolor sit consectetur adipiscing elit.",
        },
      },
      {
        svg: Clock,
        title: { en: "Building Repairs", ua: "Building Repairs" },
        descriptions: {
          en: "Lorem ipsum dolor sit consectetur adipiscing elit.",
          ua: "Lorem ipsum dolor sit consectetur adipiscing elit.",
        },
      },
      {
        svg: Clock,
        title: { en: "Custom Design", ua: "Custom Design" },
        descriptions: {
          en: "Lorem ipsum dolor sit consectetur adipiscing elit.",
          ua: "Lorem ipsum dolor sit consectetur adipiscing elit.",
        },
      },
    ],
  },

  contact: {
    title: { en: "Contact Info", ua: "Contact Info" },
    item: [
      {
        title: { en: "Our Office", ua: "Our Office" },
        descriptions: {
          en: "1234 Divi St. #1000, San Francisc, CA 93251",
          ua: "1234 Divi St. #1000, San Francisc, CA 93251",
        },
      },
      {
        title: { en: "Open Office Hours", ua: "Open Office Hours" },
        descriptions: {
          en: "M-F: 9am – 6pm S-S: 10am – 4pm",
          ua: "M-F: 9am – 6pm S-S: 10am – 4pm",
        },
      },
      {
        title: { en: "Get in Touch", ua: "Get in Touch" },
        descriptions: {
          en: "constructioninc.com (346) 426-2351",
          ua: "constructioninc.com (346) 426-2351",
        },
      },
    ],
  },
};
