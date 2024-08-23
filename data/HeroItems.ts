import {
  SideServicesAssembling,
  SideServicesDesigning,
  SideServicesProduction,
  SideTodoAutomation,
  SideTodoCommissioning,
  SideTodoMaintenance,
} from "@/helpers/imagesImport";
import { IHeroRightSideItems } from "@/helpers/interfaces";

export const heroRightSideItems: IHeroRightSideItems = {
  services: [
    { svg: SideServicesDesigning, name: "SideServicesDesigning" },
    { svg: SideServicesProduction, name: "SideServicesProduction" },
    { svg: SideServicesAssembling, name: "SideServicesAssembling" },
  ],
  todo: [
    { svg: SideTodoAutomation, name: "SideTodoAutomation" },
    { svg: SideTodoCommissioning, name: "SideTodoCommissioning" },
    { svg: SideTodoMaintenance, name: "SideTodoMaintenance" },
  ],
};
