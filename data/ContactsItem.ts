import {
  EmailFilled,
  LocationsFilled,
  PhoneFilled,
} from "@/helpers/imagesImport";

export const contactsItems = [
  {
    id: 1,
    svg: LocationsFilled,
    href: "https://www.google.com/maps/place/%D0%AD%D0%BD%D0%B5%D1%80%D0%B3%D0%BE%D0%B2%D0%B5%D0%BD%D1%82%D0%B8%D0%BB%D1%8F%D1%86%D0%B8%D1%8F/@50.4652891,30.6121503,19.57z/data=!4m6!3m5!1s0x40d4d01cfa28cadb:0xbf8fe60e795e3392!8m2!3d50.465491!4d30.611585!16s%2Fg%2F11xfblj0_?authuser=0&entry=ttu",
    descriptions: "Дарницький бульвар, 12, Київ, 02000",
  },
  {
    id: 2,
    svg: PhoneFilled,
    href: "tel:+380445038377",
    descriptions: "+38 (044) 503 83 77",
  },
  {
    id: 3,
    svg: EmailFilled,
    href: "mailto:info@envent.kiev.ua",
    descriptions: "info@envent.kiev.ua",
  },
];
